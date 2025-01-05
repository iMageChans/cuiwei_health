import Link from 'next/link'
import Image from 'next/image'

interface ArticleCardProps {
  href: string
  title: string
  description: string
  category: string
  categoryColor: string
  readTime: string
  image: string
}

export function ArticleCard({
  href,
  title,
  description,
  category,
  categoryColor,
  readTime,
  image
}: ArticleCardProps) {
  return (
    <Link href={href} className="group">
      <article className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mb-3 flex items-center gap-2">
          <span className={`text-sm font-medium text-${categoryColor}-500`}>{category}</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <h3 className={`text-lg font-semibold mb-2 group-hover:text-${categoryColor}-500`}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </article>
    </Link>
  )
} 