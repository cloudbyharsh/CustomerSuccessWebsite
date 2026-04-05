'use client'

import { motion } from 'framer-motion'

const toolGroups = [
  {
    category: 'CRM & Account Management',
    tools: ['Salesforce', 'HubSpot', 'Zoho CRM', 'NetSuite'],
  },
  {
    category: 'Project & Workflow',
    tools: ['JIRA', 'Notion', 'Microsoft Teams', 'Slack'],
  },
  {
    category: 'Analytics & Reporting',
    tools: ['Google Analytics', 'Health Dashboards', 'QBR Decks', 'ROI Models'],
  },
  {
    category: 'Cloud & Certifications',
    tools: ['Microsoft Azure (AZ-900)', 'Google Ads', 'Coursera PM', 'IBM PM Essentials'],
  },
  {
    category: 'AI & Automation',
    tools: ['Claude API', 'Prompt Engineering', 'LLM Workflows', 'CS Automation'],
  },
]

export default function Tools() {
  return (
    <section className="py-32 md:py-40 px-6" style={{ background: '#07101a' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>03</span>
          <div className="h-px flex-1" style={{ background: '#0d1e2e' }} />
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>Tools & Stack</span>
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
            The toolkit.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {toolGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6"
              style={{ background: '#0c1825', border: '1px solid #0d1e2e' }}
            >
              <span
                className="text-[9px] tracking-[0.4em] uppercase font-mono flex-shrink-0 md:w-52"
                style={{ color: '#5a7a9a' }}
              >
                {group.category}
              </span>
              <div className="h-px flex-shrink-0 hidden md:block" style={{ background: '#0d1e2e', width: '1px', alignSelf: 'stretch' }} />
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] px-3 py-1.5 tracking-wide transition-all duration-200"
                    style={{ background: '#0a1520', border: '1px solid #162030', color: '#7a8fa3' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = '#e8a84c'
                      el.style.color = '#e8a84c'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = '#162030'
                      el.style.color = '#7a8fa3'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
