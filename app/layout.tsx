import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LoadingScreen from '@/components/loading-screen'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NeuroQor | AI & Quantum Infrastructure and Cybersecurity Integration',
  description: 'Discover NeuroQor\'s dual focus on AI & Quantum infrastructure and Cybersecurity & Intelligence. Explore sovereign deployments, observability, quantum readiness and dark SOC capabilities.',
  keywords: ['AI infrastructure', 'quantum computing', 'cybersecurity', 'sovereign deployments', 'dark SOC', 'threat intelligence'],
  authors: [{ name: 'NeuroQor' }],
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#0B1F33',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
