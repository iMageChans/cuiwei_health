import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Impulse',
    default: 'Impulse - Your Heart Health Companion'
  },
  description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
  openGraph: {
    title: 'Impulse - Your Heart Health Companion',
    description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
    url: 'https://impulse.health',
    siteName: 'Impulse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Impulse Heart Rate Monitor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image'
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://impulse.health'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 