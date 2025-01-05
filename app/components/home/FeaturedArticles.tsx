'use client'

import SafeImage from '../ui/SafeImage'
import Link from 'next/link'

const articles = [
  {
    title: 'Understanding Heart Rate',
    description: 'Learn the basics of heart rate and what it means for your health.',
    href: '/knowledge/basics/heart-rate-101',
    image: '/images/articles/article1.png'
  },
  {
    title: 'Exercise & Heart Health',
    description: 'Discover how exercise affects your heart rate and overall health.',
    href: '/knowledge/lifestyle/exercise',
    image: '/images/articles/article2.png'
  },
  {
    title: 'Stress Management',
    description: 'Learn how to manage stress and improve your heart health.',
    href: '/knowledge/health/exercise-stress',
    image: '/images/articles/article3.png'
  }
]

export default function FeaturedArticles() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Learn About Heart Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <SafeImage
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 