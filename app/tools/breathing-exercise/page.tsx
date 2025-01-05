'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// 4-7-8 呼吸法
const breathingPattern = {
  name: '4-7-8 Breathing',
  description: 'A natural tranquilizer for the nervous system, helping reduce stress and anxiety',
  steps: [
    { phase: 'Inhale', duration: 4, instruction: 'Breathe in through your nose' },
    { phase: 'Hold', duration: 7, instruction: 'Hold your breath' },
    { phase: 'Exhale', duration: 8, instruction: 'Exhale completely through your mouth' }
  ],
  totalDuration: 19 // 4 + 7 + 8
}

export default function BreathingExercisePage() {
  const [isStarted, setIsStarted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)
  const totalCycles = 4

  useEffect(() => {
    if (!isStarted) return

    const step = breathingPattern.steps[currentStep]
    const interval = 100 // Update every 100ms for smooth animation
    let elapsed = 0

    const timer = setInterval(() => {
      elapsed += interval
      const stepProgress = elapsed / (step.duration * 1000)
      setProgress(stepProgress)

      if (stepProgress >= 1) {
        if (currentStep === breathingPattern.steps.length - 1) {
          // Complete one cycle
          if (cycleCount + 1 >= totalCycles) {
            setIsStarted(false)
            setCycleCount(0)
            setCurrentStep(0)
          } else {
            setCycleCount(prev => prev + 1)
            setCurrentStep(0)
          }
        } else {
          setCurrentStep(prev => prev + 1)
        }
        setProgress(0)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isStarted, currentStep, cycleCount])

  const currentPhase = isStarted ? breathingPattern.steps[currentStep] : null

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <span className="text-3xl">🫁</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {breathingPattern.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {breathingPattern.description}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* 呼吸动画圆圈 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-blue-100">
                  <motion.div
                    animate={{
                      scale: currentPhase?.phase === 'Inhale' ? [1, 1.5] :
                        currentPhase?.phase === 'Hold' ? 1.5 : [1.5, 1],
                    }}
                    transition={{
                      duration: currentPhase?.duration || 0,
                      ease: 'easeInOut'
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: 'rgb(219 234 254)', // bg-blue-100
                    }}
                  />
                </div>
              </div>

              {/* 指导文字 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  {!isStarted ? (
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <button
                          onClick={() => setIsStarted(true)}
                          className="px-8 py-4 bg-blue-500 text-white rounded-xl text-lg font-semibold
                                   hover:bg-blue-600 transition-colors"
                        >
                          Start Exercise
                        </button>
                        <p className="text-gray-600 mt-4">
                          Find a comfortable position and click to begin
                        </p>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h2 className="text-3xl font-bold text-gray-900">
                          {currentPhase?.phase}
                        </h2>
                        <p className="text-gray-600">
                          {currentPhase?.instruction}
                        </p>
                        <div className="text-sm text-gray-500">
                          Cycle {cycleCount + 1} of {totalCycles}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* App CTA */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl mx-6 mb-6">
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
                  Practice Breathing with Impulse
                </h3>
                <p className="text-gray-600 mb-4">
                  Access guided breathing exercises anytime, anywhere. Track your progress and improve your mental wellbeing.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold 
                                 hover:bg-blue-600 transition-colors">
                    Download App
                  </button>
                  <button
                    onClick={() => {
                      setIsStarted(false)
                      setCycleCount(0)
                      setCurrentStep(0)
                    }}
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold 
                                 hover:bg-blue-50 transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 