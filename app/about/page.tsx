export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/90">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden px-4 sm:px-0">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Making Heart Health
              <span className="text-red-500 block mt-2 sm:mt-3">
                Simple &amp; Accessible
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our mission is to help everyone understand and improve their heart health through simple,
              accessible tools and knowledge.
            </p>
            <blockquote className="text-2xl italic text-gray-700 mb-12">
              "Health is a state of complete physical, mental and social well-being"
              <footer className="text-base text-gray-500 mt-2">- World Health Organization</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Innovation */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red-100 rounded-full">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries to create intuitive and effective heart monitoring solutions.
              </p>
            </div>

            {/* Accessibility */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-purple-100 rounded-full">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Making heart health monitoring available and understandable for everyone.
              </p>
            </div>

            {/* Empowerment */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-600">
                Giving people the tools and knowledge to take control of their heart health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We believe that understanding your heart health shouldn't be complicated.
              Our goal is to provide simple, intuitive tools that help you monitor and
              improve your heart health, leading to a better quality of life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4">For Individuals</h3>
                <p className="text-gray-600">
                  Easy-to-use tools and insights to help you understand and improve your heart health.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4">For Communities</h3>
                <p className="text-gray-600">
                  Educational resources and support systems to promote heart health awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 