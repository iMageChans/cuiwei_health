import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function ExerciseAndHeartHealth() {
  const article = {
    id: 'exercise',
    category: 'Lifestyle',
    categoryColor: 'green',
    title: 'Exercise & Heart Rate',
    description: 'How exercise affects your heart rate and cardiovascular health',
    readTime: '7 min read',
    lastUpdated: 'March 15, 2024',
    views: '1.5K',
    author: {
      name: 'Michael Brown',
      title: 'Sports Medicine Specialist',
      image: '/images/authors/author2.jpg'
    },
    coverImage: '/images/articles/exercise.jpg',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'heart-response', title: 'Heart Rate Response to Exercise' },
      { id: 'training-zones', title: 'Training Heart Rate Zones' },
      { id: 'benefits', title: 'Benefits of Exercise' },
      { id: 'guidelines', title: 'Exercise Guidelines' },
      { id: 'monitoring', title: 'Heart Rate Monitoring' }
    ],
    relatedArticles: [
      {
        href: '/knowledge/basics/heart-rate-101',
        title: 'Heart Rate 101',
        description: 'Learn the basics of heart rate and why it matters'
      },
      {
        href: '/knowledge/lifestyle/sleep',
        title: 'Sleep & Heart Rate',
        description: 'Understanding the relationship between sleep and heart rate'
      }
    ]
  }

  return (
    <ArticleLayout {...article}>
      <div className="prose prose-lg max-w-none">
        <div id="introduction" className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Exercise is one of the most effective ways to improve your cardiovascular health. Understanding how your heart responds to different types of exercise can help you optimize your workouts and achieve better results.
          </p>
        </div>

        <div id="heart-response" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Your Heart Responds to Exercise
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">During Exercise</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Heart rate increases to deliver more oxygen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Blood flow to muscles increases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Stroke volume improves</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">After Exercise</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Heart rate gradually returns to normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Recovery rate indicates fitness level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Body adapts to training stimulus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="training-zones" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Training Heart Rate Zones
          </h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-4 md:p-6 rounded-xl">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Zone 1: Recovery</h3>
                  <p className="text-sm text-gray-600">50-60% of max HR</p>
                  <p className="text-sm text-gray-600">Perfect for warm-up and recovery</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Zone 2: Aerobic</h3>
                  <p className="text-sm text-gray-600">60-70% of max HR</p>
                  <p className="text-sm text-gray-600">Builds endurance and burns fat</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Zone 3: Anaerobic</h3>
                  <p className="text-sm text-gray-600">70-85% of max HR</p>
                  <p className="text-sm text-gray-600">Improves performance and speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="benefits" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Benefits of Regular Exercise
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Heart Health</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Lower resting heart rate</li>
                <li>• Improved blood pressure</li>
                <li>• Stronger heart muscle</li>
                <li>• Better circulation</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Overall Health</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Weight management</li>
                <li>• Better sleep quality</li>
                <li>• Reduced stress</li>
                <li>• Increased energy</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Mental Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Improved mood</li>
                <li>• Better concentration</li>
                <li>• Reduced anxiety</li>
                <li>• Enhanced well-being</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="guidelines" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Exercise Guidelines
          </h2>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
            <div className="space-y-4">
              <p className="text-gray-600">Recommended weekly activity for adults:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Moderate Activity</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 150 minutes per week</li>
                    <li>• Brisk walking</li>
                    <li>• Swimming</li>
                    <li>• Cycling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vigorous Activity</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 75 minutes per week</li>
                    <li>• Running</li>
                    <li>• HIIT workouts</li>
                    <li>• Sports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="monitoring" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Heart Rate Monitoring During Exercise
          </h2>
          <div className="bg-green-50 p-4 md:p-6 rounded-xl space-y-4">
            <p className="text-gray-800">Tips for effective monitoring:</p>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Use a reliable heart rate monitor</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Track your heart rate zones</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Monitor recovery time</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Keep a workout log</span>
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
                Track Your Workouts with Impulse
              </h3>
              <p className="text-gray-600">
                Download our app to monitor your heart rate during exercise and optimize your training
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
} 