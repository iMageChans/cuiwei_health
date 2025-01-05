'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface TableOfContentsProps {
    tableOfContents: Array<{
        id: string
        title: string
    }>
    currentSection?: string
}

export default function TableOfContents({ tableOfContents, currentSection }: TableOfContentsProps) {
    return (
        <div className="hidden lg:block sticky top-32 w-64 ml-8">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-sm font-semibold text-gray-900 mb-4">
                    Table of Contents
                </h2>
                <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className={`block text-sm py-2 px-4 rounded-lg transition-colors duration-200
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
            </motion.div>
        </div>
    )
}