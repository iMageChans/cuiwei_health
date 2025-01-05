'use client'

import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function ExerciseAndStress() {
    const article = {
        id: 'exercise-stress',
        category: 'Health',
        categoryColor: 'blue',
        title: 'Exercise for Stress Management',
        description: 'Learn how exercise can help manage stress and improve heart health',
        readTime: '7 min read',
        lastUpdated: 'March 15, 2024',
        views: '3.4K',
        author: {
            name: 'Dr. Vicky Green',
            title: 'Exercise Physiologist',
            image: '/images/authors/author8.jpg'
        },
        coverImage: '/images/articles/hrv-explained.jpg',
        tableOfContents: [
            { id: 'introduction', title: 'Exercise and Stress' },
            { id: 'benefits', title: 'Benefits of Exercise' },
            { id: 'techniques', title: 'Exercise Techniques' },
            { id: 'getting-started', title: 'Getting Started' }
        ],
        relatedArticles: [
            {
                href: '/knowledge/health/stress-heart',
                title: 'Stress & Your Heart',
                description: 'Understanding stress impact on heart'
            },
            {
                href: '/knowledge/health/meditation-benefits',
                title: 'Meditation Benefits',
                description: 'How meditation helps manage stress'
            }
        ]
    }

    return (
        <ArticleLayout {...article}>
            <div className="prose prose-lg max-w-none">
                <div id="introduction" className="space-y-4">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Exercise is one of the most effective natural stress relievers. When you exercise, your body releases endorphins, which are natural mood lifters, and helps regulate stress hormones like cortisol and adrenaline.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">83%</span>
                            <span className="text-sm text-blue-800">of regular exercisers report better stress management</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">62%</span>
                            <span className="text-sm text-blue-800">reduction in stress-related symptoms</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">30min</span>
                            <span className="text-sm text-blue-800">daily exercise for optimal stress relief</span>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Benefits</h3>
                        <ul className="space-y-2 text-blue-800">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Natural stress hormone regulation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Improved mood and energy levels</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Better sleep quality</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="benefits" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        How Exercise Reduces Stress
                    </h2>

                    <p className="mb-6 text-gray-600">
                        Regular physical activity creates a powerful stress-management system in your body, affecting both your physical and mental well-being.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Physical Impact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Reduces stress hormones</span>
                                        <p className="text-sm text-gray-600">Lowers cortisol and adrenaline levels</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Releases endorphins</span>
                                        <p className="text-sm text-gray-600">Natural mood elevators and pain relievers</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Improves sleep</span>
                                        <p className="text-sm text-gray-600">Enhances sleep quality and duration</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Mental Benefits</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Boosts confidence</span>
                                        <p className="text-sm text-gray-600">Increases self-esteem and body image</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Improves focus</span>
                                        <p className="text-sm text-gray-600">Enhances mental clarity and concentration</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Social interaction</span>
                                        <p className="text-sm text-gray-600">Group activities provide social support</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="techniques" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Stress-Reducing Exercise Techniques
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Cardio Exercises</h3>
                            <p className="text-gray-600 mb-4">Boost endorphins and improve cardiovascular health.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Brisk walking</li>
                                <li>• Jogging</li>
                                <li>• Swimming</li>
                                <li>• Cycling</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Mind-Body Exercises</h3>
                            <p className="text-gray-600 mb-4">Combine physical activity with mental focus.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Yoga</li>
                                <li>• Tai Chi</li>
                                <li>• Pilates</li>
                                <li>• Stretching</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Strength Training</h3>
                            <p className="text-gray-600 mb-4">Build resilience and boost confidence.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Bodyweight exercises</li>
                                <li>• Resistance bands</li>
                                <li>• Weight training</li>
                                <li>• Circuit training</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="getting-started" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Getting Started with Exercise
                    </h2>

                    <div className="bg-green-50 p-6 rounded-xl mb-8">
                        <h3 className="font-semibold text-gray-900 mb-4">Beginner's Guide</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Starting Tips</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Start slowly and build up</li>
                                    <li>• Choose activities you enjoy</li>
                                    <li>• Set realistic goals</li>
                                    <li>• Track your progress</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Safety Guidelines</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Warm up properly</li>
                                    <li>• Stay hydrated</li>
                                    <li>• Listen to your body</li>
                                    <li>• Cool down after exercise</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Insights</h3>
                    <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={article.author.image}
                                alt={article.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <blockquote className="flex-1">
                            <p className="text-gray-600 italic mb-2">
                                "Regular exercise is one of the most effective ways to manage stress. It's not just about physical fitness – it's about creating a stronger, more resilient mind-body connection."
                            </p>
                            <footer className="text-sm text-gray-500">
                                - {article.author.name}, {article.author.title}
                            </footer>
                        </blockquote>
                    </div>
                </div>

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
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Track Your Exercise Journey with Impulse
                            </h3>
                            <p className="text-gray-600">
                                Download our app to monitor your workouts, track your progress, and see how exercise improves your heart health and stress levels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ArticleLayout>
    )
} 