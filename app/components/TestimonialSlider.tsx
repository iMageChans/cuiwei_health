'use client'

import { useState, useRef } from 'react'

interface Testimonial {
  id: number
  initials: string
  name: string
  role: string
  duration: string
  quote: string
  bgColor: string
  textColor: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: 'SJ',
    name: 'Sarah Johnson',
    role: 'Heart Health Journey',
    duration: '6 months',
    quote: 'Using the Impulse tools helped me understand my heart health better. The stress management tips have made a real difference in my daily life.',
    bgColor: 'bg-red-100',
    textColor: 'text-red-500'
  },
  {
    id: 2,
    initials: 'ML',
    name: 'Mike Liu',
    role: 'Fitness Enthusiast',
    duration: '1 year',
    quote: `The heart rate monitoring features are incredibly accurate. I've been able to optimize my workouts and see real improvements in my cardiovascular fitness.`,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-500'
  },
  {
    id: 3,
    initials: 'EP',
    name: 'Emma Parker',
    role: 'Prevention Focus',
    duration: '9 months',
    quote: 'As someone with a family history of heart disease, this app has been invaluable. The educational content is easy to understand and implement.',
    bgColor: 'bg-green-100',
    textColor: 'text-green-500'
  },
  {
    id: 4,
    initials: 'RK',
    name: 'Raj Kumar',
    role: 'Stress Management',
    duration: '3 months',
    quote: 'The breathing exercises and meditation guides have helped me manage my stress levels. I feel more in control of my health now.',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-500'
  },
  {
    id: 5,
    initials: 'AW',
    name: 'Alice Wang',
    role: 'Lifestyle Change',
    duration: '8 months',
    quote: 'This platform has helped me make sustainable lifestyle changes. The personalized recommendations are spot on.',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-500'
  },
  {
    id: 6,
    initials: 'JD',
    name: 'John Davis',
    role: 'Recovery Journey',
    duration: '4 months',
    quote: 'After my heart surgery, this has been my go-to resource for recovery. The progress tracking features are excellent.',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-500'
  }
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const itemsPerView = 3
  const slideCount = Math.ceil(testimonials.length / itemsPerView)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    if (currentSlide < slideCount - 1) {
      goToSlide(currentSlide + 1)
    } else {
      goToSlide(0)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    } else {
      goToSlide(slideCount - 1)
    }
  }

  return (
    <div className="relative px-4">
      <div className="overflow-hidden">
        <div 
          ref={slideRef}
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 
                          hover:shadow-lg transform hover:-translate-y-1 h-full">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-full ${testimonial.bgColor} 
                               flex-shrink-0 flex items-center justify-center`}>
                    <span className={`text-2xl ${testimonial.textColor} font-semibold`}>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role} - {testimonial.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 
                   bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 
                   bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors
                       ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300 hover:bg-red-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 