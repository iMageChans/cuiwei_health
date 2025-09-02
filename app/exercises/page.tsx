
import { Metadata } from 'next';
import ExercisesBase from './ExercisesBase';

export const metadata: Metadata = {
  title: 'Exercises | Impulse',
  icons: {
    icon: '/logo.png',
  },
  description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
  openGraph: {
    title: 'Exercises | Impulse',
    description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
    url: 'https://heartwellness.app/exercises',
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
    title: 'exercises | Impulse',
    description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
    site: 'https://heartwellness.app/exercises',
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

export default function Exercises() {

  return (
    <ExercisesBase/>
  )
} 