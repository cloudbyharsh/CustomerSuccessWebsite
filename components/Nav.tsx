'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(7,16,26,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,48,80,0.6)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo / name */}
        <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
            style={{ background: '#e8a84c', color: '#07101a' }}
          >
            HS
          </span>
          <span
            className="text-[11px] tracking-[0.4em] uppercase font-semibold hidden sm:block"
            style={{ color: scrolled ? '#a0b8cc' : '#8aA8c0' }}
          >
            Harsh Shah
          </span>
        </a>

        {/* Nav links — centered */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-grow text-[10px] tracking-[0.38em] uppercase font-medium transition-colors duration-300"
              style={{ color: scrolled ? '#7a9ab5' : '#6a8aaa' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#e4e8ec')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = scrolled ? '#7a9ab5' : '#6a8aaa')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href="/harsh-shah-resume.docx"
          download="Harsh_Shah_Resume.docx"
          className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase px-5 py-2.5 transition-all duration-300 flex-shrink-0"
          style={{ border: '1px solid #1a3050', color: '#7a9ab5' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = '#e8a84c'; el.style.color = '#e8a84c'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = '#1a3050'; el.style.color = '#7a9ab5'
          }}
        >
          Resume ↓
        </a>
      </div>
    </motion.header>
  )
}
