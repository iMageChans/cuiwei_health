import { Metadata } from "next";
import HeartRateCalculatorBase from "./base";

export const metadata: Metadata = {
  title: 'Best Free Heart Rate Zones Calculator Online | Impulse',
  icons: {
    icon: '/logo.png',
  },
  description: 'Calculate your heart rate quickly and accurately with Impulse’s free online heart rate calculator. Monitor your health and improve your fitness with ease.',
  openGraph: {
    title: 'Best Free Heart Rate Zones Calculator Online | Impulse',
    description: 'Calculate your heart rate quickly and accurately with Impulse’s free online heart rate calculator. Monitor your health and improve your fitness with ease.',
    url: 'https://heartwellness.app/tools/heart-rate-calculator',
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
    title: 'Best Free Heart Rate Zones Calculator Online | Impulse',
    description: 'Calculate your heart rate quickly and accurately with Impulse’s free online heart rate calculator. Monitor your health and improve your fitness with ease.',
    site: 'https://heartwellness.app/tools/heart-rate-calculator',
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

export default function HeartRateCalculator() {

  return (<HeartRateCalculatorBase />)

}

