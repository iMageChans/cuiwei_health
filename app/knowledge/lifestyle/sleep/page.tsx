import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function SleepAndHeartRate() {
  const article = {
    id: 'sleep',
    category: 'Lifestyle',
    categoryColor: 'green',
    title: 'Sleep & Heart Rate',
    description: 'Understanding the relationship between sleep and heart rate',
    readTime: '5 min read',
    lastUpdated: 'March 15, 2024',
    views: '2.1K',
    author: {
      name: 'Dr. Emma Wilson',
      title: 'Sleep Medicine Specialist',
      image: '/images/authors/author5.jpg'
    },
    coverImage: '/images/articles/sleep.jpg',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'sleep-cycles', title: 'Sleep Cycles & Heart Rate' },
      { id: 'factors', title: 'Factors Affecting Sleep' },
      { id: 'benefits', title: 'Benefits of Good Sleep' },
      { id: 'tips', title: 'Sleep Improvement Tips' },
      { id: 'monitoring', title: 'Sleep Monitoring' }
    ],
    relatedArticles: [
      {
        href: '/knowledge/lifestyle/exercise',
        title: 'Exercise & Heart Rate',
        description: 'How exercise affects your heart rate'
      },
      {
        href: '/knowledge/lifestyle/nutrition',
        title: 'Nutrition & Heart Rate',
        description: 'How diet affects your heart rate and overall heart health'
      }
    ]
  }

  return (
    <ArticleLayout {...article}>
      <div className="prose prose-lg max-w-none">
        <div id="introduction" className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Quality sleep is essential for heart health. During sleep, your heart rate naturally varies, and understanding these patterns can provide valuable insights into your overall health.
          </p>
        </div>

        <div id="sleep-cycles" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sleep Cycles and Heart Rate
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Light Sleep</h3>
              <p className="text-gray-600">
                Heart rate slightly decreases. Body prepares for deeper sleep stages.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Deep Sleep</h3>
              <p className="text-gray-600">
                Heart rate reaches its lowest point. Body focuses on repair and recovery.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">REM Sleep</h3>
              <p className="text-gray-600">
                Heart rate may fluctuate. Brain is active but body remains at rest.
              </p>
            </div>
          </div>
        </div>

        <div id="factors" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Factors Affecting Sleep Quality
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Environmental Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Room temperature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Light exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Noise levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Bed comfort</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Lifestyle Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Exercise timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Caffeine intake</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Screen time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Meal timing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="benefits" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Benefits of Quality Sleep
          </h2>
          <div className="bg-green-50 p-4 md:p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Physical Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Improved heart health</li>
                  <li>• Better immune function</li>
                  <li>• Enhanced recovery</li>
                  <li>• Weight management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Mental Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Better concentration</li>
                  <li>• Improved mood</li>
                  <li>• Reduced stress</li>
                  <li>• Enhanced memory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="tips" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sleep Improvement Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Schedule</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consistent bedtime</li>
                <li>• Regular wake time</li>
                <li>• Avoid long naps</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Environment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dark room</li>
                <li>• Cool temperature</li>
                <li>• Quiet space</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Habits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Limit screen time</li>
                <li>• Evening routine</li>
                <li>• Relaxation practices</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="monitoring" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sleep Monitoring
          </h2>
          <div className="bg-green-50 p-4 md:p-6 rounded-xl space-y-4">
            <p className="text-gray-800">Track these metrics for better sleep insights:</p>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Sleep duration and quality</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Resting heart rate trends</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Heart rate variability</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Sleep cycle patterns</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-4 md:p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/qr-code.png"
                alt="Download QR Code"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Track Your Sleep with Impulse
              </h3>
              <p className="text-gray-600">
                Download our app to monitor your sleep quality and optimize your rest
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}