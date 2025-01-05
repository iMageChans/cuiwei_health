import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-red-500 to-red-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Heart Health Journey Today
          </h2>
          <p className="text-xl opacity-90 mb-12">
            Join thousands of users who are taking control of their heart health with Impulse.
          </p>
          <Link
            href="https://apps.apple.com/gb/app/impulse-heart-rate-monitor/id6465695370"
            className="bg-white text-red-500 px-8 py-4 rounded-xl font-semibold 
                     hover:bg-gray-100 transition-all duration-300 transform hover:scale-105
                     inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 