'use client'

import { useEffect, useState } from 'react'

interface StatCardProps {
  number: string
  label: string
  icon: React.ReactNode
  color: string
}

export default function StatCard({ number, label, icon, color }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById(`stat-${number}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [number])

  return (
    <div
      id={`stat-${number}`}
      className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl 
                transition-all duration-500 transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6
                     transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-90'}`}>
        {icon}
      </div>
      <h3 className={`text-4xl font-bold text-gray-900 mb-2 
                    transition-all duration-700 delay-100
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        {number}
      </h3>
      <p className={`text-gray-600 text-lg leading-relaxed
                   transition-all duration-700 delay-200
                   ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        {label}
      </p>
    </div>
  )
} 