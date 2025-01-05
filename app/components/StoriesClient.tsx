'use client'

import StoryCard from './StoryCard'
import StoryHeroSlider from './StoryHeroSlider'
import { motion } from 'framer-motion'

// Enhanced story data
const stories = [
    {
        id: 1,
        image: '/stories/story-1.png',
        name: "Sophie's Journey",
        title: "Stress Management Success",
        description: "From constant anxiety to finding peace through mindful heart rate monitoring.",
        quote: "I never knew I could feel this balanced and energized!",
        date: "March 2024"
    },
    {
        id: 2,
        image: '/stories/story-2.png',
        name: "David's Transformation",
        title: "From Burnout to Balance",
        description: "A tech executive's story of recovering from burnout using heart-mind connection.",
        quote: "This approach changed my entire perspective on work-life balance.",
        date: "February 2024"
    },
    {
        id: 3,
        image: '/stories/story-3.png',
        name: "Maria's Discovery",
        title: "Finding Inner Peace",
        description: "A journey from chronic stress to mindful living through heart rate awareness.",
        quote: "Meditation became my daily companion in finding clarity.",
        date: "January 2024"
    }
]

export default function StoriesClient() {
    return (
        <main className="min-h-screen pt-20">
            <StoryHeroSlider />

            {/* Hero Section */}
            <div className="bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Voices that Inspire
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
                            Discover inspiring stories from around the world. See how others have transformed their lives
                            through heart rate awareness and mindful living.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Stories Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                        >
                            <StoryCard {...story} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
} 