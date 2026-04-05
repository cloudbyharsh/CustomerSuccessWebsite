'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  value: string
  numericEnd: number
  prefix?: string
  suffix?: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { value: '0%', numericEnd: 0, suffix: '%', label: 'Logo Churn', sub: '3 consecutive years — zero clients lost' },
  { value: '6+', numericEnd: 6, suffix: '+', label: 'Years in B2B SaaS', sub: 'Enterprise & mid-market focus' },
  { value: '$800K+', numericEnd: 800, prefix: '$', suffix: 'K+', label: 'ARR Portfolio', sub: 'Milestone Inc. — managed solo' },
  { value: '140%', numericEnd: 140, suffix: '%', label: 'Net Revenue Retention', sub: 'Expansion above 100% baseline' },
  { value: '35%', numericEnd: 35, suffix: '%', label: 'YoY Expansion Revenue', sub: 'Upsell & cross-sell execution' },
  { value: '200+', numericEnd: 200, suffix: '+', label: 'Accounts Managed', sub: 'Across enterprise & mid-market' },
]

function Counter({ end, prefix = '', suffix = '', inView }: { end: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      setCount(Math.round(eased * end))
      if (t < 1) rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [inView, end])

  return (
    <span className="stat-shimmer" style={{ fontSize: 'inherit', fontWeight: 'inherit', letterSpacing: 'inherit' }}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-6" style={{ background: '#07101a', borderTop: '1px solid #0d1e2e', borderBottom: '1px solid #0d1e2e' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#2a4870' }}>Impact</span>
          <div className="h-px flex-1" style={{ background: '#0d1e2e' }} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: '#0d1e2e' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 flex flex-col gap-3"
              style={{ background: '#07101a' }}
            >
              <div
                className="font-black leading-none"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.04em' }}
              >
                <Counter end={stat.numericEnd} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-sm font-semibold" style={{ color: '#e4e8ec' }}>{stat.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#6a8aaa' }}>{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
