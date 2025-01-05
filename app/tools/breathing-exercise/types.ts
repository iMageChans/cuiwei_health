export interface BreathingPattern {
  id: string
  name: string
  description: string
  color: string
  inhale: number
  hold1?: number
  exhale: number
  hold2?: number
  icon: string
  benefits: string[]
  mindfulnessPrompts: {
    inhale: string
    hold1?: string
    exhale: string
    hold2?: string
  }
  sounds: {
    inhale: string
    hold?: string
    exhale: string
  }
  backgroundMusic?: string
}

export interface BreathingState {
  phase: 'inhale' | 'hold1' | 'exhale' | 'hold2'
  timeLeft: number
  totalTime: number
} 