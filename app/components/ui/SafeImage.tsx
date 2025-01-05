'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export interface SafeImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
  fallbackSrc?: string
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  className = '',
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // 生成默认占位图 - 使用更现代的设计
  const defaultFallback = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f3f4f6" />
          <stop offset="100%" stop-color="#e5e7eb" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <path d="M35,30 L65,30 A5,5 0 0 1 70,35 L70,65 A5,5 0 0 1 65,70 L35,70 A5,5 0 0 1 30,65 L30,35 A5,5 0 0 1 35,30" fill="#d1d5db"/>
      <path d="M40,45 A5,5 0 1 1 40,35 A5,5 0 0 1 40,45" fill="#9ca3af"/>
      <path d="M30,60 L45,45 L55,55 L65,45 L70,50 L70,65 A5,5 0 0 1 65,70 L35,70 A5,5 0 0 1 30,65" fill="#9ca3af"/>
    </svg>
  `)}`

  return (
    <div className="relative w-full h-full">
      <Image
        src={error ? (fallbackSrc || defaultFallback) : src}
        alt={alt}
        className={`
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${className}
        `}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        onLoad={() => {
          setIsLoading(false)
        }}
        {...props}
      />

      {/* 加载状态 */}
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse">
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-300 animate-spin"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
} 