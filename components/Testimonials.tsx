'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Harsh maintains a pristine retention record and has demonstrated a rare ability to turn clients into genuine advocates. He is also a forerunner when it comes to embracing AI — he actively looks for ways to work smarter and shares that with the whole team. He would be an asset to any organisation serious about customer success.',
    name: 'Janet Seet Ling Low',
    title: 'Client Success Leader',
    relationship: 'Managed Harsh directly',
    date: 'February 2026',
  },
  {
    quote:
      'What sets Harsh apart is the combination of dedication and tenacity he brings every single day. He does not just do his job — he trains the team around him, raises the bar, and makes sure both colleagues and clients always feel looked after. The clients love him, and so does everyone who works with him.',
    name: 'Brittany Parsons',
    title: 'Customer Success Leader',
    relationship: 'Managed Harsh directly',
    date: 'April 2025',
  },
  {
    quote:
      'Harsh is a quick learner who builds remarkably strong client relationships in a short time. He has a real talent for identifying expansion opportunities and converting them into CSQLs that sales can close. His portfolio grew substantially under his management and the clients were always engaged.',
    name: 'Krishna Adhyaru',
    title: 'Customer Success Leader',
    relationship: 'Managed Harsh directly',
    date: 'January 2024',
  },
]

export default function Testimonials() {
  return (
    <section
      className="px-8 md:px-16 py-24"
      style={{ background: '#111', borderTop: '1px solid #1a1a1a' }}
    >
      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: '#444' }}
        >
          What managers say
        </motion.p>

        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f5f2ee' }}
          >
            People I&apos;ve worked for.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-0" style={{ borderTop: '1px solid #222' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-12 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12"
              style={{ borderBottom: '1px solid #222' }}
            >
              {/* Left — attribution */}
              <div className="md:col-span-1 flex flex-col gap-1">
                <p className="text-sm font-bold" style={{ color: '#f5f2ee' }}>{t.name}</p>
                <p className="text-xs leading-snug" style={{ color: '#555' }}>{t.title}</p>
                <p className="text-xs mt-2" style={{ color: '#3a3a3a' }}>{t.relationship}</p>
                <p className="text-xs" style={{ color: '#3a3a3a' }}>{t.date}</p>
              </div>

              {/* Right — quote */}
              <div className="md:col-span-4">
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: '#888', fontStyle: 'italic' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-xs"
          style={{ color: '#333' }}
        >
          All recommendations verified on{' '}
          <a
            href="https://www.linkedin.com/in/harshashwinshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
            style={{ color: '#555' }}
          >
            LinkedIn ↗
          </a>
        </motion.p>

      </div>
    </section>
  )
}
