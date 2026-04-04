'use client'

import { CSSProperties, useMemo } from 'react'
import { motion } from 'framer-motion'

/* ─── Floating Grid Dots ─────────────────────────────────────────────── */
function GridDots() {
  const dots = useMemo(() => {
    const arr = []
    for (let i = 0; i < 80; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() > 0.85 ? 2 : 1,
        opacity: 0.08 + Math.random() * 0.18,
        delay: Math.random() * 4,
        dur: 3 + Math.random() * 4,
      })
    }
    return arr
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: '#e8a84c',
            opacity: d.opacity,
          }}
          animate={{ opacity: [d.opacity, d.opacity * 3, d.opacity] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
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
    <span className="inline-flex flex-wrap" aria-label={text}>
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
      style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 110%, #0d2040 0%, #07101a 55%)' }}
    >
      <GridDots />

      {/* Top vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, #07101a 0%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative text-center max-w-5xl mx-auto" style={{ zIndex: 2 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12" style={{ background: '#1a3050' }} />
          <span className="text-[10px] tracking-[0.55em] uppercase font-mono" style={{ color: '#e8a84c' }}>
            Customer Success Manager
          </span>
          <div className="h-px w-12" style={{ background: '#1a3050' }} />
        </motion.div>

        {/* Main headline */}
        <h1 aria-label="The CSM who never lost a client." className="select-none leading-none mb-8">
          <div className="block" style={{ fontSize: 'clamp(3.2rem, 10vw, 9.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: '0.88', color: '#e4e8ec' }}>
            <CharReveal text="THE CSM" delay={0.25} />
          </div>
          <div className="block" style={{ fontSize: 'clamp(3.2rem, 10vw, 9.5rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: '0.88' }}>
            <CharReveal
              text="WHO NEVER"
              delay={0.5}
              style={{ WebkitTextStroke: '1.5px #e4e8ec', color: 'transparent' }}
            />
          </div>
          <div className="block" style={{ fontSize: 'clamp(3.2rem, 10vw, 9.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: '0.88', color: '#e8a84c' }}>
            <CharReveal text="LOST A CLIENT." delay={0.78} />
          </div>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: '#5a7a95' }}
        >
          6 years · 200+ enterprise accounts · $800K+ portfolio ·{' '}
          <span style={{ color: '#e8a84c' }}>0% logo churn for 3 consecutive years</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
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
            style={{ border: '1px solid #1a3050', color: '#5a7a95' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#e8a84c'
              el.style.color = '#e8a84c'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#1a3050'
              el.style.color = '#5a7a95'
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
        transition={{ delay: 2.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#253d52' }}>Scroll</span>
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
