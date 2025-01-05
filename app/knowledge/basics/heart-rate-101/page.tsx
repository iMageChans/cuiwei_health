import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function HeartRate101() {
  const article = {
    id: 'heart-rate-101',
    category: 'Basics',
    categoryColor: 'red',
    title: 'Heart Rate 101',
    description: 'Understanding the fundamentals of heart rate monitoring',
    readTime: '5 min read',
    lastUpdated: 'March 15, 2024',
    views: '1.2K',
    author: {
      name: 'Dr. Sarah Harris',
      title: 'Cardiologist & Health Tech Advisor',
      image: '/images/authors/author1.jpg'
    },
    coverImage: '/images/articles/article1.png',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'what-is-heart-rate', title: 'What is Heart Rate?' },
      { id: 'factors', title: 'Factors Affecting Heart Rate' },
      { id: 'measurement', title: 'Measurement Methods' },
      { id: 'zones', title: 'Heart Rate Zones' },
      { id: 'monitoring', title: 'Benefits of Monitoring' },
      { id: 'when-to-contact', title: 'When to Contact a Doctor' }
    ],
    relatedArticles: [
      {
        href: '/knowledge/basics/high-heart-rate',
        title: 'High Heart Rate',
        description: 'Understanding and managing elevated heart rate'
      },
      {
        href: '/knowledge/basics/normal-ranges',
        title: 'Normal Heart Rate Ranges',
        description: 'Learn what heart rate ranges are normal for different ages and activities'
      }
    ]
  }

  return (
    <ArticleLayout {...article}>
      <div className="space-y-12">
        <div id="introduction" className="space-y-6">
          <p className="text-xl text-gray-600 leading-relaxed">
            Your heart rate is one of the most important vital signs that can tell you about your health and fitness level. Understanding and monitoring your heart rate can help you optimize your workouts, manage stress, and identify potential health concerns early.
          </p>
        </div>

        <div id="what-is-heart-rate" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">What is Heart Rate?</h2>
          <p>
            Heart rate, or pulse, refers to the number of times your heart beats per minute (bpm). Each beat represents one complete cardiac cycle, where your heart contracts and relaxes to pump blood throughout your body.
          </p>
          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-red-900 mb-4">Key Terms to Know</h3>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-red-700">Resting Heart Rate (RHR)</dt>
                <dd className="text-gray-600">Your heart rate when you're completely at rest, typically measured first thing in the morning. Normal range: 60-100 bpm</dd>
              </div>
              <div>
                <dt className="font-medium text-red-700">Maximum Heart Rate (MHR)</dt>
                <dd className="text-gray-600">The highest your heart rate can safely go during exercise. Estimated as 220 minus your age</dd>
              </div>
              <div>
                <dt className="font-medium text-red-700">Heart Rate Reserve (HRR)</dt>
                <dd className="text-gray-600">The difference between your maximum and resting heart rates, used to calculate training zones</dd>
              </div>
            </dl>
          </div>
        </div>

        <div id="factors" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Factors Affecting Heart Rate</h2>
          <p>Several factors can influence your heart rate:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Physical Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Age and gender</li>
                <li>• Physical fitness level</li>
                <li>• Body position</li>
                <li>• Air temperature and humidity</li>
                <li>• Body temperature</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Lifestyle Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Stress and emotions</li>
                <li>• Sleep quality</li>
                <li>• Caffeine and alcohol</li>
                <li>• Medications</li>
                <li>• Time of day</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="measurement" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-10">How to Measure Your Heart Rate</h2>
          <p>
            There are several reliable methods to measure your heart rate:
          </p>
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Manual Method</h3>
              <p className="text-gray-600 text-sm">Find your pulse on your wrist or neck and count beats for 15 seconds, then multiply by 4</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Heart Rate Monitor</h3>
              <p className="text-gray-600 text-sm">Use a chest strap or wrist-based device for continuous monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Smartphone Apps</h3>
              <p className="text-gray-600 text-sm">Impulse Heart Rate Monitor is available on the App Store. It uses your phone's camera to measure heart rate.</p>
            </div>
          </div>
        </div>

        <div id="zones" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-10">Understanding Heart Rate Zones</h2>
          <div className="space-y-4">
            <p>Your heart rate zones are calculated as a percentage of your maximum heart rate:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span>50-60%: Recovery zone - Perfect for warm-up and cool-down</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>60-70%: Fat burning zone - Ideal for building base fitness and burning fat</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span>70-80%: Aerobic zone - Improves cardiovascular fitness</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span>80-90%: Anaerobic zone - Increases performance speed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>90-100%: Maximum effort - For short intervals only</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="monitoring" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Benefits of Heart Rate Monitoring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Exercise Optimization</h3>
              <p className="text-gray-600">
                Track workout intensity, ensure proper recovery, and achieve optimal training results
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Health Insights</h3>
              <p className="text-gray-600">
                Monitor cardiovascular health, detect anomalies, and track fitness improvements
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Stress Management</h3>
              <p className="text-gray-600">
                Understand stress levels, improve recovery, and maintain better work-life balance
              </p>
            </div>
          </div>
        </div>

        <div id="when-to-contact" className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">When to Contact a Doctor</h2>
          <p className="text-gray-600 mb-4">
            While variations in heart rate are normal, you should consult a healthcare provider if you experience:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Consistently high resting heart rate (above 100 bpm)</li>
            <li>Consistently low resting heart rate (below 60 bpm) with symptoms</li>
            <li>Irregular heartbeats or palpitations</li>
            <li>Chest pain or discomfort</li>
            <li>Dizziness or shortness of breath</li>
          </ul>
        </div>

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
