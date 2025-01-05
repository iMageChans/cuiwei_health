'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BreathingState, BreathingPattern } from '../types'

interface Props {
  state: BreathingState
  pattern: BreathingPattern
  mindfulnessPrompts: {
    inhale: string
    hold1?: string
    exhale: string
    hold2?: string
  }
}

export default function BreathingAnimation({ state, pattern, mindfulnessPrompts }: Props) {
  const scale = state.phase === 'inhale' ? 1.2 :
    state.phase === 'exhale' ? 0.9 : 1

  const opacity = state.phase === 'hold1' || state.phase === 'hold2' ? 0.7 : 1

  const getCurrentPrompt = () => {
    switch (state.phase) {
      case 'inhale': return mindfulnessPrompts.inhale
      case 'hold1': return mindfulnessPrompts.hold1
      case 'exhale': return mindfulnessPrompts.exhale
      case 'hold2': return mindfulnessPrompts.hold2
      default: return ''
    }
  }

  return (
    <div className="relative">
      {/* 主要呼吸圆圈动画 */}
      <div className="relative">
        <div className={`w-64 h-64 rounded-full ${pattern.color} filter blur-lg opacity-30`}>
          <motion.div
            animate={{
              scale,
              opacity
            }}
            transition={{
              duration: state.timeLeft,
              ease: "linear"
            }}
          />
        </div>

        {/* 呼吸圆圈光晕效果 */}
        <div className={`absolute inset-0 w-64 h-64 rounded-full ${pattern.color} opacity-10`}>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* 文字提示 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-3xl font-light tracking-wider mb-3">
          <motion.div
            animate={{
              opacity: [1, 0.7, 1],
              y: [0, -2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {state.phase === 'inhale' && '吸气'}
            {state.phase === 'hold1' && '屏息'}
            {state.phase === 'exhale' && '呼气'}
            {state.phase === 'hold2' && '屏息'}
          </motion.div>
        </div>

        {/* 正念提示文字 */}
        <AnimatePresence mode="wait">
          <div className="text-center px-6 text-sm font-light tracking-wide text-white/90">
            <motion.div
              key={state.phase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {getCurrentPrompt()}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* 装饰性粒子效果 */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 20 * (i + 1), 0],
                y: [0, -20 * (i + 1), 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 