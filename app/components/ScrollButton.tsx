'use client'

export default function ScrollButton() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      className="group bg-white text-red-500 px-8 py-4 rounded-full text-lg font-medium tracking-wide
               border-2 border-red-100 hover:border-red-200
               shadow-lg shadow-red-500/5
               hover:bg-red-50/80 transition-all duration-300
               hover:scale-[1.02] active:scale-[0.98]
               hover:shadow-xl hover:shadow-red-500/10
               flex items-center gap-3"
    >
      See How Others Thrive
      <svg 
        className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  )
} 