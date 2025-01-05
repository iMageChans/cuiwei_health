'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/stories/hero-1.png',
    alt: 'A person checking heart rate on smartwatch while jogging',
  },
  {
    id: 2,
    image: '/stories/hero-2.png',
    alt: 'Family enjoying outdoor activities together',
  },
  {
    id: 3,
    image: '/stories/hero-3.png',
    alt: 'Person practicing mindful meditation with heart rate monitoring',
  },
  {
    id: 4,
    image: '/stories/hero-4.png',
    alt: 'Group fitness class participants tracking their heart rates',
  },
  {
    id: 5,
    image: '/stories/hero-5.png',
    alt: 'Individual analyzing personal health data on mobile app',
  },
  {
    id: 6,
    image: '/stories/hero-6.png',
    alt: 'Person achieving their heart health goals',
  }
]

export default function StoryHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16 animate-fade-in-up delay-300">
      {/* 主容器 */}
      <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-white shadow-xl">
        {/* 轮播图片 */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out
                        ${index === currentSlide 
                          ? 'opacity-100 translate-x-0' 
                          : index < currentSlide 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'}`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
                quality={100}
              />
            </div>
          ))}
        </div>

        {/* 控制按钮 */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white
                     flex items-center justify-center shadow-lg
                     transition-all duration-300 hover:scale-110
                     opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <svg 
              className="w-6 h-6 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white
                     flex items-center justify-center shadow-lg
                     transition-all duration-300 hover:scale-110
                     opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <svg 
              className="w-6 h-6 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                        ${index === currentSlide 
                          ? 'w-8 bg-red-500' 
                          : 'bg-gray-300 hover:bg-red-200'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 