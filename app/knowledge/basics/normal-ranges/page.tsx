import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function NormalRanges() {
  const article = {
    id: 'normal-ranges',
    category: 'Basics',
    categoryColor: 'red',
    title: 'Normal Heart Rate Ranges',
    description: 'Learn what heart rate ranges are normal for different ages and activities',
    readTime: '4 min read',
    lastUpdated: 'March 15, 2024',
    views: '943',
    author: {
      name: 'Dr. Janice Allen',
      title: 'Cardiologist & Health Tech Advisor',
      image: '/images/authors/author7.jpg'
    },
    coverImage: '/images/articles/article3.png',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'age-ranges', title: 'Age-Based Normal Ranges' },
      { id: 'activity-levels', title: 'Activity Level Ranges' },
      { id: 'variations', title: 'Normal Variations' },
      { id: 'monitoring', title: 'Monitoring Tips' },
      { id: 'when-to-worry', title: 'When to Worry' }
    ],
    relatedArticles: [
      {
        href: '/knowledge/basics/heart-rate-101',
        title: 'Heart Rate 101',
        description: 'Learn the basics of heart rate and why it matters'
      },
      {
        href: '/knowledge/basics/high-heart-rate',
        title: 'High Heart Rate',
        description: 'Understanding and managing elevated heart rate'
      }
    ]
  }

  return (
    <ArticleLayout {...article}>
      <div className="prose prose-lg max-w-none">
        <div id="introduction" className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Understanding what constitutes a normal heart rate is crucial for monitoring your health. Heart rates can vary significantly based on age, activity level, and other factors.
          </p>
        </div>

        <div id="age-ranges" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Normal Heart Rate Ranges by Age
          </h2>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Children</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Newborns (0-1 month): 100-160 bpm</li>
                    <li>• Infants (1-11 months): 90-150 bpm</li>
                    <li>• Toddlers (1-2 years): 80-140 bpm</li>
                    <li>• Preschoolers (3-5): 80-120 bpm</li>
                    <li>• School-age (6-15): 70-110 bpm</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adults</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Adults (18+): 60-100 bpm</li>
                    <li>• Athletes: 40-60 bpm</li>
                    <li>• Elderly (65+): 60-100 bpm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="activity-levels" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Heart Rate Ranges During Activities
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Resting</h3>
              <p className="text-gray-600">
                60-100 bpm for most adults. Athletes may have lower resting rates due to better cardiovascular fitness.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Light Activity</h3>
              <p className="text-gray-600">
                50-70% of maximum heart rate. Ideal for daily activities and light exercise.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Exercise</h3>
              <p className="text-gray-600">
                70-85% of maximum heart rate. Varies based on exercise intensity and fitness level.
              </p>
            </div>
          </div>
        </div>

        <div id="variations" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Normal Heart Rate Variations
          </h2>
          <div className="bg-red-50 p-4 md:p-6 rounded-xl space-y-4">
            <p className="text-gray-800">Your heart rate naturally varies throughout the day due to:</p>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Time of day (typically lower during sleep)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Body position (higher when standing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Emotions and stress levels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Air temperature and humidity</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="monitoring" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Tips for Accurate Monitoring
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Measure at the same time daily</li>
                <li>• Stay still for accurate readings</li>
                <li>• Use proper technique or reliable devices</li>
                <li>• Record readings for tracking trends</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Common Mistakes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Moving during measurement</li>
                <li>• Measuring after activity</li>
                <li>• Using incorrect technique</li>
                <li>• Ignoring consistent patterns</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="when-to-worry" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            When to Worry About Your Heart Rate
          </h2>
          <div className="bg-red-50 p-4 md:p-6 rounded-xl space-y-4">
            <p className="font-medium text-red-900">Consult a healthcare provider if you notice:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Consistently high resting heart rate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Unexplained low heart rate</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Irregular heart rhythms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Heart rate that doesn't match activity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-4 md:p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
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
                Monitor Your Heart Rate with Impulse
              </h3>
              <p className="text-gray-600">
                Download our app to track your heart rate and receive personalized insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
} 