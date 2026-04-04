'use client'

import { motion } from 'framer-motion'

const competencies = [
  {
    title: 'Full Lifecycle Management',
    desc: 'Onboarding through renewal — I own every stage. QBRs, adoption, health scoring, risk mitigation, and expansion planning built into every account.',
    icon: '◎',
    highlight: true,
  },
  {
    title: 'Renewal & Retention Strategy',
    desc: 'Built a 3-year zero logo churn record across 200+ accounts. I treat renewals as a process that starts on day one, not 90 days before expiry.',
    icon: '↻',
    highlight: true,
  },
  {
    title: 'Expansion Revenue',
    desc: '35% YoY expansion by identifying upsell signals early, building internal champions, and partnering with Sales on cross-sell motion.',
    icon: '↗',
    highlight: false,
  },
  {
    title: 'Executive QBR Facilitation',
    desc: 'C-suite ready business reviews that translate platform data into strategic ROI narratives. Not activity reports — outcome conversations.',
    icon: '◈',
    highlight: false,
  },
  {
    title: 'Churn Prevention & Risk',
    desc: 'Reduced churn by 18% YoY at ADIT Tech. I build early-warning systems using health scores, usage anomalies, and stakeholder signals.',
    icon: '⊘',
    highlight: false,
  },
  {
    title: 'Onboarding & Time-to-Value',
    desc: 'Cut time-to-value by 20–35% through scalable playbooks, structured enablement programs, and milestone-based adoption plans.',
    icon: '⚡',
    highlight: false,
  },
  {
    title: 'Voice of Customer',
    desc: 'Structured feedback loops that feed directly into Product roadmaps. I\'ve shaped feature prioritization and model fine-tuning from the field.',
    icon: '◐',
    highlight: false,
  },
  {
    title: 'Customer Advocacy',
    desc: 'Built advocacy programs generating case studies, testimonials, and references that actively support enterprise sales cycles.',
    icon: '★',
    highlight: false,
  },
  {
    title: 'Stakeholder Management',
    desc: 'Trusted advisor to VP and C-suite stakeholders. I manage executive relationships, escalations, and multi-threaded account strategies.',
    icon: '⬡',
    highlight: false,
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 md:py-48 px-6" style={{ background: '#070f1a' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>02</span>
          <div className="h-px flex-1" style={{ background: '#0d1e2e' }} />
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>Expertise</span>
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
            What I do best.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {competencies.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group p-7 transition-all duration-300"
              style={{
                background: c.highlight ? '#0d1e35' : '#0c1825',
                border: `1px solid ${c.highlight ? '#1e3a5a' : '#0d1e2e'}`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#e8a84c'
                el.style.background = '#0f1f30'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = c.highlight ? '#1e3a5a' : '#0d1e2e'
                el.style.background = c.highlight ? '#0d1e35' : '#0c1825'
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="text-lg flex-shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center"
                  style={{
                    color: c.highlight ? '#e8a84c' : '#2a4a65',
                    background: c.highlight ? '#1a2e10' : 'transparent',
                    borderRadius: '4px',
                    border: c.highlight ? '1px solid #2a4a20' : 'none',
                  }}
                >
                  {c.icon}
                </span>
                <h3 className="font-semibold text-sm leading-snug" style={{ color: c.highlight ? '#e4e8ec' : '#c4d0dc' }}>
                  {c.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#3a5470' }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
