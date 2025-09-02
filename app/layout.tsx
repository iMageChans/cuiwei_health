import { Inter } from 'next/font/google'
// import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('./components/Navigation'));
const Footer = dynamic(() => import('./components/Footer'));

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* <GoogleAnalytics gaId='G-2F6DSS9TDZ' /> */}
      </body>
    </html>
  )
} 