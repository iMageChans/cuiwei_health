'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlogPosting, Person } from 'schema-dts';
import { useEffect, useState } from 'react'

interface ArticleProps {
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
  coverImage: string
  tableOfContents: Array<{
    id: string
    title: string
  }>
  relatedArticles: Array<{
    href: string
    title: string
    description: string
  }>
  children: React.ReactNode
}

export default function ArticleLayout({
  category,
  categoryColor,
  title,
  description,
  readTime,
  lastUpdated,
  views,
  author,
  coverImage,
  tableOfContents,
  relatedArticles,
  children
}: ArticleProps) {
  const [isClient, setIsClient] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return  // 只在客户端执行

    const handleScroll = () => {
      // 计算阅读进度
      const scrolled = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / totalHeight) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))

      // 目录高亮逻辑
      const sections = tableOfContents.map(item => ({
        id: item.id,
        top: document.getElementById(item.id)?.getBoundingClientRect().top || 0
      }))

      const currentSection = sections.find(section => section.top > 120)?.id ||
        sections[sections.length - 1].id

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始化
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient, tableOfContents])  // 添加 isClient 依赖

  // 简化滚动处理函数
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 120 // 考虑固定导航栏高度
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
      setActiveSection(id)
      setMobileMenuOpen(false)
    }
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    author: {
      '@type': 'Person',
      name: author.name,
    } as Person,
    image: coverImage,
  } as BlogPosting

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <main className="min-h-screen pt-20 bg-gray-50">
        {/* 阅读进度条 */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-red-500 transition-transform duration-150"
            style={{ transform: `translateX(${readingProgress - 100}%)` }}
          />
        </div>

        {/* 文章头部 */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* 面包屑导航 */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                <Link href="/" className="hover:text-red-500">Home</Link>
                <span>/</span>
                <Link href="/knowledge" className="hover:text-red-500">Knowledge</Link>
                <span>/</span>
                <span className="text-gray-400">{title}</span>
              </div>

              {/* 文章标题区 */}
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${categoryColor}-100 text-${categoryColor}-600 mb-4`}>
                  {category}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Impulse - {title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readTime}
                  </span>
                  <span>•</span>
                  <span>Last updated: {lastUpdated}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {views} views
                  </span>
                </div>
              </div>

              {/* 作者信息 */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={author.image}
                    alt={author.name}
                    title={author.name}
                    loading='lazy'
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-lg">{author.name}</div>
                  <div className="text-gray-600">{author.title}</div>
                </div>
              </div>

              {/* 文章封面 */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
                <Image
                  src={coverImage}
                  alt={title}
                  title={title}
                  loading='lazy'
                  width={768}
                  height={330}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 文章内容区 */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto relative">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 左侧固定目录 */}
              <aside className="lg:w-72 flex-shrink-0">
                {/* 移动端目录 */}
                <div className="lg:hidden mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <span className="font-medium text-gray-900">Table of Contents</span>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>

                  {mobileMenuOpen && (
                    <nav className="mt-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      {tableOfContents.map((item, index) => (
                        <button
                          key={item.id}
                          className={`w-full flex items-center px-4 py-3 gap-3 transition-colors
                          ${activeSection === item.id ? 'bg-red-50 text-red-500' : 'text-gray-600'}
                          ${index !== 0 && 'border-t border-gray-100'}`}
                          onClick={() => scrollToSection(item.id)}
                        >
                          <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm">
                            {index + 1}
                          </span>
                          <span>{item.title}</span>
                        </button>
                      ))}
                    </nav>
                  )}
                </div>

                {/* 桌面端固定目录 */}
                <div className="hidden lg:block sticky top-32">
                  <nav className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex items-center px-4 py-3 gap-3 transition-colors
                        ${activeSection === item.id
                            ? 'bg-red-50 text-red-500 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'}
                        ${index !== 0 && 'border-t border-gray-100'}`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm
                        ${activeSection === item.id ? 'bg-red-100' : 'bg-gray-100'}`}>
                          {index + 1}
                        </span>
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </nav>

                  {/* 阅读进度指示器 */}
                  <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>Reading Progress</span>
                      <span>{Math.round(readingProgress)}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 transition-all duration-300"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* 返回顶部按钮 */}
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="mt-4 w-full flex items-center justify-center gap-2 p-3 rounded-xl
                           bg-white shadow-sm border border-gray-100 text-gray-600 
                           hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>Back to Top</span>
                  </button>
                </div>
              </aside>

              {/* 文章主体内容 */}
              <div className="flex-1 max-w-4xl">
                <article className="prose prose-lg max-w-none">
                  <div className="space-y-12">
                    {children}
                  </div>
                </article>

                {/* 添加免责声明 */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The information provided in this article is for informational purposes only and is not intended
                    as a substitute for professional medical advice, diagnosis, or treatment. Always consult your
                    doctor or other qualified healthcare provider with any questions you may have regarding your
                    health or a medical condition. Never disregard or delay seeking professional medical advice
                    because of something you have read in this article.
                  </p>
                </div>

                {/* 相关文章部分 */}
                <div className="mt-16 pt-8 border-t">
                  <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    {relatedArticles.map((article, index) => (
                      <Link key={index} href={article.href} className="group">
                        <article className="bg-white rounded-xl overflow-hidden transition-all duration-300 
                                        hover:shadow-lg border border-gray-100">
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500">
                              {article.title}
                            </h3>
                            <p className="text-gray-600">{article.description}</p>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 