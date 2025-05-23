import { Metadata } from "next";
import BreathingExerciseBasePage from "./base";

export const metadata: Metadata = {
  title: 'Online Breathing Timer to Make Breathing Exercise | Impulse',
  icons: {
    icon: '/logo.png',
  },
  description: 'Use Impulse’s free online breathing timer to practice effective breathing exercises. Enhance your relaxation and focus with guided sessions.',
  openGraph: {
    title: 'Online Breathing Timer to Make Breathing Exercise | Impulse',
    description: 'Use Impulse’s free online breathing timer to practice effective breathing exercises. Enhance your relaxation and focus with guided sessions.',
    url: 'https://heartwellness.app/tools/breathing-exercise',
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
    title: 'Online Breathing Timer to Make Breathing Exercise | Impulse',
    description: 'Use Impulse’s free online breathing timer to practice effective breathing exercises. Enhance your relaxation and focus with guided sessions.',
    site: 'https://heartwellness.app/tools/breathing-exercise',
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

export default function BreathingExercisePage() {
  

  return (
    <BreathingExerciseBasePage/>
  )
} 