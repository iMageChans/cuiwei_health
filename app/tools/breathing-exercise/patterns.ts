import { BreathingPattern } from './types'

export const patterns: BreathingPattern[] = [
    {
        id: 'box',
        name: 'Box Breathing',
        description: 'Equal duration for inhale, hold, exhale, and hold. Great for stress relief and focus.',
        icon: '📦',
        color: 'bg-blue-500',
        inhale: 4,
        hold1: 4,
        exhale: 4,
        hold2: 4,
        benefits: [
            'Reduces stress and anxiety',
            'Improves concentration',
            'Helps with emotional regulation',
            'Used by Navy SEALs for performance'
        ],
        mindfulnessPrompts: {
            inhale: 'Breathe in slowly through your nose',
            hold1: 'Hold your breath gently',
            exhale: 'Release your breath through your mouth',
            hold2: 'Rest before the next breath'
        },
        sounds: {
            inhale: '/sounds/inhale.mp3',
            hold: '/sounds/hold.mp3',
            exhale: '/sounds/exhale.mp3'
        }
    },
    {
        id: '4-7-8',
        name: '4-7-8 Breathing',
        description: 'A natural tranquilizer for the nervous system. Helps with sleep and anxiety.',
        icon: '😴',
        color: 'bg-indigo-500',
        inhale: 4,
        hold1: 7,
        exhale: 8,
        benefits: [
            'Promotes better sleep',
            'Reduces anxiety',
            'Helps manage food cravings',
            'Calms the nervous system'
        ],
        mindfulnessPrompts: {
            inhale: 'Inhale quietly through your nose',
            hold1: 'Hold your breath with comfort',
            exhale: 'Exhale completely through your mouth with a whoosh sound'
        },
        sounds: {
            inhale: '/sounds/inhale.mp3',
            hold: '/sounds/hold.mp3',
            exhale: '/sounds/exhale.mp3'
        }
    },
    {
        id: 'relaxing',
        name: 'Relaxing Breath',
        description: 'Long exhales help activate the relaxation response. Perfect for winding down.',
        icon: '🌊',
        color: 'bg-cyan-500',
        inhale: 4,
        exhale: 6,
        benefits: [
            'Triggers relaxation response',
            'Lowers heart rate',
            'Reduces muscle tension',
            'Prepares body for rest'
        ],
        mindfulnessPrompts: {
            inhale: 'Breathe in gently through your nose',
            exhale: 'Let go of tension as you exhale slowly'
        },
        sounds: {
            inhale: '/sounds/inhale.mp3',
            hold: '/sounds/hold.mp3',
            exhale: '/sounds/exhale.mp3'
        }
    }
] 