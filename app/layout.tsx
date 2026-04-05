import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/GhostCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans overflow-x-hidden">
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  )
}
