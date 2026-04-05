'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* hw-word hover colour effect */
function useWordHover() {
  const prevWordRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const target = e.target as Element
      if (prevWordRef.current && prevWordRef.current !== target) {
        prevWordRef.current.style.color = ''
        prevWordRef.current = null
      }
      if (target.classList.contains('hw-word') && target !== prevWordRef.current) {
        const el = target as HTMLElement
        el.style.color = '#e8a84c'
        prevWordRef.current = el
      }
    }
    const onLeave = () => {
      if (prevWordRef.current) {
        prevWordRef.current.style.color = ''
        prevWordRef.current = null
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])
}

export default function GhostCursor({
  color = '#e8a84c',
}: {
  color?: string
  brightness?: number
  trailLength?: number
  bloomStrength?: number
  [key: string]: unknown
}) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useWordHover()

  const x = useMotionValue(-300)
  const y = useMotionValue(-300)

  /* dot — snappy */
  const dotX = useSpring(x, { stiffness: 2000, damping: 100 })
  const dotY = useSpring(y, { stiffness: 2000, damping: 100 })

  /* outer ring — lags slightly */
  const ringX = useSpring(x, { stiffness: 180, damping: 28 })
  const ringY = useSpring(y, { stiffness: 180, damping: 28 })

  /* glow orb — even more lag for ghostly trail feel */
  const glowX = useSpring(x, { stiffness: 80, damping: 20 })
  const glowY = useSpring(y, { stiffness: 80, damping: 20 })

  useEffect(() => {
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = e.target as Element
      setHovering(!!target.closest('a, button, [role="button"], input, textarea, select, label'))
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [x, y])

  if (!mounted) return null

  return (
    <>
      {/* Soft glow orb — ghost trail */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: `radial-gradient(circle, ${color}28 0%, ${color}00 70%)`,
          zIndex: 9997,
        }}
        animate={{
          width: hovering ? 160 : clicking ? 80 : 120,
          height: hovering ? 160 : clicking ? 80 : 120,
          opacity: visible ? 1 : 0,
        }}
        transition={{ width: { duration: 0.4 }, height: { duration: 0.4 }, opacity: { duration: 0.4 } }}
      />

      {/* Outer ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: `1px solid ${color}`,
          zIndex: 9999,
        }}
        animate={{
          width: clicking ? 24 : hovering ? 48 : 36,
          height: clicking ? 24 : hovering ? 48 : 36,
          opacity: visible ? (hovering ? 0.9 : 0.55) : 0,
        }}
        transition={{
          width: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3 },
        }}
      />

      {/* Inner dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          background: color,
          zIndex: 9999,
        }}
        animate={{
          width: hovering ? 0 : clicking ? 3 : 5,
          height: hovering ? 0 : clicking ? 3 : 5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
