'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const stories = [
  {
    id: 1,
    name: 'Sarah',
    role: 'Yoga Instructor',
    image: '/images/stories/sarah.jpg',
    quote: 'Using Impulse helped me optimize my training intensity. I can now train smarter, not just harder.',
    achievement: 'Improved race time by 12%'
  },
  {
    id: 2,
    name: 'Michael',
    role: 'Marathon Runner',
    image: '/images/stories/michael.jpg',
    quote: 'The breathing exercises have become an essential part of my daily routine and my students love them too.',
    achievement: 'Reduced stress levels significantly'
  },
  {
    id: 3,
    name: 'Emma',
    role: 'Busy Professional',
    image: '/images/stories/emma.jpg',
    quote: 'I never realized how much my daily stress affected my heart rate. Now I can manage it better.',
    achievement: 'Better work-life balance'
  }
]

export default function UserStories() {
  const [currentPage, setCurrentPage] = useState(0)
  const storiesPerPage = 3
  const totalPages = Math.ceil(stories.length / storiesPerPage)

  const visibleStories = stories.slice(
    currentPage * storiesPerPage,
    (currentPage + 1) * storiesPerPage
  )

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories from Real Users
            </h2>
            <p className="text-xl text-gray-600">
              See how Impulse is helping people improve their health and wellness journey
            </p>
          </motion.div>
        </div>

        {/* 故事卡片网格 */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {visibleStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative">
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative z-10">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6">
                        <Image
                          src={story.image}
                          alt={story.name}
                          fill
                          className="object-cover rounded-full"
                          sizes="(max-width: 768px) 64px, 80px"
                        />
                      </div>
                      <blockquote className="text-gray-600 text-center mb-4 md:mb-6 text-sm md:text-base">
                        "{story.quote}"
                      </blockquote>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900">{story.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{story.role}</p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs md:text-sm">
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {story.achievement}
                        </div>
                      </div>
                    </div>

                    {/* 装饰背景 */}
                    <div className="absolute inset-0 transform translate-x-2 translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* 分页指示器 */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === index
                    ? 'w-6 bg-blue-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 