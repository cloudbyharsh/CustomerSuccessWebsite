'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const jobs = [
  {
    id: 0,
    role: 'Customer Success Manager',
    company: 'Milestone Inc.',
    location: 'Toronto, ON — Canada',
    period: 'Mar 2024 — Present',
    type: 'Enterprise SaaS',
    tag: 'Current',
    summary: 'Own full lifecycle management for enterprise SaaS clients across an $800K+ portfolio, serving as a trusted advisor to global hospitality brands.',
    achievements: [
      'Maintained 0% logo churn for the 2nd consecutive year — all clients renewed their agreements, extending a 3-year streak.',
      'Grew a hotel management group account from 3 to 7 properties over the engagement, culminating in a full portfolio renewal in Q4 2025.',
      'Deliver executive-level QBRs analyzing performance data, engagement metrics, and automation efficiency to surface ROI and growth opportunities.',
      'Collaborate with Product, Engineering, and AI teams to relay client-specific feedback for model fine-tuning and feature prioritization.',
      'Built customer advocacy programs generating testimonials, case studies, and references supporting enterprise sales cycles.',
      'Led enablement workshops driving feature adoption, community engagement, and scalable customer outcomes.',
    ],
    metrics: ['$800K+ Portfolio', '0% Churn', 'Full Lifecycle'],
  },
  {
    id: 1,
    role: 'Customer Success Manager',
    company: 'Milestone Internet Pvt Ltd',
    location: 'Ahmedabad, India',
    period: 'Mar 2023 — Feb 2024',
    type: 'Enterprise SaaS',
    tag: 'Previous',
    summary: 'Managed 40+ enterprise and mid-market B2B SaaS accounts with a focus on renewals, retention, and expansion revenue.',
    achievements: [
      'Achieved 0% churn across all managed accounts with every client renewing — contributing to a 3-year zero logo churn record across both Milestone roles.',
      'Reduced time-to-value by 20% through standardized onboarding, adoption plans, and customer success playbooks.',
      'Drove 35% year-over-year expansion revenue by partnering with Sales and Product on upsell and cross-sell strategies.',
      'Delivered executive business reviews translating performance and automation data into strategic recommendations.',
      'Identified and developed customer advocates to support testimonials, case studies, and sales references.',
    ],
    metrics: ['40+ Accounts', '35% Expansion YoY', '20% Faster TTV'],
  },
  {
    id: 2,
    role: 'Customer Success Manager',
    company: 'ADIT Tech Pvt Ltd',
    location: 'Ahmedabad, India',
    period: 'Nov 2020 — Feb 2023',
    type: 'SaaS Platform',
    tag: 'Previous',
    summary: 'Supported 150+ SaaS clients across enterprise and mid-market segments, driving platform adoption, engagement, and long-term retention.',
    achievements: [
      'Reduced churn by 18% year-over-year through data-driven engagement, proactive outreach, and targeted reactivation campaigns.',
      'Reduced time-to-value by 35% through scalable onboarding processes and structured enablement programs.',
      'Served as Product Specialist for a core engagement module — drove adoption-led growth contributing to MRR growing from $60K to $1.8M.',
      'Collaborated with Product and Engineering to surface Voice of Customer insights and deliver feature enhancements aligned to real client needs.',
      'Conducted strategic workshops with executive stakeholders to align product usage with marketing and business goals.',
    ],
    metrics: ['150+ Clients', '$60K → $1.8M MRR', '18% Churn Reduction'],
  },
  {
    id: 3,
    role: 'Senior Executive, Customer Operations',
    company: 'VOIS (Vodafone Group)',
    location: 'Ahmedabad, India',
    period: 'Sep 2017 — Oct 2020',
    type: 'Telecom Enterprise',
    tag: 'Foundation',
    summary: 'Provided enterprise client support across high-volume regulated European markets, maintaining strong satisfaction and brand protection standards.',
    achievements: [
      'Ranked as top performer across 8 consecutive quarters based on first-contact resolution and customer satisfaction scores.',
      'Developed expertise in escalation management, consultative communication, and enterprise stakeholder engagement.',
      'Built foundational skills in understanding regulated enterprise environments and cross-cultural client management.',
    ],
    metrics: ['8 Top-Performer Quarters', 'European Markets', 'Enterprise Support'],
  },
]

const cardStyle = { background: '#0c1825', border: '1px solid #162030' }
const tagColors: Record<string, { bg: string; text: string }> = {
  Current: { bg: '#0d2210', text: '#4caf78' },
  Previous: { bg: '#0d1a2e', text: '#4c8fe8' },
  Foundation: { bg: '#1a1505', text: '#8a7a50' },
}

function wordWrap(text: string) {
  return text.split(' ').map((word, i, arr) => (
    <span key={i} className="hw-word" style={{ display: 'inline', transition: 'color 0.15s ease' }}>
      {word}{i < arr.length - 1 ? ' ' : ''}
    </span>
  ))
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <section id="experience" className="py-32 md:py-48 px-6" style={{ background: '#07101a' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>01</span>
          <div className="h-px flex-1" style={{ background: '#0d1e2e' }} />
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#1a3050' }}>Experience</span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#e4e8ec' }}
          >
            6 years of results.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Tab sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {jobs.map((j, i) => (
              <motion.button
                key={j.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(j.id)}
                className="w-full text-left p-5 transition-all duration-300"
                style={{
                  background: active === j.id ? '#111f30' : '#0c1825',
                  border: `1px solid ${active === j.id ? '#1e3a5a' : '#0d1e2e'}`,
                  borderLeft: `3px solid ${active === j.id ? '#e8a84c' : 'transparent'}`,
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold leading-snug" style={{ color: active === j.id ? '#e4e8ec' : '#4a6278' }}>
                    {j.company}
                  </span>
                  <span
                    className="text-[9px] px-2 py-0.5 font-mono tracking-wide flex-shrink-0"
                    style={{ background: tagColors[j.tag].bg, color: tagColors[j.tag].text }}
                  >
                    {j.tag}
                  </span>
                </div>
                <p className="text-[10px] tracking-wide" style={{ color: active === j.id ? '#e8a84c' : '#253d52' }}>
                  {j.period}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {j.metrics.map(m => (
                    <span key={m} className="text-[9px] px-2 py-1 font-mono"
                      style={{ background: '#0a1520', border: '1px solid #162030', color: active === j.id ? '#7a8fa3' : '#253d52' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 h-full"
                style={cardStyle}
              >
                <div className="mb-6">
                  <span className="text-[9px] tracking-[0.45em] uppercase font-mono block mb-3" style={{ color: '#2a4060' }}>{job.type}</span>
                  <h3 className="font-bold text-xl mb-1" style={{ color: '#e4e8ec' }}>{job.role}</h3>
                  <p className="text-sm mb-1" style={{ color: '#e8a84c' }}>{job.company}</p>
                  <p className="text-xs" style={{ color: '#3a5470' }}>{job.location} · {job.period}</p>
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a7a95' }}>
                  {wordWrap(job.summary)}
                </p>

                <ul className="flex flex-col gap-4" role="list">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#e8a84c' }} />
                      <span className="text-sm leading-relaxed" style={{ color: '#4a6a85' }}>
                        {wordWrap(a)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
