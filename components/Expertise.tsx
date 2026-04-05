'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    label: 'Renewals',
    desc: 'I treat renewal as a process that starts on day one, not a scramble 90 days before expiry. Three years, zero logos lost.',
  },
  {
    label: 'QBRs',
    desc: 'Executive business reviews that are actually useful. I translate platform data into the language your VP cares about.',
  },
  {
    label: 'Expansion',
    desc: 'I find upsell opportunities before clients do, build internal champions, and partner with Sales to close. 35% YoY expansion.',
  },
  {
    label: 'Onboarding',
    desc: 'I\'ve cut time-to-value by 20–35% with playbooks that scale. Structured enablement, milestone-based adoption.',
  },
  {
    label: 'Churn prevention',
    desc: 'I read the signals early — usage drops, stakeholder changes, NPS dips. Then I act before the customer even thinks about churning.',
  },
  {
    label: 'Voice of Customer',
    desc: 'I turn what clients complain about into structured product feedback. I\'ve shaped roadmaps and fine-tuned AI models from the field.',
  },
  {
    label: 'Stakeholder management',
    desc: 'I manage VP and C-suite relationships, handle escalations cleanly, and stay the trusted advisor even when things go sideways.',
  },
  {
    label: 'Advocacy',
    desc: 'I build case studies, testimonials, and references that actually help sales. Because happy customers are the best pipeline.',
  },
]

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="px-8 md:px-16 py-24"
      style={{ background: '#f5f2ee', borderTop: '1px solid #d4cfc9' }}
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#aaa' }}
        >
          What I do
        </motion.p>

        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#111' }}
          >
            Selectively very good.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #d4cfc9' }}>
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="py-8 pr-8 group"
              style={{
                borderBottom: '1px solid #d4cfc9',
                borderRight: i % 2 === 0 ? '1px solid #d4cfc9' : 'none',
              }}
            >
              <p
                className="font-bold text-base mb-2 transition-colors duration-200"
                style={{ color: '#111' }}
              >
                {s.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#777' }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
