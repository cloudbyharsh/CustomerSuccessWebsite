import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-syne-mono)', 'monospace'],
        display: ['var(--font-syne-mono)', 'monospace'],
      },
      colors: {
        canvas:       '#07101a',
        card:         '#0c1825',
        'card-bright':'#111f30',
        amber:        '#e8a84c',
        blue:         '#4c8fe8',
        cyan:         '#29d4ff',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
