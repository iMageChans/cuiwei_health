import { Metadata } from 'next'
import StoryCard from '../components/StoryCard'
import StoryHeroSlider from '../components/StoryHeroSlider'
import { stories } from '../data/stories'
export const metadata: Metadata = {
  title: 'User Reviews | Impulse',
  icons: {
    icon: '/logo.png',
  },
  description: 'Read real stories and reviews from Impulse users. Learn how our heart wellness tools have helped others improve their health and well-being.',
  openGraph: {
    title: 'User Reviews | Impulse',
    description: 'Read real stories and reviews from Impulse users. Learn how our heart wellness tools have helped others improve their health and well-being.',
    url: 'https://heartwellness.app/stories',
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
    title: 'User Reviews | Impulse',
    description: 'Read real stories and reviews from Impulse users. Learn how our heart wellness tools have helped others improve their health and well-being.',
    site: 'https://heartwellness.app/stories',
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://heartwellness.app'
  ),
}
export default function Stories() {
  return (
    <main className="min-h-screen pt-20">
      <h1 style={{ color: 'white' }}>
        Impulse - Voices That Inspire
      </h1>
      <StoryHeroSlider />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(story => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </div>
    </main>
  )
}