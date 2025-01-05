'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 关闭移动菜单当路由改变时
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image
              src="/logo.png"
              alt="Impulse Logo"
              width={32}
              height={32}
              className="w-10 h-10 object-contain rounded-lg"
              priority
            />
            <div className="nav-logo-text-container">
              <span className="nav-logo-text">Impulse</span>
              <span className="nav-logo-subtitle">Heart Rate Monitor</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/knowledge" className={`nav-link ${pathname.startsWith('/knowledge') ? 'active' : ''}`}>
              Health Knowledge
            </Link>
            <Link href="/tools" className={`nav-link ${pathname.startsWith('/tools') ? 'active' : ''}`}>
              Health Tools
            </Link>
            <Link href="/stories" className={`nav-link ${pathname.startsWith('/stories') ? 'active' : ''}`}>
              Voices That Inspire
            </Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
          </div>

          {/* Download Button & QR Code */}
          <div className="relative">
            <button
              className="nav-download hidden md:flex"
              onMouseEnter={() => setShowQR(true)}
              onMouseLeave={() => setShowQR(false)}
            >
              <svg
                className="nav-download-icon"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span>Download</span>
            </button>

            {/* Desktop QR Code Popup */}
            {showQR && (
              <div className="hidden md:block absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-xl p-4 animate-fade-in">
                <div className="relative w-32 h-32">
                  <Image
                    src="/tools/qr-code.png"
                    alt="Download Impulse App"
                    fill
                    className="rounded-xl"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Scan to download
                </p>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden nav-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className={`nav-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" className={`nav-mobile-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/knowledge" className={`nav-mobile-link ${pathname.startsWith('/knowledge') ? 'active' : ''}`}>
            Health Knowledge
          </Link>
          <Link href="/tools" className={`nav-mobile-link ${pathname.startsWith('/tools') ? 'active' : ''}`}>
            Health Tools
          </Link>
          <Link href="/stories" className={`nav-mobile-link ${pathname.startsWith('/stories') ? 'active' : ''}`}>
            Voices That Inspire
          </Link>
          <Link href="/about" className={`nav-mobile-link ${pathname === '/about' ? 'active' : ''}`}>
            About Us
          </Link>
        </div>
      </nav>

      {/* Mobile Download Button */}
      <a
        href="https://apps.apple.com/app/id6465695370"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 nav-download-mobile"
      >
        Download App
      </a>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}