'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-32"
    >
      <div className="max-w-5xl">

        {/* Name + Currently */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col gap-2"
        >
          <p
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#f0eeff' }}
          >
            Harsh Shah
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Currently
            </span>
            <span className="text-xs" style={{ color: '#6e7a8a' }}>
              CSM at Milestone Inc. · DPM candidate, George Brown College (2026)
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', color: '#f0eeff' }}
          >
            never lost<br />
            <span style={{ WebkitTextStroke: '2px #29d4ff', WebkitTextFillColor: 'transparent' }}>
              a client.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div className="max-w-lg">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#9aa3b8' }}>
              I&apos;m a{' '}
              <strong style={{ color: '#f0eeff' }}>Customer Success Manager</strong>{' '}
              with a stubborn focus on keeping clients — and actually making them succeed.
              Six years. 200+ accounts. Zero logos lost.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Open to work — Toronto</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#experience"
                className="link-hover text-sm font-medium"
                style={{ color: '#f0eeff' }}
              >
                See my work ↓
              </a>
              <a
                href="https://www.linkedin.com/in/harshashwinshah/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-sm"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f0eeff')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 h-px origin-left"
        style={{ background: 'rgba(41,212,255,0.2)' }}
      />
    </section>
  )
}
