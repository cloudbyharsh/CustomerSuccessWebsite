'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'Listen before you solve.',
    body: 'The best QBR I ever ran wasn\'t the one with the best deck — it was the one where I understood the pressure the VP was under that quarter. Data is secondary. Context is everything.',
    accent: '#e8a84c',
  },
  {
    number: '02',
    title: 'Renewals start on day one.',
    body: 'Zero churn isn\'t luck — it\'s a process. I build trust, demonstrate value, and create internal champions from the first onboarding call. By renewal time, the decision is already made.',
    accent: '#4c8fe8',
  },
  {
    number: '03',
    title: 'Customer success is not customer satisfaction.',
    body: 'A customer can love you and still churn. What matters is whether they hit the outcome they bought the product for. I measure time-to-value, feature adoption tied to goals, and ROI achieved vs. promised.',
    accent: '#4caf78',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 md:py-48 px-6" style={{ background: '#070f1a' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>04</span>
          <div className="h-px flex-1" style={{ background: '#0d1e2e' }} />
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>Philosophy</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#e4e8ec' }}
          >
            How I work.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{
                background: '#0c1825',
                border: '1px solid #0d1e2e',
                borderTop: `3px solid ${p.accent}`,
              }}
            >
              <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>
                {p.number}
              </span>
              <h3
                className="font-bold leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: '#e4e8ec' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6a8aaa' }}>
                {p.body}
              </p>
              <div className="h-px mt-auto" style={{ background: p.accent, opacity: 0.15 }} />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-10 text-center"
          style={{ background: '#0c1825', border: '1px solid #0d1e2e' }}
        >
          <p className="font-light leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#7a9ab5', fontStyle: 'italic' }}>
            &ldquo;The most underrated skill in customer success is not your QBR deck or your health score formula. It is knowing when to put down the agenda and just listen.&rdquo;
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase mt-6" style={{ color: '#1a3050' }}>
            — Harsh Shah, LinkedIn
          </p>
        </motion.div>
      </div>
    </section>
  )
}
