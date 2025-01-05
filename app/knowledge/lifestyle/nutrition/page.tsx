import ArticleLayout from '../../../components/ArticleLayout'
import Image from 'next/image'

export default function NutritionAndHeartRate() {
  const article = {
    id: 'nutrition',
    category: 'Lifestyle',
    categoryColor: 'green',
    title: 'Nutrition & Heart Rate',
    description: 'How diet affects your heart rate and overall heart health',
    readTime: '6 min read',
    lastUpdated: 'March 15, 2024',
    views: '1.8K',
    author: {
      name: 'Lisa Collins',
      title: 'Clinical Nutritionist',
      image: '/images/authors/author4.jpg'
    },
    coverImage: '/images/articles/nutrition.jpg',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'nutrients', title: 'Key Nutrients' },
      { id: 'foods', title: 'Heart-Healthy Foods' },
      { id: 'timing', title: 'Meal Timing' },
      { id: 'hydration', title: 'Hydration' },
      { id: 'tips', title: 'Practical Tips' }
    ],
    relatedArticles: [
      {
        href: '/knowledge/lifestyle/exercise',
        title: 'Exercise & Heart Rate',
        description: 'How exercise affects your heart rate'
      },
      {
        href: '/knowledge/lifestyle/sleep',
        title: 'Sleep & Heart Rate',
        description: 'Understanding sleep and heart health'
      }
    ]
  }

  return (
    <ArticleLayout {...article}>
      <div className="prose prose-lg max-w-none">
        <div id="introduction" className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Your diet plays a crucial role in heart health and can significantly impact your heart rate. Understanding the relationship between nutrition and heart function can help you make better dietary choices.
          </p>
        </div>

        <div id="nutrients" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Key Nutrients for Heart Health
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Essential Minerals</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Potassium - regulates heart rhythm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Magnesium - supports heart function</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Calcium - helps muscle contraction</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Vitamins</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Vitamin B - energy production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Vitamin D - heart muscle strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Omega-3 - reduces inflammation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="foods" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Heart-Healthy Foods
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Fruits & Vegetables</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Leafy greens</li>
                <li>• Berries</li>
                <li>• Citrus fruits</li>
                <li>• Avocados</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Proteins</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fatty fish</li>
                <li>• Lean poultry</li>
                <li>• Legumes</li>
                <li>• Nuts</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Whole Grains</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Oats</li>
                <li>• Quinoa</li>
                <li>• Brown rice</li>
                <li>• Whole wheat</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="timing" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Meal Timing and Heart Rate
          </h2>
          <div className="bg-green-50 p-4 md:p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Best Practices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Eat regular, balanced meals</li>
                  <li>• Avoid large meals before bed</li>
                  <li>• Space meals 3-4 hours apart</li>
                  <li>• Listen to hunger cues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-2">What to Avoid</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Skipping meals</li>
                  <li>• Overeating</li>
                  <li>• Late night eating</li>
                  <li>• Excessive caffeine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="hydration" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Hydration and Heart Rate
          </h2>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
            <div className="space-y-4">
              <p className="text-gray-600">Proper hydration is essential for:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Maintaining blood volume</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Regulating body temperature</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Supporting heart function</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Preventing dehydration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="tips" className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Practical Nutrition Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Daily Habits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">1</span>
                  <span>Start day with hydration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">2</span>
                  <span>Include protein with each meal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">3</span>
                  <span>Eat colorful vegetables</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Meal Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">1</span>
                  <span>Prep meals in advance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">2</span>
                  <span>Keep healthy snacks ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">3</span>
                  <span>Balance your plate</span>
                </li>
              </ul>
            </div>
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
                Track Your Diet with Impulse
              </h3>
              <p className="text-gray-600">
                Download our app to monitor your nutrition and see how it affects your heart health
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
} 