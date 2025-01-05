import Link from 'next/link'
import Image from 'next/image'

interface ToolCardProps {
  href: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon?: React.ReactNode
}

export function ToolCard({
  href,
  title,
  description,
  image,
  imageAlt,
  icon
}: ToolCardProps) {
  return (
    <Link href={href} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105">
      <div className="p-6">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all">
          {icon}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
} 