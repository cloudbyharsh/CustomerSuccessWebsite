'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const prevWordRef = useRef<HTMLElement | null>(null)

  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const dotX = useSpring(x, { stiffness: 2000, damping: 100 })
  const dotY = useSpring(y, { stiffness: 2000, damping: 100 })
  const ringX = useSpring(x, { stiffness: 200, damping: 30 })
  const ringY = useSpring(y, { stiffness: 200, damping: 30 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY); setVisible(true)
      const t = e.target as Element
      setHovering(!!t.closest('a,button,[role="button"]'))
      if (prevWordRef.current && prevWordRef.current !== t) {
        prevWordRef.current.style.color = ''; prevWordRef.current = null
      }
      if (t.classList.contains('hw-word') && t !== prevWordRef.current) {
        const el = t as HTMLElement; el.style.color = '#29d4ff'; prevWordRef.current = el
      }
    }
    const onLeave = () => { setVisible(false); if (prevWordRef.current) { prevWordRef.current.style.color = ''; prevWordRef.current = null } }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [x, y])

  if (!mounted) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', border: '1.5px solid #fff', mixBlendMode: 'difference' }}
        animate={{ width: clicking ? 20 : hovering ? 44 : 32, height: clicking ? 20 : hovering ? 44 : 32, opacity: visible ? 1 : 0 }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 }, opacity: { duration: 0.25 } }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-white"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%', mixBlendMode: 'difference' }}
        animate={{ width: hovering ? 0 : clicking ? 3 : 5, height: hovering ? 0 : clicking ? 3 : 5, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />
    </>
  )
}
