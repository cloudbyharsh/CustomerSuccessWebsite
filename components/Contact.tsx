'use client'

import { motion } from 'framer-motion'

const links = [
  {
    label: 'Email',
    value: 'haarsh.shahh@gmail.com',
    href: 'mailto:haarsh.shahh@gmail.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/harshashwinshah',
    href: 'https://www.linkedin.com/in/harshashwinshah/',
    icon: '◈',
  },
  {
    label: 'GitHub',
    value: 'github.com/cloudbyharsh',
    href: 'https://github.com/cloudbyharsh',
    icon: '◎',
  },
  {
    label: 'Location',
    value: 'Toronto, ON — Canada',
    href: null,
    icon: '⊕',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6" style={{ background: '#07101a', borderTop: '1px solid #0d1e2e' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>05</span>
          <div className="h-px flex-1" style={{ background: '#0d1e2e' }} />
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>Contact</span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#e4e8ec' }}
          >
            Let&apos;s talk.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed mb-16 max-w-xl"
          style={{ color: '#7a9ab5' }}
        >
          Open to Senior CSM, Strategic Customer Success, and Account Management roles in enterprise SaaS.
          Based in Toronto — Canadian Permanent Resident.
        </motion.p>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {links.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
            >
              {l.href ? (
                <a
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 group transition-all duration-300 block"
                  style={{ background: '#0c1825', border: '1px solid #0d1e2e' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#e8a84c'
                    el.style.background = '#0f1f30'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#0d1e2e'
                    el.style.background = '#0c1825'
                  }}
                >
                  <span className="text-lg w-8 text-center flex-shrink-0" style={{ color: '#4a6a8a' }}>{l.icon}</span>
                  <div>
                    <span className="text-[9px] tracking-[0.4em] uppercase font-mono block mb-1" style={{ color: '#1a3050' }}>{l.label}</span>
                    <span className="text-sm transition-colors duration-300" style={{ color: '#5a7a95' }}>{l.value}</span>
                  </div>
                  <span className="ml-auto text-sm transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#e8a84c' }}>→</span>
                </a>
              ) : (
                <div
                  className="flex items-center gap-5 p-6"
                  style={{ background: '#0c1825', border: '1px solid #0d1e2e' }}
                >
                  <span className="text-lg w-8 text-center flex-shrink-0" style={{ color: '#4a6a8a' }}>{l.icon}</span>
                  <div>
                    <span className="text-[9px] tracking-[0.4em] uppercase font-mono block mb-1" style={{ color: '#1a3050' }}>{l.label}</span>
                    <span className="text-sm" style={{ color: '#5a7a95' }}>{l.value}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="/harsh-shah-resume.docx"
            download="Harsh_Shah_Resume.docx"
            className="group flex items-center justify-between px-8 py-4 text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-300"
            style={{ background: '#e8a84c', color: '#07101a' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#f5c97a')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#e8a84c')}
          >
            <span>Download Resume</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5 ml-3">↓</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harshashwinshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-colors duration-300"
            style={{ border: '1px solid #1a2f45', color: '#6a8aaa' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#e8a84c'
              el.style.color = '#e8a84c'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#1a2f45'
              el.style.color = '#6a8aaa'
            }}
          >
            <span>Connect on LinkedIn</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 ml-3">→</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #0d1e2e' }}
        >
          <span className="text-[9px] tracking-[0.4em] uppercase font-mono" style={{ color: '#1a3050' }}>
            Harsh Shah · Customer Success Manager · Toronto
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase font-mono" style={{ color: '#1a3050' }}>
            Canadian Permanent Resident · Open to Work
          </span>
        </motion.div>

      </div>
    </section>
  )
}
