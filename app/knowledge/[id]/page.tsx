

import NotFound from "@/app/not-found";
import axios from "axios";

export async function generateMetadata({ params }: any) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    try {
        const res = await axios.get(apiUrl + `/api/articles/${params.id}/`)
        console.log(`这是获取的数据${JSON.stringify(res.data)}`)
        return {
            title: res.data.title,
            description: res.data.description,
            keywords: res.data.keywords,
            type: 'website',
            icons: {
                icon: '/logo.png',
            },
            url: apiUrl + `/knowledge/${params.id}`,
            openGraph: {
                title: res.data.title,
                description: res.data.description,
                type: "website",
                url: apiUrl + `/knowledge/${params.id}`,
                images: [
                    {
                        url: 'https://heartwellness.app/open-graph.png',
                        width: 1200,
                        height: 630,
                        alt: res.data.title,
                        type: 'photo',
                    }
                ]
            },
            twitter: {
                card: 'summary_large_image',
                title: res.data.title,
                description: res.data.description,
                site: apiUrl + `/knowledge/${params.id}`,
                images: [
                    {
                        url: 'https://heartwellness.app/open-graph.png',
                        width: 1200,
                        height: 630,
                        alt: res.data.title,
                        type: 'photo'
                    }
                ]
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
        console.log(`这是获取的数据${JSON.stringify(res.data)}`)
        data = res.data
    } catch (error) { }

    return (
        <>
            {data.content ? <div className="max-w-7xl mx-auto min-h-7xl py-28 px-4 sm:px-6 lg:px-8">
                {data.content && <div className="" dangerouslySetInnerHTML={{ __html: data.content }} />}
            </div> : <NotFound />}
        </>
    )
} 
