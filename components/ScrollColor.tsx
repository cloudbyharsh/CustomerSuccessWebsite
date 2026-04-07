'use client'

import { useEffect } from 'react'

const colors: Record<string, string> = {
  hero:         '#000000',
  about:        '#000000',
  experience:   '#000000',
  expertise:    '#000000',
  tools:        '#000000',
  philosophy:   '#000000',
  testimonials: '#000000',
  contact:      '#000000',
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
