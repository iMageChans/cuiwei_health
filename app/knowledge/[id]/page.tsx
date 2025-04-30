

import axios from "axios";
interface Article {
    id: string
    title: string
    description: string
    content: string
    images: string[]
    keywords: string[]
    created_at: string
}
export async function generateMetadata({ params }: any) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    try {
        const res = await axios.get(apiUrl + `/api/articles/${params.id}/`)
        console.log(`这是获取的数据${JSON.stringify(res.data)}`)
        return {
            title: res.data.title,
            description: res.data.description,
            keywords: res.data.keywords,
            openGraph: {
                title: res.data.title,
                description: res.data.description,
                images: res.data.images,
                type: "website",
            },
        }
    } catch (error) {
        return {}
    }
}

export default async function ArticleDetails({ params }: any) {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    let data = { content: '' }
    try {
        const res = await axios.get(apiUrl + `/api/articles/${params.id}/`)
        data = res.data
    } catch (error) { }

    return (
        <div className="max-w-7xl mx-auto min-h-7xl py-28 px-4 sm:px-6 lg:px-8">
            {data.content && <div className="" dangerouslySetInnerHTML={{ __html: data.content }} />}
        </div>
    )
} 
