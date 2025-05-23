
import { Metadata } from 'next';
import KnowledgeBase from './base';

export const metadata: Metadata = {
  title: 'Knowledge | Impulse',
  icons: {
    icon: '/logo.png',
  },
  description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
  openGraph: {
    title: 'Knowledge | Impulse',
    description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
    url: 'https://heartwellness.app/knowledge',
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
    title: 'Knowledge | Impulse',
    description: 'Monitor your heart rate, track your health, and improve your wellbeing with Impulse.',
    site: 'https://heartwellness.app/knowledge',
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

export default function Knowledge() {

  return (
    <KnowledgeBase/>
  )
} 