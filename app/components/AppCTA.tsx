'use client'

import Image from 'next/image'
import DownloadButton from './DownloadButton'

interface AppCTAProps {
  title?: string
  description?: string
}

export default function AppCTA({ 
  title = "Start Your Heart Health Journey Today",
  description = "Join our community of heart health enthusiasts and begin your journey to a healthier life with Impulse."
}: AppCTAProps) {
  return (
    <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl p-10 
                  shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/30
                  hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-all duration-500
                  relative">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
        {/* App Preview */}
        <div className="w-full md:w-1/3 relative max-w-[320px] md:absolute md:bottom-0 md:left-0 group">
          <div className="relative transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src="/apppreview.png"
              alt="Impulse App Preview"
              width={320}
              height={427}
              className="w-full h-auto drop-shadow-2xl"
              priority
              quality={95}
            />
            <div className="absolute -inset-4 bg-red-500/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 md:ml-[320px] md:pr-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-600/90 mb-8 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-gray-700">Real-time heart rate monitoring</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-gray-700">Detailed health analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-gray-700">Privacy protected</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-gray-700">Personalized insights & tips</span>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex items-center gap-8">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  )
} 