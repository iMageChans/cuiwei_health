'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface HeartRateZone {
  name: string
  range: [number, number]
  description: string
  activities: string[]
  color: string
  icon: string
}

export default function HeartRateCalculator() {
  const [mounted, setMounted] = useState(false)
  const [age, setAge] = useState<string>('')
  const [gender, setGender] = useState<'male' | 'female' | ''>('')
  const [showResults, setShowResults] = useState(false)

  // 确保组件只在客户端渲染
  useEffect(() => {
    setMounted(true)
  }, [])

  // 根据性别调整最大心率计算
  const calculateMaxHR = (age: number, gender: string) => {
    if (gender === 'female') {
      return 206 - (0.88 * age) // 女性最大心率公式
    }
    return 214 - (0.8 * age) // 男性最大心率公式
  }

  const calculateZones = (age: number, gender: string): HeartRateZone[] => {
    const maxHR = calculateMaxHR(age, gender)

    return [
      {
        name: 'Very Light',
        range: [
          Math.round(maxHR * 0.5),
          Math.round(maxHR * 0.6)
        ],
        description: 'Perfect for warm-up and recovery',
        activities: [
          'Walking',
          'Light stretching',
          'Casual activities'
        ],
        color: 'from-green-400 to-emerald-500',
        icon: '🌱'
      },
      {
        name: 'Light',
        range: [
          Math.round(maxHR * 0.6),
          Math.round(maxHR * 0.7)
        ],
        description: 'Fat burning zone, good for endurance',
        activities: [
          'Brisk walking',
          'Light jogging',
          'Easy cycling'
        ],
        color: 'from-blue-400 to-blue-500',
        icon: '🚶'
      },
      {
        name: 'Moderate',
        range: [
          Math.round(maxHR * 0.7),
          Math.round(maxHR * 0.8)
        ],
        description: 'Aerobic zone, improving cardiovascular fitness',
        activities: [
          'Running',
          'Swimming',
          'Dancing'
        ],
        color: 'from-yellow-400 to-amber-500',
        icon: '🏃'
      },
      {
        name: 'Hard',
        range: [
          Math.round(maxHR * 0.8),
          Math.round(maxHR * 0.9)
        ],
        description: 'Anaerobic zone, increasing performance',
        activities: [
          'Fast running',
          'High-intensity intervals',
          'Competitive sports'
        ],
        color: 'from-orange-400 to-red-500',
        icon: '⚡'
      },
      {
        name: 'Maximum',
        range: [
          Math.round(maxHR * 0.9),
          maxHR
        ],
        description: 'Peak zone, for short bursts only',
        activities: [
          'Sprinting',
          'Maximum effort intervals',
          'Elite athletic training'
        ],
        color: 'from-red-500 to-rose-600',
        icon: '🔥'
      }
    ]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (age && gender) {
      setShowResults(true)
    }
  }

  const resetCalculator = () => {
    setAge('')
    setGender('')
    setShowResults(false)
  }

  const zones = age && gender ? calculateZones(Number(age), gender) : []

  // 在客户端渲染之前返回加载状态
  if (!mounted) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
              <span className="text-3xl">❤️</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Target Heart Rate Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loading...
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
            <span className="text-3xl">❤️</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Target Heart Rate Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your optimal heart rate zones for different types of exercise
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Age
                        </label>
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 
                                   focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your age"
                          required
                          min="1"
                          max="120"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Gender
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setGender('male')}
                            className={`px-4 py-3 rounded-xl border-2 transition-all duration-200
                              ${gender === 'male'
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                              }`}
                          >
                            👨 Male
                          </button>
                          <button
                            type="button"
                            onClick={() => setGender('female')}
                            className={`px-4 py-3 rounded-xl border-2 transition-all duration-200
                              ${gender === 'female'
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                              }`}
                          >
                            👩 Female
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Why we need this information:
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          Age affects your maximum heart rate
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          Gender influences heart rate calculations
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          These factors help determine your optimal training zones
                        </li>
                      </ul>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold
                               hover:bg-blue-600 transition-colors"
                    >
                      Calculate Heart Rate Zones
                    </button>
                  </form>
                </motion.div>
              </div>
            ) : (
              <div className="space-y-8 p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Your Heart Rate Zones
                    </h2>
                    <p className="text-gray-600">
                      Based on your age ({age}) and gender ({gender})
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Maximum Heart Rate: {calculateMaxHR(Number(age), gender)} BPM
                    </p>
                  </div>

                  <div className="space-y-4">
                    {zones.map((zone, index) => (
                      <div key={zone.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className={`bg-gradient-to-r ${zone.color} p-6`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-3xl">{zone.icon}</span>
                                <h3 className="text-xl font-bold text-white">
                                  {zone.name}
                                </h3>
                              </div>
                              <div className="text-right">
                                <span className="text-2xl font-bold text-white">
                                  {zone.range[0]} - {zone.range[1]}
                                </span>
                                <span className="block text-sm text-white/80">BPM</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="text-gray-600 mb-4">{zone.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-medium text-gray-900">Suggested Activities:</h4>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {zone.activities.map((activity, i) => (
                                  <li key={i} className="flex items-center gap-2 text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {/* App CTA */}
                  <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src="/qr-code.png"
                          alt="Download Impulse App"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Track Your Heart Rate with Impulse
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Monitor your heart rate zones in real-time and get personalized training recommendations.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold 
                                         hover:bg-blue-600 transition-colors">
                            Download App
                          </button>
                          <button
                            onClick={resetCalculator}
                            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold 
                                         hover:bg-blue-50 transition-colors"
                          >
                            Calculate Again
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 相关资源 */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link
                      href="/knowledge/health/stress-heart"
                      className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 
                                    group-hover:bg-red-200 transition-colors">
                        <span className="text-2xl">❤️</span>
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-red-600 transition-colors">
                        Heart Health Guide
                      </h4>
                      <p className="text-gray-600">Learn about heart rate and health</p>
                    </Link>

                    <Link
                      href="/tools/breathing-exercise"
                      className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 
                                    group-hover:bg-blue-200 transition-colors">
                        <span className="text-2xl">🫁</span>
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        Breathing Exercise
                      </h4>
                      <p className="text-gray-600">Control your heart rate through breathing</p>
                    </Link>

                    <Link
                      href="/tools/stress-test"
                      className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 
                                    group-hover:bg-purple-200 transition-colors">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-purple-600 transition-colors">
                        Stress Assessment
                      </h4>
                      <p className="text-gray-600">Check your stress levels</p>
                    </Link>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

