'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplineIntro() {
  const [visible, setVisible] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('intro-seen')
    if (!seen) setVisible(true)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('intro-seen', '1')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="spline-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9998] bg-[#07101a] overflow-hidden"
        >
          {/* Spline scene — full bleed */}
          <iframe
            src="https://my.spline.design/cybermannequin-Ty1lqHyfzXU8ZI5hXJrHo4rS/"
            frameBorder="0"
            className="absolute inset-0 w-full h-full"
            onLoad={() => setIframeLoaded(true)}
            title="Cyber Mannequin"
          />

          {/* Top-left name — subtle presence */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: iframeLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-8 left-8 md:left-16 text-sm font-bold tracking-tight text-[#f5f2ee] z-10 pointer-events-none"
          >
            Harsh Shah
          </motion.p>

          {/* Bottom — Enter CTA */}
          <AnimatePresence>
            {iframeLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, delay: 2 }}
                className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3 z-10"
              >
                <button
                  onClick={dismiss}
                  className="group flex items-center gap-3 px-8 py-3 border border-[#29d4ff]/50 text-[#29d4ff] text-sm tracking-[0.22em] uppercase hover:bg-[#29d4ff]/10 transition-colors duration-300"
                >
                  Enter
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#29d4ff]/30">
                  Customer Success Portfolio
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading shimmer while iframe loads */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-[10px] tracking-[0.4em] uppercase text-[#29d4ff]/50"
              >
                Loading
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
