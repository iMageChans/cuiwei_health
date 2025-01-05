import { Metadata } from 'next'
import { BreathingPattern } from './types'

export const metadata: Metadata = {
  title: 'Relax Your Heart - Quick Breathing Exercise | Impulse',
  description: 'Follow this 30-second breathing exercise to calm your mind and heart.',
  keywords: 'breathing exercise, heart health, stress relief, guided breathing, relaxation technique, meditation, mindfulness',
  openGraph: {
    title: 'Relax Your Heart - Quick Breathing Exercise',
    description: 'Follow this 30-second breathing exercise to calm your mind and heart.',
    images: ['/tools/breathe.png'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relax Your Heart - Quick Breathing Exercise',
    description: 'Follow this 30-second breathing exercise to calm your mind and heart.',
    images: ['/tools/breathe.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yourwebsite.com/tools/breathing-exercise',
  },
}

export const breathingPatterns: BreathingPattern[] = [
  {
    id: 'relaxing-breath',
    name: '4-7-8 Relaxing Breath',
    description: 'A natural tranquilizer for the nervous system',
    color: 'from-blue-400 to-indigo-500',
    inhale: 4,
    hold1: 7,
    exhale: 8,
    icon: '🌊',
    benefits: [
      'Reduces anxiety and stress',
      'Helps with sleep',
      'Manages cravings',
      'Calms emotional responses'
    ],
    mindfulnessPrompts: {
      inhale: 'Breathe in peace and calmness',
      hold1: 'Let your mind be still like a calm lake',
      exhale: 'Release all tension and worries'
    },
    sounds: {
      inhale: '/audio/breathing/inhale.mp3',
      hold: '/audio/breathing/hold.mp3',
      exhale: '/audio/breathing/exhale.mp3'
    },
    backgroundMusic: '/audio/breathing/wind.mp3'
  },
  {
    id: 'box-breathing',
    name: 'Box Breathing',
    description: 'Equal duration breathing for focus and calm',
    color: 'from-green-400 to-teal-500',
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    icon: '⬛',
    benefits: [
      'Improves concentration',
      'Reduces stress',
      'Increases mindfulness',
      'Better emotional control'
    ],
    mindfulnessPrompts: {
      inhale: 'Draw in strength and clarity',
      hold1: 'Feel the energy filling your body',
      exhale: 'Let go of all distractions',
      hold2: 'Rest in peaceful awareness'
    },
    sounds: {
      inhale: '/audio/breathing/inhale-soft.mp3',
      hold: '/audio/breathing/hold-soft.mp3',
      exhale: '/audio/breathing/exhale-soft.mp3'
    },
    backgroundMusic: '/audio/breathing/ocean-waves.mp3'
  },
  {
    id: 'energizing-breath',
    name: 'Energizing Breath',
    description: 'Quick energizing technique',
    color: 'from-yellow-400 to-orange-500',
    inhale: 2,
    exhale: 2,
    icon: '⚡',
    benefits: [
      'Increases energy',
      'Improves alertness',
      'Enhances focus',
      'Boosts metabolism'
    ],
    mindfulnessPrompts: {
      inhale: 'Embrace vibrant energy',
      exhale: 'Awaken your spirit'
    },
    sounds: {
      inhale: '/audio/breathing/inhale-quick.mp3',
      exhale: '/audio/breathing/exhale-quick.mp3'
    },
    backgroundMusic: '/audio/breathing/chimes.mp3'
  }
] 