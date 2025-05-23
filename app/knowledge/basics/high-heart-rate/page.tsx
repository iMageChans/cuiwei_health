import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export const metadata = {
  title: "High Heart Rate", // 单个文章的内容标题  大概就是这篇文章的主要内容  和page配置的title保持一致即可
  description: "Understanding and managing elevated heart rate", // 单个文章的内容描述 和page配置的description保持一致即可
  keywords: [
    // 这个很重要 文章内所描述的一些 特点 关联网站 等等的一些词汇填入
    "Pulse",
    "Heart rate monitor",
    "Electrocardiogram",
    "Pulse rate",
    "Measure your pulse",
    "Health",
  ],
  openGraph: {
    title: 'High Heart Rate | Impulse',
    description: 'Understanding and managing elevated heart rate',
    url: 'https://heartwellness.app/knowledge/basics/high-heart-rate',
    type: 'website',
    images: [
      {
        url: 'https://heartwellness.app/open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Impulse Heart Rate Monitor',
        type: 'photo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Heart Rate | Impulse',
    description: 'Understanding and managing elevated heart rate',
    site: 'https://heartwellness.app/knowledge/basics/high-heart-rate',
    images: [
      {
        url: 'https://heartwellness.app/open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Impulse Heart Rate Monitor',
        type: 'photo'
      }
    ]
  },
};

export default function HighHeartRate() {
  const article = {
    id: 'high-heart-rate',
    category: 'Basics',
    categoryColor: 'red',
    title: 'High Heart Rate',
    description: 'Understanding and managing elevated heart rate',
    coverImage: '/images/articles/article2.png',
    readTime: '6 min read',
    lastUpdated: 'March 15, 2024',
    views: '856',
    author: {
      name: 'Dr. Nicole Clark',
      title: 'Cardiologist & Health Tech Advisor',
      image: '/images/authors/author3.jpg'
    },
    coverImageAlt: 'High Heart Rate Monitoring',
    coverImageWidth: 1920,
    coverImageHeight: 1080,
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'what-is-high', title: 'What is High Heart Rate?' },
      { id: 'causes', title: 'Common Causes' },
      { id: 'warning-signs', title: 'Warning Signs' },
      { id: 'management', title: 'Management Tips' },
      { id: 'prevention', title: 'Prevention Strategies' }
    ],
    relatedArticles: [
      {
        href: '/knowledge/basics/heart-rate-101',
        title: 'Heart Rate 101',
        description: 'Learn the basics of heart rate and why it matters'
      },
      {
        href: '/knowledge/basics/normal-ranges',
        title: 'Normal Heart Rate Ranges',
        description: 'Understanding normal heart rate ranges for different ages'
      }
    ]
  }

  return (
    <ArticleLayout {...article}>
      <div className="prose prose-lg max-w-none">
        <div id="introduction" className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Let&apos;s explore what constitutes a high heart rate and when you should be concerned.
          </p>
          <p className="text-gray-600">
            When your heart rate is consistently above normal ranges, it&apos;s called &quot;tachycardia.&quot;
          </p>
        </div>

        <div id="what-is-high" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is High Heart Rate?
          </h2>
          <div className="bg-red-50 p-4 md:p-6 rounded-xl mb-6">
            <p className="text-gray-800">
              A heart rate above 100 beats per minute (bpm) at rest is generally considered high. However, this can vary based on several factors.
            </p>
          </div>
        </div>

        <div id="causes" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Common Causes
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Physical Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Physical exertion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Fever or illness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Dehydration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Other Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Stress or anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Certain medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Caffeine or stimulants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="warning-signs" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Warning Signs
          </h2>
          <div className="bg-red-50 p-4 md:p-6 rounded-xl space-y-4">
            <p className="font-medium text-red-900">Watch out for these symptoms:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Rapid or pounding heartbeat</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Dizziness or lightheadedness</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Shortness of breath</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>Chest pain or discomfort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="management" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Management Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Immediate Actions</h3>
              <p className="text-sm text-gray-600">
                Practice deep breathing, stay calm, and sit or lie down if needed.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Lifestyle Changes</h3>
              <p className="text-sm text-gray-600">
                Reduce caffeine, manage stress, and maintain regular exercise.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Regular Monitoring</h3>
              <p className="text-sm text-gray-600">
                Use Impulse to track your heart rate and identify patterns.
              </p>
            </div>
          </div>
        </div>

        <div id="prevention" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prevention Strategies
          </h2>
          <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
            <div className="space-y-4">
              <p className="text-gray-600">
                While some causes of high heart rate aren't preventable, you can reduce your risk by:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Maintaining a healthy weight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Staying well-hydrated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Managing stress levels</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Getting regular exercise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Following a heart-healthy diet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Regular health check-ups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-4 md:p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/qr-code.png"
                alt="Download Impulse App Qr Code"
                loading="lazy"
                title="Download Impulse App Qr Code"
                width={96}
                height={96}
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