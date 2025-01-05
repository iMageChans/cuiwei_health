import { Metadata } from 'next'
import HeroSection from './components/home/HeroSection'
import FeaturedArticles from './components/home/FeaturedArticles'
import UserStories from './components/home/UserStories'
import CTASection from './components/home/CTASection'

export const metadata: Metadata = {
  title: 'Impulse - Your Heart Health Companion',
  description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.'
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