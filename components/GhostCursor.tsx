'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

/* ─── hw-word hover effect ───────────────────────────────────────────── */
function useWordHover() {
  const prevWordRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const target = e.target as Element
      if (prevWordRef.current && prevWordRef.current !== target) {
        prevWordRef.current.style.color = ''
        prevWordRef.current = null
      }
      if (target.classList.contains('hw-word') && target !== prevWordRef.current) {
        const el = target as HTMLElement
        el.style.color = '#e8a84c'
        prevWordRef.current = el
      }
    }
    const onLeave = () => {
      if (prevWordRef.current) {
        prevWordRef.current.style.color = ''
        prevWordRef.current = null
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])
}

/* ─── GhostCursor ────────────────────────────────────────────────────── */
export default function GhostCursor({
  color = '#e8a84c',
  brightness = 1.2,
  trailLength = 20,
  inertia = 0.4,
  bloomStrength = 0.5,
  bloomRadius = 0.7,
  bloomThreshold = 0,
  grainIntensity = 0.03,
  edgeIntensity = 0,
  fadeDelayMs = 200,
  fadeDurationMs = 1000,
}: {
  color?: string
  brightness?: number
  trailLength?: number
  inertia?: number
  bloomStrength?: number
  bloomRadius?: number
  bloomThreshold?: number
  grainIntensity?: number
  edgeIntensity?: number
  fadeDelayMs?: number
  fadeDurationMs?: number
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useWordHover()

  const containerRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const composerRef = useRef<EffectComposer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const bloomPassRef = useRef<UnrealBloomPass | null>(null)
  const filmPassRef = useRef<ShaderPass | null>(null)

  const trailBufRef = useRef<THREE.Vector2[]>([])
  const headRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const currentMouseRef = useRef(new THREE.Vector2(0.5, 0.5))
  const velocityRef = useRef(new THREE.Vector2(0, 0))
  const fadeOpacityRef = useRef(1.0)
  const lastMoveTimeRef = useRef(typeof performance !== 'undefined' ? performance.now() : 0)
  const pointerActiveRef = useRef(false)
  const runningRef = useRef(false)

  const baseVertexShader = `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
  `

  const fragmentShader = `
    uniform float iTime;
    uniform vec3  iResolution;
    uniform vec2  iMouse;
    uniform vec2  iPrevMouse[MAX_TRAIL_LENGTH];
    uniform float iOpacity;
    uniform float iScale;
    uniform vec3  iBaseColor;
    uniform float iBrightness;
    uniform float iEdgeIntensity;
    varying vec2  vUv;

    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
    float noise(vec2 p){
      vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f);
      return mix(mix(hash(i+vec2(0.,0.)),hash(i+vec2(1.,0.)),f.x),
                 mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);
    }
    float fbm(vec2 p){
      float v=0.;float a=0.5;
      mat2 m=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.5));
      for(int i=0;i<5;i++){v+=a*noise(p);p=m*p*2.;a*=0.5;}
      return v;
    }
    vec4 blob(vec2 p, vec2 mp, float intensity, float activity){
      vec2 q=vec2(fbm(p*iScale+iTime*.1),fbm(p*iScale+vec2(5.2,1.3)+iTime*.1));
      vec2 r=vec2(fbm(p*iScale+q*1.5+iTime*.15),fbm(p*iScale+q*1.5+vec2(8.3,2.8)+iTime*.15));
      float smoke=fbm(p*iScale+r*0.8);
      float radius=0.5+0.3*(1./iScale);
      float df=1.-smoothstep(0.,radius*activity,length(p-mp));
      float alpha=pow(smoke,2.5)*df;
      vec3 c=mix(iBaseColor,mix(iBaseColor,vec3(1.),0.15),sin(iTime*.5)*.5+.5);
      return vec4(c*alpha*intensity,alpha*intensity);
    }
    void main(){
      vec2 uv=(gl_FragCoord.xy/iResolution.xy*2.-1.)*vec2(iResolution.x/iResolution.y,1.);
      vec2 mouse=(iMouse*2.-1.)*vec2(iResolution.x/iResolution.y,1.);
      vec3 colorAcc=vec3(0.); float alphaAcc=0.;
      vec4 b=blob(uv,mouse,1.,iOpacity); colorAcc+=b.rgb; alphaAcc+=b.a;
      for(int i=0;i<MAX_TRAIL_LENGTH;i++){
        vec2 pm=(iPrevMouse[i]*2.-1.)*vec2(iResolution.x/iResolution.y,1.);
        float t=pow(1.-float(i)/float(MAX_TRAIL_LENGTH),2.);
        if(t>0.01){vec4 bt=blob(uv,pm,t*.8,iOpacity);colorAcc+=bt.rgb;alphaAcc+=bt.a;}
      }
      colorAcc*=iBrightness;
      vec2 uv01=gl_FragCoord.xy/iResolution.xy;
      float edgeDist=min(min(uv01.x,1.-uv01.x),min(uv01.y,1.-uv01.y));
      float edgeMask=mix(1.-clamp(iEdgeIntensity,0.,1.),1.,clamp(edgeDist*2.,0.,1.));
      gl_FragColor=vec4(colorAcc,clamp(alphaAcc*iOpacity*edgeMask,0.,1.));
    }
  `

  const FilmGrainShader = useMemo(() => ({
    uniforms: { tDiffuse: { value: null }, iTime: { value: 0 }, intensity: { value: grainIntensity } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `
      uniform sampler2D tDiffuse; uniform float iTime; uniform float intensity; varying vec2 vUv;
      float hash1(float n){ return fract(sin(n)*43758.5453); }
      void main(){
        vec4 c=texture2D(tDiffuse,vUv);
        float n=hash1(vUv.x*1000.+vUv.y*2000.+iTime)*2.-1.;
        c.rgb+=n*intensity*c.rgb; gl_FragColor=c;
      }
    `,
  }), [grainIntensity])

  const UnpremultiplyPass = useMemo(() => new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `
      uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); float a=max(c.a,1e-5); gl_FragColor=vec4(clamp(c.rgb/a,0.,1.),c.a); }
    `,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])

  useEffect(() => {
    if (!mounted) return
    const host = containerRef.current
    if (!host) return

    const renderer = new THREE.WebGLRenderer({
      antialias: true, alpha: true, depth: false, stencil: false,
      powerPreference: 'default', premultipliedAlpha: false, preserveDrawingBuffer: false,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.cssText = 'pointer-events:none;display:block;width:100%;height:100%;background:transparent;mix-blend-mode:screen;'
    rendererRef.current = renderer
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geom = new THREE.PlaneGeometry(2, 2)
    const maxTrail = Math.max(1, Math.floor(trailLength))
    trailBufRef.current = Array.from({ length: maxTrail }, () => new THREE.Vector2(0.5, 0.5))

    const baseColor = new THREE.Color(color)
    const material = new THREE.ShaderMaterial({
      defines: { MAX_TRAIL_LENGTH: maxTrail },
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(1, 1, 1) },
        iMouse: { value: new THREE.Vector2(0.5, 0.5) },
        iPrevMouse: { value: trailBufRef.current.map(v => v.clone()) },
        iOpacity: { value: 1.0 },
        iScale: { value: 1.0 },
        iBaseColor: { value: new THREE.Vector3(baseColor.r, baseColor.g, baseColor.b) },
        iBrightness: { value: brightness },
        iEdgeIntensity: { value: edgeIntensity },
      },
      vertexShader: baseVertexShader,
      fragmentShader,
      transparent: true, depthTest: false, depthWrite: false,
    })
    materialRef.current = material
    scene.add(new THREE.Mesh(geom, material))

    const composer = new EffectComposer(renderer)
    composerRef.current = composer
    composer.addPass(new RenderPass(scene, camera))

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), bloomStrength, bloomRadius, bloomThreshold)
    bloomPassRef.current = bloomPass
    composer.addPass(bloomPass)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filmPass = new ShaderPass(FilmGrainShader as any)
    filmPassRef.current = filmPass
    composer.addPass(filmPass)
    composer.addPass(UnpremultiplyPass)

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      renderer.setPixelRatio(dpr)
      renderer.setSize(w, h, false)
      composer.setSize(w, h)
      const wp = Math.floor(w * dpr)
      const hp = Math.floor(h * dpr)
      material.uniforms.iResolution.value.set(wp, hp, 1)
      material.uniforms.iScale.value = Math.max(0.5, Math.min(2, Math.min(w, h) / 600))
      bloomPass.setSize(wp, hp)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const start = performance.now()
    const animate = () => {
      const now = performance.now()
      const t = (now - start) / 1000
      const mat = materialRef.current!
      const comp = composerRef.current!

      if (pointerActiveRef.current) {
        velocityRef.current.set(
          currentMouseRef.current.x - mat.uniforms.iMouse.value.x,
          currentMouseRef.current.y - mat.uniforms.iMouse.value.y,
        )
        mat.uniforms.iMouse.value.copy(currentMouseRef.current)
        fadeOpacityRef.current = 1.0
      } else {
        velocityRef.current.multiplyScalar(inertia)
        if (velocityRef.current.lengthSq() > 1e-6)
          mat.uniforms.iMouse.value.add(velocityRef.current)
        const dt = now - lastMoveTimeRef.current
        if (dt > fadeDelayMs)
          fadeOpacityRef.current = Math.max(0, 1 - Math.min(1, (dt - fadeDelayMs) / fadeDurationMs))
      }

      const N = trailBufRef.current.length
      headRef.current = (headRef.current + 1) % N
      trailBufRef.current[headRef.current].copy(mat.uniforms.iMouse.value)
      const arr = mat.uniforms.iPrevMouse.value as THREE.Vector2[]
      for (let i = 0; i < N; i++) arr[i].copy(trailBufRef.current[(headRef.current - i + N) % N])

      mat.uniforms.iOpacity.value = fadeOpacityRef.current
      mat.uniforms.iTime.value = t
      if (filmPassRef.current?.uniforms?.iTime) filmPassRef.current.uniforms.iTime.value = t

      comp.render()

      if (!pointerActiveRef.current && fadeOpacityRef.current <= 0.001) {
        runningRef.current = false; rafRef.current = null; return
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const ensureLoop = () => {
      if (!runningRef.current) { runningRef.current = true; rafRef.current = requestAnimationFrame(animate) }
    }

    const onMove = (e: PointerEvent) => {
      currentMouseRef.current.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight)
      pointerActiveRef.current = true
      lastMoveTimeRef.current = performance.now()
      ensureLoop()
    }
    const onLeave = () => { pointerActiveRef.current = false; lastMoveTimeRef.current = performance.now(); ensureLoop() }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave, { passive: true })
    ensureLoop()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      runningRef.current = false
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', resize)
      scene.clear(); geom.dispose(); material.dispose(); composer.dispose(); renderer.dispose()
      renderer.domElement.parentElement?.removeChild(renderer.domElement)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9998 }}
    />
  )
}
