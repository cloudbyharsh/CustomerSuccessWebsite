'use client'

import { motion } from 'framer-motion'

const stack = [
  { cat: 'CRM', tools: 'Salesforce · HubSpot · Zoho CRM · NetSuite' },
  { cat: 'Analytics', tools: 'Google Analytics · Health Dashboards · ROI Models · QBR Decks' },
  { cat: 'Workflow', tools: 'JIRA · Notion · Microsoft Teams · Slack' },
  { cat: 'Cloud', tools: 'Microsoft Azure (AZ-900 certified) · Google Ads' },
  { cat: 'AI', tools: 'Claude API · Prompt Engineering · LLM Workflow Automation' },
]

const companies = ['Milestone Inc.', 'VOIS / Vodafone', 'ADIT Tech', 'George Brown College']

export default function Tools() {
  return (
    <section
      id="tools"
      data-section="tools"
      className="px-8 md:px-16 py-24"
      style={{ borderTop: '1px solid #d4cfc9' }}
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#aaa' }}
        >
          Stack
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
            Tools I actually use.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-0" style={{ borderTop: '1px solid #d4cfc9' }}>
          {stack.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col md:flex-row py-5 gap-2 md:gap-0"
              style={{ borderBottom: '1px solid #d4cfc9' }}
            >
              <span className="text-xs uppercase tracking-widest font-medium md:w-36 flex-shrink-0 pt-0.5" style={{ color: '#aaa' }}>
                {s.cat}
              </span>
              <span className="text-base" style={{ color: '#444' }}>{s.tools}</span>
            </motion.div>
          ))}
        </div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#aaa' }}>Where I&apos;ve worked</p>
          <div className="flex flex-wrap gap-4">
            {companies.map(c => (
              <span
                key={c}
                className="text-sm font-medium px-4 py-2"
                style={{ background: '#f5f2ee', border: '1px solid #d4cfc9', color: '#555' }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
