'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="px-8 md:px-16 py-24"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#4c566a' }}
        >
          Contact
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f0eeff' }}
          >
            Let&apos;s talk.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg mb-16 max-w-lg"
          style={{ color: '#9aa3b8' }}
        >
          Open to Senior CSM, Strategic Account Management, and Customer Success
          Lead roles in enterprise SaaS. Based in Toronto — Canadian PR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            {
              label: 'Email',
              value: 'haarsh.shahh@gmail.com',
              href: 'mailto:haarsh.shahh@gmail.com',
              note: '100% chance I read it',
            },
            {
              label: 'Phone',
              value: '+1 416 821 1651',
              href: 'tel:+14168211651',
              note: 'call me, maybe',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin.com/in/harshashwinshah',
              href: 'https://www.linkedin.com/in/harshashwinshah/',
              note: 'Let\'s connect',
            },
            {
              label: 'GitHub',
              value: 'github.com/cloudbyharsh',
              href: 'https://github.com/cloudbyharsh',
              note: 'AI tools & projects',
            },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="flex items-center justify-between py-6 group"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                transition: 'padding-left 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.paddingLeft = '8px')}
              onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0px')}
            >
              <div>
                <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: '#4c566a' }}>
                  {c.label}
                </span>
                <span className="text-base font-medium" style={{ color: '#f0eeff' }}>
                  {c.value}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs hidden md:block" style={{ color: '#4c566a' }}>{c.note}</span>
                <span
                  style={{ color: '#4c566a', fontSize: '1.2rem', transition: 'color 0.2s' }}
                  className="group-hover:!text-[#29d4ff]"
                >
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="/harsh-shah-resume.pdf"
            download="Harsh_Shah_Resume.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200"
            style={{
              border: '1px solid rgba(41,212,255,0.3)',
              color: '#29d4ff',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(41,212,255,0.08)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent'
            }}
          >
            Download Resume ↓
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 flex flex-col md:flex-row justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}
        >
          <span className="text-sm" style={{ color: '#4c566a' }}>
            Harsh Shah — Customer Success Manager
          </span>
          <span className="text-sm" style={{ color: '#4c566a' }}>
            Toronto · Canadian PR · Open to work
          </span>
        </motion.div>

      </div>
    </section>
  )
}
