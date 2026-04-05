'use client'

import { CSSProperties, useMemo } from 'react'
import { motion } from 'framer-motion'

/* ─── Parallax Stars ─────────────────────────────────────────────────── */
function Stars() {
  const sm = useMemo(() => genShadows(700), [])
  const md = useMemo(() => genShadows(200), [])
  const lg = useMemo(() => genShadows(100), [])

  function genShadows(n: number) {
    const parts: string[] = []
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 2000)
      const y = Math.floor(Math.random() * 2000)
      parts.push(`${x}px ${y}px #fff`)
    }
    return parts.join(', ')
  }

  const layer = (size: number, shadows: string, dur: number): CSSProperties => ({
    position: 'absolute',
    left: 0, top: 0,
    width: `${size}px`, height: `${size}px`,
    background: 'transparent',
    boxShadow: shadows,
    animation: `animStar ${dur}s linear infinite`,
    zIndex: 1,
    opacity: 0.7,
  })

  return (
    <div aria-hidden="true">
      <div style={layer(1, sm, 60)}>
        <div style={{ position: 'absolute', top: '2000px', width: '1px', height: '1px', background: 'transparent', boxShadow: sm }} />
      </div>
      <div style={layer(2, md, 120)}>
        <div style={{ position: 'absolute', top: '2000px', width: '2px', height: '2px', background: 'transparent', boxShadow: md }} />
      </div>
      <div style={layer(3, lg, 180)}>
        <div style={{ position: 'absolute', top: '2000px', width: '3px', height: '3px', background: 'transparent', boxShadow: lg }} />
      </div>
    </div>
  )
}

/* ─── Per-char reveal ────────────────────────────────────────────────── */
function CharReveal({
  text, delay = 0, style,
}: {
  text: string; delay?: number; style?: CSSProperties
}) {
  return (
    <span className="inline-flex" aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
          <motion.span
            className="inline-block"
            style={style}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: delay + i * 0.036, ease: [0.16, 1, 0.3, 1] }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: 'radial-gradient(ellipse at bottom, #0a1a35 0%, #07101a 65%)' }}
    >
      {/* Parallax stars */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <Stars />
      </div>

      {/* Radial vignette overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 65% at 50% 50%, transparent 30%, #07101a 100%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative text-center max-w-5xl mx-auto w-full" style={{ zIndex: 3 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-16 hidden sm:block" style={{ background: 'linear-gradient(to right, transparent, #2a4060)' }} />
          <span className="text-[10px] tracking-[0.55em] uppercase font-mono" style={{ color: '#e8a84c' }}>
            Customer Success Manager
          </span>
          <div className="h-px w-16 hidden sm:block" style={{ background: 'linear-gradient(to left, transparent, #2a4060)' }} />
        </motion.div>

        {/* Name — centered above headline */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="uppercase font-black tracking-[0.25em] text-center"
            style={{ fontSize: 'clamp(1.1rem, 2.8vw, 2.2rem)', color: '#c8d8e8', letterSpacing: '0.28em' }}
          >
            Harsh Shah
          </motion.p>
        </div>

        {/* Main headline — 3 lines */}
        <h1 aria-label="The CSM who never lost a client." className="select-none leading-none mb-10">

          {/* THE CSM */}
          <div
            className="block"
            style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: '0.9', color: '#e4e8ec' }}
          >
            <CharReveal text="THE CSM" delay={0.3} />
          </div>

          {/* WHO NEVER — outlined */}
          <div
            className="block"
            aria-hidden="true"
            style={{ fontSize: 'clamp(3.8rem, 12vw, 11rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: '0.88' }}
          >
            <CharReveal
              text="WHO NEVER"
              delay={0.55}
              style={{ WebkitTextStroke: '1.5px #9ab4cc', color: 'transparent' }}
            />
          </div>

          {/* LOST A CLIENT. — amber, sized to fit one line */}
          <div
            className="block"
            aria-hidden="true"
            style={{
              fontSize: 'clamp(2rem, 6.2vw, 6rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: '1',
              color: '#e8a84c',
              whiteSpace: 'nowrap',
            }}
          >
            <CharReveal text="LOST A CLIENT." delay={0.85} />
          </div>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: '#7a9ab8' }}
        >
          6 years · 200+ enterprise accounts · $800K+ portfolio ·{' '}
          <span style={{ color: '#e8a84c', fontWeight: 600 }}>0% logo churn for 3 consecutive years</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
            style={{ background: '#e8a84c', color: '#07101a' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#f5c97a')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#e8a84c')}
          >
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/harshashwinshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase transition-all duration-300"
            style={{ border: '1px solid #2a4060', color: '#7a9ab8' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#e8a84c'; el.style.color = '#e8a84c'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#2a4060'; el.style.color = '#7a9ab8'
            }}
          >
            LinkedIn Profile →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 3 }}
      >
        <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#3a5a78' }}>Scroll</span>
        <motion.div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #e8a84c, transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
