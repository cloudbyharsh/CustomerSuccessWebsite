'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const prevWordRef = useRef<HTMLElement | null>(null)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const dotX = useSpring(x, { stiffness: 2000, damping: 100 })
  const dotY = useSpring(y, { stiffness: 2000, damping: 100 })
  const ringX = useSpring(x, { stiffness: 180, damping: 28 })
  const ringY = useSpring(y, { stiffness: 180, damping: 28 })

  useEffect(() => {
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = e.target as Element
      setHovering(!!target.closest('a, button, [role="button"], input, textarea, select, label'))

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
      setVisible(false)
      if (prevWordRef.current) {
        prevWordRef.current.style.color = ''
        prevWordRef.current = null
      }
    }
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
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          border: '1px solid #e8a84c',
          mixBlendMode: 'normal',
        }}
        animate={{
          width: clicking ? 24 : hovering ? 48 : 36,
          height: clicking ? 24 : hovering ? 48 : 36,
          opacity: visible ? (hovering ? 0.9 : 0.6) : 0,
          borderWidth: hovering ? '1.5px' : '1px',
        }}
        transition={{
          width: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3 },
        }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%', background: '#e8a84c' }}
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
