import { Metadata } from 'next'
import dynamic from 'next/dynamic'
const HeroSection = dynamic(() => import('./components/home/HeroSection'));
const FeaturedArticles = dynamic(() => import('./components/home/FeaturedArticles'));
const UserStories = dynamic(() => import('./components/home/UserStories'));
const CTASection = dynamic(() => import('./components/home/CTASection'));

export const metadata: Metadata = {
  title: 'Impulse - #1 Heart Rate Monitor & Heartbeat Tracker',
  icons: {
    icon: '/logo.png',
  },
  keywords:['heart rate monitor & counter','heart health','heart analyzer','track your heart rate'],
  description: 'Impulse as the best heart rate monitor & counter. Just use your phone, you can easily track your heart rate. User Impulse heart analyzer now to monitor your heart health.',
  openGraph: {
    title: 'Impulse - #1 Heart Rate Monitor & Heartbeat Tracker',
    description: 'Impulse as the best heart rate monitor & counter. Just use your phone, you can easily track your heart rate. User Impulse heart analyzer now to monitor your heart health.',
    url: 'https://heartwellness.app',
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
    title: 'Impulse - #1 Heart Rate Monitor & Heartbeat Tracker',
    description: 'Impulse as the best heart rate monitor & counter. Just use your phone, you can easily track your heart rate. User Impulse heart analyzer now to monitor your heart health.',
    site: 'https://heartwellness.app',
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
export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-gray-50">
        <FeaturedArticles />
      </section>
      <section>
        <UserStories />
      </section>
      <section className="bg-gray-50">
        <CTASection />
      </section>
    </>
  )
} 