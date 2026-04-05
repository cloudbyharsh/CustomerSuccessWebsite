'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-32"
      style={{ background: '#f5f2ee' }}
    >
      {/* Big headline */}
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', color: '#111' }}
          >
            never lost<br />
            <span style={{ color: '#111', WebkitTextStroke: '2px #111', WebkitTextFillColor: 'transparent' }}>
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
          {/* Left — intro copy */}
          <div className="max-w-lg">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#444' }}>
              I&apos;m a{' '}
              <strong style={{ color: '#111' }}>Customer Success Manager</strong>{' '}
              with a stubborn focus on keeping clients — and actually making them succeed.
              Six years. 200+ accounts. Zero logos lost.
            </p>
          </div>

          {/* Right — status + CTA */}
          <div className="flex flex-col gap-4 md:items-end flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm" style={{ color: '#888' }}>Open to work — Toronto</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#experience"
                className="link-hover text-sm font-medium"
                style={{ color: '#111' }}
              >
                See my work ↓
              </a>
              <a
                href="https://www.linkedin.com/in/harshashwinshah/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-sm"
                style={{ color: '#888' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#888')}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Thin divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 h-px origin-left"
        style={{ background: '#d4cfc9' }}
      />
    </section>
  )
}
