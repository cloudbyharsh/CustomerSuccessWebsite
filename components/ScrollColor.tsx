'use client'

import { useEffect } from 'react'

const colors: Record<string, string> = {
  hero:         '#f5f2ee',
  about:        '#f5f2ee',
  experience:   '#edeae5',
  expertise:    '#f5f2ee',
  tools:        '#edeae5',
  philosophy:   '#f5f2ee',
  testimonials: '#111111',
  contact:      '#111111',
}

export default function ScrollColor() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id && colors[id]) {
              document.body.style.backgroundColor = colors[id]
            }
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return null
}
