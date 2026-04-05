import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import GhostCursor from '@/components/GhostCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Harsh Shah — Customer Success Manager',
  description:
    '6 years of enterprise B2B SaaS experience. 0% logo churn across 3 consecutive years. $800K+ portfolio. Trusted advisor to global brands.',
  keywords: ['Harsh Shah', 'Customer Success Manager', 'CSM', 'Enterprise SaaS', 'Toronto', 'B2B SaaS'],
  openGraph: {
    title: 'Harsh Shah — Customer Success Manager',
    description: 'The CSM who never lost a client. 6 years. 200+ accounts. 0% logo churn.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-canvas text-white overflow-x-hidden">
        <GhostCursor color="#e8a84c" brightness={1.2} trailLength={20} bloomStrength={0.5} />
        <Nav />
        {children}
      </body>
    </html>
  )
}
