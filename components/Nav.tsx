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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(7,16,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #162030' : '1px solid transparent',
      }}
    >
      <a href="#hero" className="flex items-center gap-3 group">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
          style={{ background: '#e8a84c', color: '#07101a' }}
        >
          HS
        </span>
        <span className="text-[11px] tracking-[0.4em] uppercase font-semibold" style={{ color: '#7a8fa3' }}>
          Harsh Shah
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="underline-grow text-[10px] tracking-[0.35em] uppercase transition-colors duration-300"
            style={{ color: '#4a6278' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#e4e8ec')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#4a6278')}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="/harsh-shah-resume.docx"
        download="Harsh_Shah_Resume.docx"
        className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase px-4 py-2 transition-all duration-300"
        style={{ border: '1px solid #1a2f45', color: '#7a8fa3' }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = '#e8a84c'
          el.style.color = '#e8a84c'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = '#1a2f45'
          el.style.color = '#7a8fa3'
        }}
      >
        Resume ↓
      </a>
    </motion.header>
  )
}
