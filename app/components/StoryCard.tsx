'use client'

import Image from 'next/image'

interface StoryCardProps {
  image: string
  name: string
  title: string
  description: string
  quote: string
}

export default function StoryCard({ image, name, title, description, quote }: StoryCardProps) {
  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl 
                 transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* 图片区域 */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* 内容区域 */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-red-500 font-medium">{title}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

        <blockquote className="relative">
          <div className="absolute -top-3 -left-4 text-red-500/10">
            <svg className="w-8 h-8 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-gray-500 italic pl-6">{quote}</p>
        </blockquote>
      </div>
    </div>
  )
} 