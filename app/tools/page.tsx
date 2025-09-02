
import { Metadata } from 'next'
import ToolsPageBase from './base'

export const metadata: Metadata = {
  title: 'Free Online Heart Tools to Improve Your Health | Impulse',
  icons: {
    icon: '/logo.png',
  },
  description: 'Discover a variety of free heart health tools at Impulse. Track and improve your heart rate, stress levels, and more with our easy-to-use online tools.',
  openGraph: {
    title: 'Free Online Heart Tools to Improve Your Health | Impulse',
    description: 'Discover a variety of free heart health tools at Impulse. Track and improve your heart rate, stress levels, and more with our easy-to-use online tools.',
    url: 'https://heartwellness.app/tools',
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
    title: 'Free Online Heart Tools to Improve Your Health | Impulse',
    description: 'Discover a variety of free heart health tools at Impulse. Track and improve your heart rate, stress levels, and more with our easy-to-use online tools.',
    site: 'https://heartwellness.app/tools',
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

export default function ToolsPage() {
  return (
    <ToolsPageBase/>
  )
} 