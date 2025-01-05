'use client'

import { motion } from 'framer-motion'
import SafeImage from '../../../components/ui/SafeImage'

type Formula = {
    type: 'formula'
    text: string
}

type Zone = {
    type: 'zone'
    name: string
    effort: string
    benefits: string
    color: string
}

type ContentItem = string | Formula | Zone

type Section = {
    type: 'section'
    title: string
    content: ContentItem[]
} | {
    type: 'introduction' | 'conclusion'
    text: string
}

const article: {
    id: number
    title: string
    image: string
    description: string
    content: Section[]
} = {
    id: 1,
    title: 'Understanding Heart Rate Zones: Optimize Your Workouts',
    image: '/images/articles/heart-rate-zones.jpg',
    description: 'Learn how to use heart rate zones to optimize your workouts and achieve your fitness goals more effectively.',
    content: [
        {
            type: 'introduction',
            text: 'Heart rate zones are a powerful tool to enhance your fitness routine. By understanding these zones, you can tailor your workouts to achieve specific goals, like burning fat, building endurance, or increasing athletic performance.'
        },
        {
            type: 'section',
            title: 'What Are Heart Rate Zones?',
            content: [
                "Heart rate zones are ranges of beats per minute (BPM) that indicate exercise intensity. They're based on your maximum heart rate (MHR), estimated as:",
                {
                    type: 'formula',
                    text: 'MHR = 220 - your age'
                },
                'These zones range from light activity to maximum effort, each offering unique benefits for your body.'
            ]
        },
        {
            type: 'section',
            title: 'The Five Heart Rate Zones',
            content: [
                {
                    type: 'zone',
                    name: 'Zone 1: Light Activity (50–60% MHR)',
                    effort: 'Easy, like walking',
                    benefits: 'Improves recovery, circulation, and reduces stress',
                    color: 'bg-blue-100'
                },
                {
                    type: 'zone',
                    name: 'Zone 2: Fat Burn (60–70% MHR)',
                    effort: 'Moderate, like brisk walking or cycling',
                    benefits: 'Best for fat burning and building endurance',
                    color: 'bg-green-100'
                },
                {
                    type: 'zone',
                    name: 'Zone 3: Aerobic Training (70–80% MHR)',
                    effort: 'Steady and slightly challenging',
                    benefits: 'Enhances cardiovascular fitness and stamina',
                    color: 'bg-yellow-100'
                },
                {
                    type: 'zone',
                    name: 'Zone 4: High Intensity (80–90% MHR)',
                    effort: 'Hard; talking becomes difficult',
                    benefits: 'Boosts speed, power, and calorie burn',
                    color: 'bg-orange-100'
                },
                {
                    type: 'zone',
                    name: 'Zone 5: Maximum Effort (90–100% MHR)',
                    effort: 'Maximum exertion, like sprinting',
                    benefits: 'Improves peak performance and mental toughness',
                    color: 'bg-red-100'
                }
            ]
        },
        {
            type: 'section',
            title: 'Why Use Heart Rate Zones?',
            content: [
                'Optimize Workouts: Focus on the zone that matches your goal—fat loss, endurance, or performance.',
                'Prevent Overtraining: Monitor intensity to avoid burnout.',
                'Track Progress: Use heart rate data to measure improvements over time.'
            ]
        },
        {
            type: 'section',
            title: 'How to Monitor Your Heart Rate',
            content: [
                'Wearable Tech: Use a smartwatch or chest strap for accurate readings.',
                'Manual Check: Count beats for 15 seconds and multiply by four.',
                'Apps: Many fitness apps sync with heart rate monitors to analyze data.'
            ]
        },
        {
            type: 'section',
            title: 'Tips for Effective Heart Rate Training',
            content: [
                'Warm up in Zone 1 before moving into higher zones.',
                'Spend 30–60 minutes in Zone 2 for fat burning.',
                'Incorporate Zone 4 and 5 intervals to build speed and strength.'
            ]
        },
        {
            type: 'conclusion',
            text: 'By incorporating heart rate zones into your workouts, you can train smarter, achieve your fitness goals faster, and make every session count. Start tracking your heart rate today and take control of your fitness journey!'
        }
    ]
}

export default function ArticlePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <article className="max-w-4xl mx-auto">
                <div className="mb-12">
                    {/* 文章标题 */}
                    <div className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {article.title}
                        </motion.h1>
                    </div>

                    {/* 文章描述 */}
                    <div className="text-lg text-gray-600 mb-8 text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {article.description}
                        </motion.p>
                    </div>
                </div>

                {/* 文章内容 */}
                <div className="prose prose-lg max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* 内容保持不变 */}
                    </motion.div>
                </div>
            </article>
        </div>
    )
} 