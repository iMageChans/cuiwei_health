import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function StressAndHeart() {
    const article = {
        id: 'stress-heart',
        category: 'Health',
        categoryColor: 'blue',
        title: 'Stress & Your Heart',
        description: 'Understanding how stress impacts your heart rate and overall health',
        readTime: '8 min read',
        lastUpdated: 'March 15, 2024',
        views: '5.1K',
        author: {
            name: 'Dr. Rachel Kim',
            title: 'Cardiologist & Stress Management Expert',
            image: '/images/authors/author7.jpg'
        },
        coverImage: '/images/articles/stress.jpg',
        tableOfContents: [
            { id: 'introduction', title: 'Understanding Stress' },
            { id: 'impact', title: 'Impact on Heart' },
            { id: 'symptoms', title: 'Warning Signs' },
            { id: 'management', title: 'Management Strategies' }
        ],
        relatedArticles: [
            {
                href: '/knowledge/health/meditation-benefits',
                title: 'Meditation Benefits',
                description: 'How meditation helps manage stress'
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
                        Understanding the relationship between stress and heart health is crucial for maintaining overall well-being. Chronic stress can significantly impact your heart rate, blood pressure, and cardiovascular health. In today's fast-paced world, stress has become a common health concern that directly affects our heart's functioning.
                    </p>

                    {/* 添加统计数据 */}
                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">77%</span>
                            <span className="text-sm text-blue-800">of people experience stress that affects their physical health</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">48%</span>
                            <span className="text-sm text-blue-800">report increased heart rate due to stress</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">33%</span>
                            <span className="text-sm text-blue-800">have stress-related cardiovascular symptoms</span>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Takeaways</h3>
                        <ul className="space-y-2 text-blue-800">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Stress directly affects heart rate and rhythm</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Chronic stress can lead to long-term heart problems</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Early recognition of stress symptoms is vital</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Impact Section */}
                <div id="impact" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        How Stress Impacts Your Heart
                    </h2>

                    {/* 添加解释性内容 */}
                    <p className="mb-6 text-gray-600">
                        When you experience stress, your body releases stress hormones like cortisol and adrenaline. These hormones trigger your body's "fight or flight" response, which can have both immediate and long-term effects on your cardiovascular system.
                    </p>

                    {/* 添加图表说明 */}
                    <div className="bg-gray-50 p-6 rounded-xl mb-8">
                        <h3 className="font-semibold text-gray-900 mb-4">The Stress Response Cycle</h3>
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">1</span>
                                    <span>Stressor triggers the sympathetic nervous system</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">2</span>
                                    <span>Release of stress hormones (cortisol, adrenaline)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">3</span>
                                    <span>Increased heart rate and blood pressure</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">4</span>
                                    <span>Body prepares for "fight or flight" response</span>
                                </div>
                            </div>
                            <div className="relative w-64 h-64">
                                <Image
                                    src="/images/stress-cycle.svg"
                                    alt="Stress Response Cycle"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Short-term Effects</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Increased heart rate</span>
                                        <p className="text-sm">Heart beats faster to pump more oxygen-rich blood</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <div>
                                        <span className="font-medium">Elevated blood pressure</span>
                                        <p className="text-sm">Blood vessels constrict, increasing pressure</p>
                                    </div>
                                </li>
                                <li>• Heart rhythm changes</li>
                                <li>• Chest tightness</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Long-term Effects</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Increased risk of heart disease</li>
                                <li>• Chronic high blood pressure</li>
                                <li>• Irregular heart rhythms</li>
                                <li>• Weakened immune system</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Warning Signs Section */}
                <div id="symptoms" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Recognizing Stress-Related Heart Symptoms
                    </h2>

                    {/* 添加症状检查器 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100 mb-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Symptom Checker</h3>
                        <p className="text-gray-600 mb-4">
                            Use this checklist to assess your stress-related symptoms. If you experience multiple symptoms, consider consulting a healthcare provider.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* 添加可交互的症状检查表 */}
                            {/* 这里可以添加客户端交互组件 */}
                        </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl space-y-6">
                        <p className="font-medium text-red-900">Watch for these warning signs:</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Physical Signs</h3>
                                <ul className="space-y-2 text-gray-800">
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        <span>Rapid or irregular heartbeat</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        <span>Chest pain or discomfort</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        <span>Shortness of breath</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Emotional Signs</h3>
                                <ul className="space-y-2 text-gray-800">
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        <span>Anxiety or panic attacks</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        <span>Irritability</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        <span>Sleep disturbances</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Management Section */}
                <div id="management" className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Stress Management Strategies
                    </h2>

                    {/* 添加每日实践建议 */}
                    <div className="bg-green-50 p-6 rounded-xl mb-8">
                        <h3 className="font-semibold text-gray-900 mb-4">Daily Stress Management Plan</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Morning Routine</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• 5-minute deep breathing exercise</li>
                                    <li>• Light stretching or yoga</li>
                                    <li>• Healthy breakfast</li>
                                    <li>• Plan your day with breaks</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Evening Routine</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• 15-minute walk</li>
                                    <li>• Relaxation techniques</li>
                                    <li>• Digital device cutoff</li>
                                    <li>• Regular sleep schedule</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Lifestyle Changes</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Regular exercise</li>
                                <li>• Healthy diet</li>
                                <li>• Adequate sleep</li>
                                <li>• Work-life balance</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Relaxation Techniques</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Deep breathing</li>
                                <li>• Meditation</li>
                                <li>• Yoga</li>
                                <li>• Progressive relaxation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Professional Help</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Stress counseling</li>
                                <li>• Regular check-ups</li>
                                <li>• Support groups</li>
                                <li>• Stress workshops</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 添加专家建议部分 */}
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
                                "Regular monitoring of your heart rate and stress levels can help you identify patterns and take proactive steps to manage your cardiovascular health. The key is to develop sustainable stress management habits that work for your lifestyle."
                            </p>
                            <footer className="text-sm text-gray-500">
                                - {article.author.name}, {article.author.title}
                            </footer>
                        </blockquote>
                    </div>
                </div>

                {/* Monitor Your Heart Health CTA */}
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
                                Monitor Your Heart Health with Impulse
                            </h3>
                            <p className="text-gray-600">
                                Download our app to track your heart rate, monitor stress levels, and receive personalized insights for better heart health management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ArticleLayout>
    )
} 