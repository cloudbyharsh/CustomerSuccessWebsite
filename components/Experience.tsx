'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const jobs = [
  {
    year: 'NOW',
    role: 'Customer Success Manager',
    company: 'Milestone Inc.',
    location: 'Toronto, ON',
    desc: 'Own an $800K+ enterprise portfolio for a hospitality SaaS company. Kept 0% churn for two straight years. Grew one account from 3 to 7 properties. Run executive QBRs, feed product feedback directly to engineering, and build advocacy programs that support sales.',
    highlights: ['0% logo churn — 2nd consecutive year', '$800K+ portfolio, managed solo', 'Grew a hotel group from 3 → 7 properties'],
  },
  {
    year: '2023',
    role: 'Customer Success Manager',
    company: 'Milestone Internet Pvt Ltd',
    location: 'Ahmedabad, India',
    desc: 'Managed 40+ enterprise accounts. Hit 0% churn again — every single client renewed. Drove 35% YoY expansion revenue. Cut time-to-value by 20% through standardised onboarding playbooks that actually worked.',
    highlights: ['0% churn — all 40+ clients renewed', '35% YoY expansion revenue', '20% faster time-to-value'],
  },
  {
    year: '2020',
    role: 'Customer Success Manager',
    company: 'ADIT Tech Pvt Ltd',
    location: 'Ahmedabad, India',
    desc: 'Supported 150+ SaaS clients. Cut churn 18% YoY through proactive outreach before problems escalated. Watched MRR go from $60K to $1.8M during my time there as Product Specialist for the core engagement module.',
    highlights: ['18% churn reduction YoY', '$60K → $1.8M MRR growth', '35% faster time-to-value'],
  },
  {
    year: '2017',
    role: 'Senior Executive, Customer Operations',
    company: 'VOIS (Vodafone Group)',
    location: 'Ahmedabad, India',
    desc: 'Enterprise support across regulated European markets. Top performer for 8 consecutive quarters. Enterprise clients aren\'t difficult. They just have higher stakes.',
    highlights: ['Top performer — 8 consecutive quarters', 'European enterprise markets', 'Foundation of consultative communication'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="experience"
      data-section="experience"
      className="px-8 md:px-16 py-24"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#4c566a' }}
        >
          Work
        </motion.p>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f0eeff' }}
          >
            6 years of results.
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-0">

          {/* Left — year tabs */}
          <div
            className="flex md:flex-col gap-0 md:w-28 flex-shrink-0 border-b md:border-b-0 md:border-r mb-8 md:mb-0"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            {jobs.map((j, i) => (
              <button
                key={j.year}
                onClick={() => setActive(i)}
                className="text-left py-3 pr-6 transition-all duration-200"
                style={{
                  borderRight: active === i ? '2px solid #29d4ff' : '2px solid transparent',
                  marginRight: '-1px',
                }}
              >
                <span
                  className="font-black text-lg"
                  style={{ color: active === i ? '#29d4ff' : '#4c566a' }}
                >
                  {j.year}
                </span>
              </button>
            ))}
          </div>

          {/* Right — detail */}
          <div className="md:pl-12 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#4c566a' }}>
                  {jobs[active].location}
                </p>
                <h3 className="font-bold text-2xl mb-1" style={{ color: '#f0eeff' }}>
                  {jobs[active].role}
                </h3>
                <p className="font-medium mb-6" style={{ color: '#6e7a8a' }}>
                  {jobs[active].company}
                </p>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#9aa3b8' }}>
                  {jobs[active].desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {jobs[active].highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#6e7a8a' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#29d4ff' }} />
                      {h}
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
