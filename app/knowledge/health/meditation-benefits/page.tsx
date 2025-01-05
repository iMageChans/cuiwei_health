import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function MeditationBenefits() {
    const article = {
        id: 'meditation-benefits',
        category: 'Health',
        categoryColor: 'blue',
        title: 'Meditation Benefits',
        description: 'Discover the numerous benefits of meditation for stress management and overall well-being',
        readTime: '8 min read',
        lastUpdated: 'March 15, 2024',
        views: '4.2K',
        author: {
            name: 'Dr. Emily White',
            title: 'Clinical Psychologist',
            image: '/images/authors/author9.jpg'
        },
        coverImage: '/images/articles/meditation.jpg',
        tableOfContents: [
            { id: 'introduction', title: 'Meditation and Stress' },
            { id: 'benefits', title: 'Benefits of Meditation' },
            { id: 'techniques', title: 'Meditation Techniques' },
            { id: 'getting-started', title: 'Getting Started' }
        ],
        relatedArticles: [
            {
                href: '/knowledge/health/stress-heart',
                title: 'Stress & Your Heart',
                description: 'Understanding stress impact on heart'
            },
            {
                href: '/knowledge/health/exercise-stress',
                title: 'Exercise for Stress',
                description: 'Managing stress through exercise'
            }
        ]
    }

    return (
        <ArticleLayout {...article}>
            <div className="prose prose-lg max-w-none">
                {/* Introduction Section */}
                <div id="introduction" className="space-y-4">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Meditation is a powerful practice that has been used for thousands of years to reduce stress, increase clarity, and promote overall well-being. In today's fast-paced world, the benefits of meditation are more relevant than ever for managing stress and improving heart health.
                    </p>

                    {/* 统计数据 */}
                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">68%</span>
                            <span className="text-sm text-blue-800">of regular meditators report reduced anxiety levels</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">45%</span>
                            <span className="text-sm text-blue-800">improvement in sleep quality</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">32%</span>
                            <span className="text-sm text-blue-800">reduction in stress-related symptoms</span>
                        </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Benefits</h3>
                        <ul className="space-y-2 text-blue-800">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Reduces stress and anxiety</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Improves emotional well-being</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Enhances focus and clarity</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Benefits Section */}
                <div id="benefits" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        The Science Behind Meditation
                    </h2>

                    <p className="mb-6 text-gray-600">
                        Scientific research has shown that regular meditation practice can lead to significant changes in both the brain and body, particularly in areas related to stress management and emotional regulation.
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Physical Benefits</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Lower blood pressure</span>
                                        <p className="text-sm text-gray-600">Helps reduce strain on your cardiovascular system</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Reduced cortisol levels</span>
                                        <p className="text-sm text-gray-600">Decreases stress hormone production</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Improved sleep quality</span>
                                        <p className="text-sm text-gray-600">Helps regulate sleep patterns</p>
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
                                        <span className="font-medium">Enhanced focus</span>
                                        <p className="text-sm text-gray-600">Improves concentration and attention span</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Emotional regulation</span>
                                        <p className="text-sm text-gray-600">Better control over emotional responses</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Stress resilience</span>
                                        <p className="text-sm text-gray-600">Builds capacity to handle stressful situations</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Techniques Section */}
                <div id="techniques" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Meditation Techniques
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Mindful Breathing</h3>
                            <p className="text-gray-600 mb-4">Focus on your breath to anchor yourself in the present moment.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Start with 5 minutes</li>
                                <li>• Find a quiet space</li>
                                <li>• Focus on breath</li>
                                <li>• Notice thoughts without judgment</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Body Scan</h3>
                            <p className="text-gray-600 mb-4">Systematically focus attention on different parts of your body.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Lie down comfortably</li>
                                <li>• Start from toes</li>
                                <li>• Move up gradually</li>
                                <li>• Release tension</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Loving-Kindness</h3>
                            <p className="text-gray-600 mb-4">Cultivate compassion for yourself and others.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Focus on positive wishes</li>
                                <li>• Start with self</li>
                                <li>• Extend to others</li>
                                <li>• Embrace compassion</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Getting Started Section */}
                <div id="getting-started" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Getting Started with Meditation
                    </h2>

                    <div className="bg-green-50 p-6 rounded-xl mb-8">
                        <h3 className="font-semibold text-gray-900 mb-4">Beginner's Guide</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">First Steps</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Start with 5 minutes daily</li>
                                    <li>• Choose a quiet time</li>
                                    <li>• Find a comfortable position</li>
                                    <li>• Use guided meditations</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Common Challenges</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Mind wandering</li>
                                    <li>• Finding time</li>
                                    <li>• Staying consistent</li>
                                    <li>• Managing expectations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expert Insights */}
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
                                "Meditation is not about stopping thoughts, but learning to observe them without judgment. Regular practice can lead to profound changes in how we handle stress and emotions."
                            </p>
                            <footer className="text-sm text-gray-500">
                                - {article.author.name}, {article.author.title}
                            </footer>
                        </blockquote>
                    </div>
                </div>

                {/* App CTA */}
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
                                Start Your Meditation Journey with Impulse
                            </h3>
                            <p className="text-gray-600">
                                Download our app to access guided meditations, track your practice, and monitor the positive impacts on your heart health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ArticleLayout>
    )
}