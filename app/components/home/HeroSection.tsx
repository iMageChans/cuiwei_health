'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HeartRateMonitor from './HeartRateMonitor'
import TrustIndicators from './TrustIndicators'

export default function HeroSection() {
  const [bpm, setBpm] = useState(72)

  const updateBpm = useCallback(() => {
    setBpm(prev => {
      const newValue = prev + Math.random() * 2 - 1
      return Math.max(60, Math.min(80, newValue))
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(updateBpm, 1000)
    return () => clearInterval(interval)
  }, [updateBpm])

  // 定义统一的动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
      }
    })
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-100 rounded-full 
            filter blur-3xl opacity-30">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* 主要内容 */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center pt-24 md:pt-32">
          {/* 标题文本 */}
          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Monitor Your Heart.{' '}
              <span className="text-red-500">Improve Your Health.</span>
            </motion.div>
          </div>

          {/* 描述文本 */}
          <div className="text-xl text-gray-600 mb-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Track your heart rate, understand your body, and make informed decisions
              about your health with our advanced monitoring tools.
            </motion.div>
          </div>

          {/* 心跳监测器 */}
          <div className="w-full max-w-lg mx-auto mb-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <HeartRateMonitor bpm={bpm} />
            </motion.div>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Link
                href="https://apps.apple.com/gb/app/impulse-heart-rate-monitor/id6465695370"
                className="group bg-red-500 text-white px-8 py-4 rounded-xl font-semibold 
                         hover:bg-red-600 transition-all duration-300 transform hover:scale-105
                         flex items-center justify-center gap-2 relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span>Download App</span>
                <div className="absolute inset-0 rounded-xl bg-white/20">
                  <motion.div
                    initial={false}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Learn More 按钮 */}
            <Link
              href="/knowledge"
              className="bg-white text-red-500 px-8 py-4 rounded-xl font-semibold 
                       hover:bg-gray-50 transition-all duration-300 transform hover:scale-105
                       border-2 border-red-500 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Learn More</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <TrustIndicators />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 