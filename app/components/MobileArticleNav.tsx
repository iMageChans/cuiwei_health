'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface MobileArticleNavProps {
    tableOfContents: Array<{
        id: string
        title: string
    }>
    currentSection?: string
}

export default function MobileArticleNav({ tableOfContents, currentSection }: MobileArticleNavProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* 底部导航栏 */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
                <div className="flex items-center justify-between px-4 py-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        Contents
                    </button>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        Top
                    </button>
                </div>
            </div>

            {/* 目录抽屉 */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 背景遮罩 */}
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        </div>

                        {/* 导航面板 */}
                        <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 lg:hidden
                                      max-h-[80vh] overflow-y-auto">
                            <motion.div
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            >
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            Table of Contents
                                        </h2>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 text-gray-500 hover:text-gray-700"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <ul className="space-y-3">
                                        {tableOfContents.map((item) => (
                                            <li key={item.id}>
                                                <Link
                                                    href={`#${item.id}`}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block py-2 px-3 rounded-lg transition-colors duration-200
                          ${currentSection === item.id
                                                            ? 'text-red-500 bg-red-50 font-medium'
                                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
} 