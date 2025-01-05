'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Question {
  id: number
  text: string
  options: {
    text: string
    score: number
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How often do you feel overwhelmed by your daily tasks?',
    options: [
      { text: 'Rarely or never', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Almost always', score: 3 }
    ]
  },
  {
    id: 2,
    text: 'How well do you sleep at night?',
    options: [
      { text: 'Very well', score: 0 },
      { text: 'Fairly well', score: 1 },
      { text: 'Not very well', score: 2 },
      { text: 'Poorly', score: 3 }
    ]
  },
  {
    id: 3,
    text: 'How often do you experience physical tension (e.g., headaches, muscle tension)?',
    options: [
      { text: 'Rarely or never', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Almost always', score: 3 }
    ]
  },
  {
    id: 4,
    text: 'How easily can you focus on tasks without feeling distracted or anxious?',
    options: [
      { text: 'Very easily', score: 0 },
      { text: 'Somewhat easily', score: 1 },
      { text: 'With difficulty', score: 2 },
      { text: 'Very difficult', score: 3 }
    ]
  },
  {
    id: 5,
    text: 'How often do you feel irritable or short-tempered?',
    options: [
      { text: 'Rarely or never', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Almost always', score: 3 }
    ]
  },
  {
    id: 6,
    text: 'How would you rate your energy levels throughout the day?',
    options: [
      { text: 'Consistently high', score: 0 },
      { text: 'Mostly stable', score: 1 },
      { text: 'Often low', score: 2 },
      { text: 'Very low', score: 3 }
    ]
  },
  {
    id: 7,
    text: 'How often do you take breaks to relax during your day?',
    options: [
      { text: 'Regularly', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Rarely', score: 2 },
      { text: 'Almost never', score: 3 }
    ]
  },
  {
    id: 8,
    text: 'How well can you maintain a healthy work-life balance?',
    options: [
      { text: 'Very well', score: 0 },
      { text: 'Fairly well', score: 1 },
      { text: 'Not very well', score: 2 },
      { text: 'Poorly', score: 3 }
    ]
  }
]

export default function StressTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateStressLevel = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 3
    const percentage = (totalScore / maxScore) * 100

    if (percentage <= 30) return {
      level: 'Low',
      color: 'text-green-500',
      message: 'Your stress levels appear to be well-managed. Keep up your healthy habits!'
    }
    if (percentage <= 50) return {
      level: 'Moderate',
      color: 'text-yellow-500',
      message: 'You\'re experiencing some stress. Consider incorporating more stress-management techniques into your routine.'
    }
    if (percentage <= 75) return {
      level: 'High',
      color: 'text-orange-500',
      message: 'Your stress levels are elevated. It\'s important to take active steps to manage your stress.'
    }
    return {
      level: 'Very High',
      color: 'text-red-500',
      message: 'Your stress levels are significantly high. We strongly recommend taking immediate steps to reduce stress.'
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
            <span className="text-3xl">📊</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stress Level Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take this quick assessment to understand your current stress levels and get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <div className="p-8">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* 进度指示器 */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Question {currentQuestion + 1} of {questions.length}</span>
                      <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* 问题 */}
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                    {questions[currentQuestion].text}
                  </h2>

                  {/* 选项 */}
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.score)}
                        className="w-full p-4 text-left rounded-xl border-2 border-gray-200 
                                 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Your Stress Level:
                      <span className={`ml-2 ${calculateStressLevel().color}`}>
                        {calculateStressLevel().level}
                      </span>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {calculateStressLevel().message}
                    </p>
                    <p className="text-gray-600 mb-8">
                      Based on your responses, here are some personalized recommendations:
                    </p>
                  </div>

                  {/* 建议卡片 */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Quick Relief
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Try our guided breathing exercise to help reduce stress immediately.
                      </p>
                      <a
                        href="/tools/breathing-exercise"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Start Exercise →
                      </a>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Long-term Management
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Monitor your heart rate to better understand and manage stress.
                      </p>
                      <a
                        href="/tools/heart-rate-calculator"
                        className="inline-flex items-center text-green-600 hover:text-green-700"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>

                  {/* App CTA */}
                  <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
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
                          Track Your Stress with Impulse
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Monitor your stress levels over time and get personalized recommendations for better mental wellbeing.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold 
                                         hover:bg-purple-600 transition-colors">
                            Download App
                          </button>
                          <button
                            onClick={resetTest}
                            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold 
                                         hover:bg-purple-50 transition-colors"
                          >
                            Take Test Again
                          </button>
                        </div>
                      </div>
                    </div>
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