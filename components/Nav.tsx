'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex items-center justify-between"
      style={{
        background: scrolled ? 'rgba(245,242,238,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}
    >
      <a href="#" className="text-sm font-semibold tracking-tight" style={{ color: '#111' }}>
        Harsh Shah
      </a>
      <nav className="flex items-center gap-8">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="link-hover text-sm"
            style={{ color: '#555' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#555')}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
