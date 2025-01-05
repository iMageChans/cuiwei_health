'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  categoryColor: string
  readingTime: string
}

interface ArticleCardProps {
  article: Article
  category: string
}

const articles = {
  basics: [
    {
      id: 'heart-rate-101',
      title: 'Heart Rate 101',
      description: 'Understanding the fundamentals of heart rate monitoring',
      image: '/images/articles/article1.png',
      category: 'Basics',
      categoryColor: 'red',
      readingTime: '5 min read'
    },
    {
      id: 'high-heart-rate',
      title: 'High Heart Rate',
      description: 'Understanding and managing elevated heart rate',
      image: '/images/articles/article2.png',
      category: 'Basics',
      categoryColor: 'red',
      readingTime: '6 min read'
    },
    {
      id: 'normal-ranges',
      title: 'Normal Heart Rate Ranges',
      description: 'Learn what heart rate ranges are normal for different ages and activities',
      image: '/images/articles/article3.png',
      category: 'Basics',
      categoryColor: 'red',
      readingTime: '4 min read'
    }
  ],
  lifestyle: [
    {
      id: 'exercise',
      title: 'Exercise & Heart Rate',
      description: 'How exercise affects your heart rate and cardiovascular health',
      image: '/images/articles/exercise.jpg',
      category: 'Lifestyle',
      categoryColor: 'green',
      readingTime: '7 min read'
    },
    {
      id: 'sleep',
      title: 'Sleep & Heart Rate',
      description: 'Understanding the relationship between sleep and heart rate',
      image: '/images/articles/sleep.jpg',
      category: 'Lifestyle',
      categoryColor: 'green',
      readingTime: '5 min read'
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Heart Rate',
      description: 'How diet affects your heart rate and overall heart health',
      image: '/images/articles/nutrition.jpg',
      category: 'Lifestyle',
      categoryColor: 'green',
      readingTime: '6 min read'
    }
  ],
  health: [
    {
      id: 'stress-heart',
      title: 'Stress & Your Heart',
      description: 'Understanding how stress impacts your heart rate and overall health',
      image: '/images/articles/stress.jpg',
      category: 'Health',
      categoryColor: 'blue',
      readingTime: '8 min read'
    },
    {
      id: 'meditation-benefits',
      title: 'Meditation Benefits',
      description: 'Discover the numerous benefits of meditation for stress management and overall well-being',
      image: '/images/articles/meditation.jpg',
      category: 'Health',
      categoryColor: 'blue',
      readingTime: '8 min read'
    },
    {
      id: 'exercise-stress',
      title: 'Exercise for Stress Management',
      description: 'Learn how exercise can help manage stress and improve heart health',
      image: '/images/articles/hrv-explained.jpg',
      category: 'Health',
      categoryColor: 'blue',
      readingTime: '7 min read'
    }
  ]
}

function ArticleCard({ article, category }: ArticleCardProps) {
  // 预定义颜色映射
  const categoryColorMap = {
    blue: 'bg-blue-50 text-blue-700',
    red: 'bg-red-50 text-red-700',
    green: 'bg-green-50 text-green-700'
  }

  return (
    <Link href={`/knowledge/${category}/${article.id}`} className="group">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-[16/9]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColorMap[article.categoryColor as keyof typeof categoryColorMap]}`}>
              {article.category}
            </span>
            <span className="text-sm text-gray-500">{article.readingTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600">
            {article.description}
          </p>
        </div>
      </article>
    </Link>
  )
}

interface SectionProps {
  title: string
  articles: Article[]
  category: string
}

function Section({ title, articles, category }: SectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} category={category} />
        ))}
      </div>
    </section>
  )
}

export default function Knowledge() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Knowledge Center
            </h1>
            <p className="text-xl text-gray-600">
              Learn about heart rate monitoring and how to improve your cardiovascular health
            </p>
          </div>

          <Section
            title="Heart Rate Basics"
            articles={articles.basics}
            category="basics"
          />

          <Section
            title="Lifestyle & Heart Rate"
            articles={articles.lifestyle}
            category="lifestyle"
          />

          <Section
            title="Health & Wellness"
            articles={articles.health}
            category="health"
          />
        </div>
      </div>
    </main>
  )
} 