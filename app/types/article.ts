export interface Article {
  id: string
  category: string
  categoryColor: string
  title: string
  description: string
  readTime: string
  lastUpdated: string
  views: string
  author: {
    name: string
    title: string
    image: string
  }
  coverImage?: string
  coverImageAlt?: string
  coverImageWidth?: number
  coverImageHeight?: number
  tableOfContents: Array<{
    id: string
    title: string
  }>
  relatedArticles: Array<{
    href: string
    title: string
    description: string
  }>
}

export interface ArticleLayoutProps {
  article: Article
  children: React.ReactNode
} 