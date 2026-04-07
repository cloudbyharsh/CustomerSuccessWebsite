'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  label: string
  sub: string
  target?: number
  display: (n: number) => string
}

const stats: Stat[] = [
  { label: 'logo churn', sub: '3 years straight', display: () => '0%' },
  { label: 'ARR managed', sub: 'solo portfolio', target: 800, display: n => `$${n}K+` },
  { label: 'net revenue retention', sub: 'expansion above baseline', target: 140, display: n => `${n}%` },
  { label: 'expansion YoY', sub: 'upsell and cross-sell', target: 35, display: n => `${n}%` },
  { label: 'accounts', sub: 'enterprise and mid-market', target: 200, display: n => `${n}+` },
  { label: 'years', sub: 'in B2B SaaS', target: 6, display: n => `${n}` },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const hasRun = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasRun.current) return
      hasRun.current = true
      observer.disconnect()

      stats.forEach((stat, i) => {
        if (!stat.target) return
        const duration = 1600
        const start = performance.now()
        const target = stat.target

        const run = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setCounts(prev => {
            const next = [...prev]
            next[i] = Math.round(target * eased)
            return next
          })
          if (p < 1) requestAnimationFrame(run)
        }

        setTimeout(() => requestAnimationFrame(run), i * 110)
      })
    }, { threshold: 0.25 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      data-section="about"
      className="px-8 md:px-16 py-24"
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#29d4ff' }}
        >
          By the numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <p
                className="font-black leading-none mb-2 tabular-nums"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#ffffff' }}
              >
                {stat.display(counts[i])}
              </p>
              <p className="text-sm font-medium" style={{ color: '#9aa3b8' }}>{stat.label}</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2.5rem' }}
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: '#29d4ff' }}>
            Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Microsoft Azure Fundamentals (AZ-900)',
              'IBM Product Management Essentials',
              'Customer Engagement and CX Foundations',
              'Google Ads and Digital Marketing Strategy',
            ].map(cert => (
              <span
                key={cert}
                className="text-sm font-medium px-4 py-2"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(41,212,255,0.18)',
                  color: '#9aa3b8',
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

        {/* About blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '3rem' }}
        >
          <div>
            <p className="text-lg leading-relaxed" style={{ color: '#9aa3b8' }}>
              I&apos;m a CSM who doesn&apos;t just manage accounts. I{' '}
              <em style={{ color: '#f0eeff' }}>own</em> outcomes. My job is to make sure customers actually
              get what they paid for, and then some.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: '#9aa3b8' }}>
              I&apos;ve spent six years translating customer pain into product
              improvements, running QBRs that move the needle, and building
              the kind of trust that makes renewals a formality.
            </p>
            <a
              href="/harsh-shah-resume.pdf"
              download="Harsh_Shah_Resume.pdf"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium link-hover"
              style={{ color: '#29d4ff' }}
            >
              Download resume ↓
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
