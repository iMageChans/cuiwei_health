'use client'

import { motion } from 'framer-motion'

// 心跳波形定义 - 使用常量确保一致性
const PULSE_POINTS = [
  "M0,50 L80,50", // 基线
  "L100,50", // 开始上升
  "L110,20", // 第一个峰
  "L120,80", // 谷
  "L130,35", // 第二个峰
  "L140,50", // 回到基线
  "L400,50" // 继续基线
].join(" ")

interface HeartRateMonitorProps {
  bpm: number
}

export default function HeartRateMonitor({ bpm }: HeartRateMonitorProps) {
  return (
    <div className="relative h-32">
      <div className="relative h-full">
        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          {/* 心跳波形 - 发光效果 */}
          <motion.path
            d={PULSE_POINTS}
            fill="none"
            stroke="#ef444415"
            strokeWidth="8"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />

          {/* 心跳波形 - 主线 */}
          <motion.path
            d={PULSE_POINTS}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
          />

          {/* 移动的光点 */}
          <motion.circle
            r="2.5"
            fill="#ef4444"
            filter="url(#glow)"
            initial={{ cx: 0, cy: 50 }}
            animate={{
              cx: [0, 400],
              cy: [50, 50],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          {/* 光晕效果 */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feFlood floodColor="#ef4444" floodOpacity="0.15" result="colorFlood" />
              <feComposite in="colorFlood" in2="coloredBlur" operator="in" result="coloredBlurAlpha" />
              <feMerge>
                <feMergeNode in="coloredBlurAlpha" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* BPM 显示 */}
        <div className="absolute right-4 top-4 flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.3
                }}
              >
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span className="text-2xl font-bold text-red-500">
                  {Math.round(bpm)}
                </span>
              </motion.div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Heart Rate</span>
              <span className="text-sm font-medium text-gray-600">BPM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 