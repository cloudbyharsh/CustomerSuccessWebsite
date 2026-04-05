'use client'

import { motion } from 'framer-motion'

const numbers = [
  { value: '0%', label: 'logo churn', sub: '3 years straight' },
  { value: '$800K+', label: 'ARR managed', sub: 'solo portfolio' },
  { value: '140%', label: 'net revenue retention', sub: 'expansion above baseline' },
  { value: '35%', label: 'expansion YoY', sub: 'upsell & cross-sell' },
  { value: '200+', label: 'accounts', sub: 'enterprise & mid-market' },
  { value: '6', label: 'years', sub: 'in B2B SaaS' },
]

export default function Stats() {
  return (
    <section id="about" className="px-8 md:px-16 py-24" style={{ background: '#f5f2ee' }}>
      <div className="max-w-5xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#aaa' }}
        >
          By the numbers
        </motion.p>

        {/* Numbers grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <p
                className="font-black leading-none mb-2"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#111' }}
              >
                {n.value}
              </p>
              <p className="text-sm font-medium" style={{ color: '#333' }}>{n.label}</p>
              <p className="text-xs mt-0.5" style={{ color: '#999' }}>{n.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* About blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"
          style={{ borderTop: '1px solid #d4cfc9', paddingTop: '3rem' }}
        >
          <div>
            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
              I&apos;m a CSM who doesn&apos;t just manage accounts — I{' '}
              <em>own</em> outcomes. My job is to make sure customers actually
              get what they paid for, and then some.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
              I&apos;ve spent six years translating customer pain into product
              improvements, running QBRs that move the needle, and building
              the kind of trust that makes renewals a formality.
            </p>
            <a
              href="/harsh-shah-resume.docx"
              download="Harsh_Shah_Resume.docx"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium link-hover"
              style={{ color: '#111' }}
            >
              Download resume ↓
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
