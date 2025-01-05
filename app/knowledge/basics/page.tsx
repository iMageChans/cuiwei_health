import Link from 'next/link'

export default function HeartRateBasics() {
  const topics = [
    {
      id: 'heart-rate-101',
      title: 'Heart Rate Basics',
      description: 'Understanding the fundamentals of heart rate',
      href: '/knowledge/basics/heart-rate-101'
    },
    {
      id: 'resting-heart-rate',
      title: 'Resting Heart Rate',
      description: 'Learn about your resting heart rate',
      href: '/knowledge/basics/resting-heart-rate'
    },
    {
      id: 'heart-rate-zones',
      title: 'Heart Rate Zones',
      description: 'Understanding different heart rate zones',
      href: '/knowledge/basics/heart-rate-zones'
    },
    {
      id: 'normal-ranges',
      title: 'Normal Heart Rate Ranges',
      description: 'What&apos;s normal for different ages and activities',
      href: '/knowledge/basics/normal-ranges'
    }
  ]

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Heart Rate Basics
            </h1>
            <div className="prose prose-lg max-w-none">
              <p>
                Let&apos;s explore how understanding your heart rate can help improve your health.
              </p>
              <p>
                Your heart rate isn&apos;t just a number - it&apos;s a vital sign that can tell you a lot about your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map(topic => (
                <Link 
                  key={topic.id}
                  href={topic.href}
                  className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md 
                           transition-shadow duration-300 border border-gray-100"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {topic.title}
                  </h2>
                  <p className="text-gray-600">
                    {topic.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 