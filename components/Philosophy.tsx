'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    n: '01',
    title: 'Listen before you solve.',
    body: 'The best QBR I ever ran wasn\'t the one with the best deck. It was the one where I understood the pressure the VP was under that quarter. Data is secondary. Context is everything.',
  },
  {
    n: '02',
    title: 'Renewals start on day one.',
    body: 'Zero churn isn\'t luck. It\'s a process. I build trust, demonstrate value, and create internal champions from the first onboarding call. By renewal time, the decision is already made.',
  },
  {
    n: '03',
    title: 'Success ≠ satisfaction.',
    body: 'A customer can genuinely like their CSM, give you a 9 on NPS, and still churn. Because the product didn\'t deliver what was promised in the sales call. I measure outcomes, not feelings.',
  },
]

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      data-section="philosophy"
      className="px-8 md:px-16 py-24"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#29d4ff' }}
        >
          How I work
        </motion.p>

        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f0eeff' }}
          >
            Things I believe.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-0" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-10 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-xs font-mono" style={{ color: '#29d4ff', opacity: 0.6 }}>{p.n}</span>
              <div className="md:col-span-4">
                <h3 className="font-bold text-xl mb-3" style={{ color: '#f0eeff' }}>{p.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#9aa3b8' }}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pl-6"
          style={{ borderLeft: '2px solid #29d4ff' }}
        >
          <p className="text-lg md:text-xl leading-relaxed italic mb-4" style={{ color: '#6e7a8a' }}>
            &ldquo;The most underrated skill in customer success is not your QBR deck or your
            health score formula. It is knowing when to put down the agenda and just listen.&rdquo;
          </p>
          <cite className="text-sm not-italic" style={{ color: 'rgba(255,255,255,0.4)' }}>
            — Harsh Shah, LinkedIn
          </cite>
        </motion.blockquote>

      </div>
    </section>
  )
}
