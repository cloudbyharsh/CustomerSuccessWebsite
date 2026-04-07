import type { Metadata } from 'next'
import { Syne, Syne_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/GhostCursor'
import ScrollColor from '@/components/ScrollColor'
import ParticleBackground from '@/components/ParticleBackground'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const syneMono = Syne_Mono({
  subsets: ['latin'],
  variable: '--font-syne-mono',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Harsh Shah — Customer Success Manager',
  description: '6 years. 200+ accounts. 0% logo churn. Enterprise B2B SaaS CSM based in Toronto.',
  keywords: ['Harsh Shah', 'Customer Success Manager', 'CSM', 'Enterprise SaaS', 'Toronto'],
  openGraph: {
    title: 'Harsh Shah — Customer Success Manager',
    description: 'Never lost a client. 6 years. $800K+ portfolio.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${syneMono.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <ParticleBackground />
        <Cursor />
        <ScrollColor />
        <Nav />
        {children}
      </body>
    </html>
  )
}
