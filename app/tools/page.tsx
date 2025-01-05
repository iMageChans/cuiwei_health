'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const tools = [
  {
    id: 'heart-rate',
    name: 'Heart Rate Zones',
    description: 'Discover your optimal training zones and maximize your workout efficiency with personalized heart rate recommendations.',
    image: '/tools/ideal-heart-rate.png',
    link: '/tools/heart-rate-calculator',
    category: 'Physical Health',
    duration: '2 min',
    icon: '❤️',
    color: 'from-red-500 to-rose-600',
    benefit: 'Train smarter, not harder'
  },
  {
    id: 'breathing-exercise',
    name: 'Breathing Exercise',
    description: 'Master science-backed breathing techniques to reduce stress, improve focus, and boost your energy levels naturally.',
    image: '/tools/breathe.png',
    link: '/tools/breathing-exercise',
    category: 'Mental Wellness',
    duration: '5-10 min',
    icon: '🫁',
    color: 'from-blue-500 to-indigo-600',
    benefit: 'Instant calm, anytime'
  },
  {
    id: 'stress-test',
    name: 'Stress Assessment',
    description: 'Get insights into your stress levels and receive personalized recommendations for better stress management.',
    image: '/tools/stress-test.png',
    link: '/tools/stress-test',
    category: 'Mental Health',
    duration: '3 min',
    icon: '📊',
    color: 'from-purple-500 to-violet-600',
    benefit: 'Know your stress levels'
  }
]

export default function ToolsPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 标题部分 */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Interactive Tools for Your Wellbeing
              </h1>
              <p className="text-xl text-gray-600">
                Explore our collection of tools designed to help you monitor and improve your health
              </p>
            </motion.div>
          </div>
        </div>

        {/* 工具卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div key={tool.id} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={tool.link} className="block">
                  {/* 卡片容器 */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
                                group-hover:shadow-xl group-hover:-translate-y-1">
                    {/* 图片区域 */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      {/* 工具图标 */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} 
                                      flex items-center justify-center text-2xl shadow-lg`}>
                          {tool.icon}
                        </div>
                      </div>
                    </div>

                    {/* 内容区域 */}
                    <div className="p-6">
                      {/* 标签 */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-gray-50 text-sm font-medium text-gray-700">
                          {tool.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-50 text-sm font-medium text-gray-600">
                          {tool.duration}
                        </span>
                      </div>

                      {/* 标题和描述 */}
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 
                                   transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {tool.description}
                      </p>

                      {/* 底部信息 */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          {tool.benefit}
                        </span>
                        <div className="flex items-center gap-2 text-blue-600 font-medium">
                          <span>
                            {tool.id === 'heart-rate' && 'Calculate Zones'}
                            {tool.id === 'breathing-exercise' && 'Start Exercise'}
                            {tool.id === 'stress-test' && 'Take Test'}
                          </span>
                          <svg
                            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 