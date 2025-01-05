'use client'

import { useState } from 'react'
import Image from 'next/image'

const DownloadButton = () => {
  const [showQR, setShowQR] = useState(false)
  
  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    }
    return false
  }

  const handleDownload = () => {
    if (isMobile()) {
      const userAgent = navigator.userAgent.toLowerCase()
      if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        window.location.href = 'https://apps.apple.com/gb/app/impulse-heart-rate-monitor/id6465695370'
      } else if (userAgent.includes('android')) {
        window.location.href = 'https://apps.apple.com/gb/app/impulse-heart-rate-monitor/id6465695370'
      }
    }
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
        className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold 
                 hover:bg-red-600 transition-all duration-300 flex items-center gap-2
                 hover:shadow-md transform hover:scale-105 active:scale-95"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <span>Download App</span>
      </button>

      {/* QR Code Popup */}
      {!isMobile() && showQR && (
        <div className="absolute top-full right-0 mt-4 
                      bg-white p-5 rounded-2xl shadow-2xl transition-all duration-300 
                      animate-fade-in border border-gray-100 w-[280px]"
             style={{ zIndex: 1000 }}
        >
          <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden
                        ring-1 ring-gray-100">
            <Image
              src="/qr-code.png"
              alt="Download Impulse Heart Rate Monitor"
              fill
              className="object-contain scale-[0.95]"
              priority
              quality={100}
              sizes="280px"
            />
          </div>
          
          {/* 箭头指示器 */}
          <div className="absolute -top-2 right-6 transform rotate-45 
                        w-4 h-4 bg-white border-l border-t border-gray-100"></div>
        </div>
      )}
    </div>
  )
}

export default DownloadButton 