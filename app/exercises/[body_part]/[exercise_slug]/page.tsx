import NotFound from "@/app/not-found";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import './page.css'
import { Flex, Space, Image } from "antd";
import Link from "next/link";
import breaks from 'remark-breaks';
import { headers } from "next/headers";

interface ExercisesDetailsModel {
    id: string
    image_url: string
    name: string
    slug: string
    description_html: string
    description: string
    description_markdown: string
    markdownArr: string[]
    body_part: {
        description: string
        id: number
        name: string
        slug: string
    }
    keywords: string[]
}
export async function generateMetadata({ params }: any) {
    console.log(`这是params的数据${JSON.stringify(params)}`)

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    try {
        const res = await axios.get(apiUrl + `/api/fitness/exercises/body-parts/${params.body_part}/${params.exercise_slug}`)
        const data: ExercisesDetailsModel = res.data
        return {
            title: data.name,
            description: data.description,
            keywords: data.keywords,
            type: 'website',
            icons: {
                icon: '/logo.png',
            },
            url: apiUrl + `/exercises/${params.body_part}/${params.exercise_slug}`,
            openGraph: {
                title: data.name,
                description: data.description,
                type: "website",
                url: apiUrl + `/exercises/${params.body_part}/${params.exercise_slug}`,
                images: [
                    {
                        url: 'https://heartwellness.app/open-graph.png',
                        width: 1200,
                        height: 630,
                        alt: data.name,
                        type: 'photo',
                    }
                ]
            },
            twitter: {
                card: 'summary_large_image',
                title: data.name,
                description: data.description,
                site: apiUrl + `/exercises/${params.body_part}/${params.exercise_slug}`,
                images: [
                    {
                        url: 'https://heartwellness.app/open-graph.png',
                        width: 1200,
                        height: 630,
                        alt: data.name,
                        type: 'photo'
                    }
                ]
            },

        }
    } catch (error) {
        console.log(`Metadata报错了${error}`)
        return {}
    }
}


export default async function ArticleDetails({ params }: { params: any }) {

    const userAgent = headers().get('user-agent') || "";
    const isMobile = /mobile/i.test(userAgent);
    console.log(`这是params的数据${JSON.stringify(params)}`)

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    let details = { description_html: '' } as ExercisesDetailsModel
    let recommendationsArr: ExercisesDetailsModel[] = []

    try {
        const [res1, res2] = await Promise.all([
            axios.get(apiUrl + `/api/fitness/exercises/body-parts/${params.body_part}/${params.exercise_slug}`),
            axios.get(apiUrl + `/api/fitness/exercises/recommendations/${params.body_part}`)
        ]);
        console.log(`这是获取的res1数据${JSON.stringify(res1.data)}/n/n 这是获取res2数据${JSON.stringify(res2.data)}`)
        details = res1.data as ExercisesDetailsModel
        // data.description_markdown = data.description_markdown.replace(/\\(.)/g, '$1')
        // // 去除所有的 '-'
        // data.description_markdown = data.description_markdown.replace(/-/g, '');
        details.markdownArr = splitMarkdownByHeading(details.description_markdown)
        recommendationsArr = res2.data.recommendations?.length > 4 ? res2.data.recommendations.slice(0, 4) : res2.data.recommendations

    } catch (error: any) {
        console.log(`报错了${error}`)
    }

    //标题分割
    function splitMarkdownByHeading(markdownString: string) {
        // 按以 "##" 开头的标题分割
        const headings = markdownString.split(/(?<=\n)\s*##\s/);

        // 检查标题数量是否足够
        if (headings.length < 3) {
            return [markdownString, '']; // 如果标题少于3个，返回原字符串和空字符串
        }

        // 从第三个标题开始进行分割
        const firstPart = headings.slice(0, 2).join('## ');  // 前两个标题及其内容
        const secondPart = '## ' + headings.slice(2).join('## ');     // 从第三个标题开始的剩余部分
        return [firstPart, secondPart];
    }
    //单词首字母大写
    function capitalizeWords(sentence: string) {
        if (!sentence) return
        return sentence
            .replace(/-/g, " ")
            .split(' ')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <>
            {
                details.markdownArr ? <main className="max-w-7xl mx-auto min-h-7xl py-28 px-4 sm:px-6 lg:px-8">
                    <h1 className='text-xl md:text-lg lg:text-40px font-bold text-black mb-5'>
                        {capitalizeWords(details.name)}
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8 text-lg md:text-xl lg:text-2xl mb-5">
                        <Link href={`/exercises/${params.body_part}`} className="hover:text-red-500">{capitalizeWords(params.body_part)}</Link>
                        <span>/</span>
                        <span className="text-gray-400">{capitalizeWords(details.name)}</span>
                    </div>

                    <Flex gap={isMobile?20:41} justify='space-between' vertical={isMobile ? true : false} className="max-w-7xl mx-auto min-h-7xl">
                        <Space className="w-full md:w-full lg:w-2/5" align='start' direction='vertical'>
                            <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} className="overflow-hidden relative aspect-[520/392]">
                                <Image
                                    src={details.image_url||'/exercises/banner.png'}
                                    alt={details.name}
                                    title={details.name}
                                    width={'100%'}
                                    height={'100%'}
                                    style={{ objectFit: 'cover' }}
                                    className="object-cover"
                                    preview={false}
                                />
                            </div>
                            {
                                !isMobile ? <>
                                    <p className="text-base md:text-lg lg:text-3xl text-black opacity-70 mt-5 lg:mt-10">
                                        Recommended Exercises
                                    </p>
                                    {
                                        recommendationsArr.length > 0 ? recommendationsArr?.map((item: ExercisesDetailsModel) => {
                                            return <Flex key={item.id} justify='space-between' align="center" className="w-full ">
                                                <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} className="rounded-2xl overflow-hidden relative aspect-[2/1] w-2/5">
                                                    <Image
                                                        src={item.image_url || '/exercises/banner.png'}
                                                        alt={item.name}
                                                        title={item.name}
                                                        width={'100%'}
                                                        height={'100%'}
                                                        style={{ objectFit: 'cover' }}
                                                        className="object-cover"
                                                        preview={false}
                                                    />
                                                </div>
                                                <Space direction="vertical" className="w-[55%] h-full">
                                                    <p className="h-1/4 text-black opacity-70 text-lg md:text-2xl lg:text-[26px] truncate">{capitalizeWords(item.name)}</p>
                                                    <p className="h-1/2 ellipsis text-black opacity-70 text-base md:text-xl lg:text-2xl">{item.description}</p>
                                                </Space>
                                            </Flex>
                                        }) : null
                                    }
                                    <Link
                                        href="https://apps.apple.com/gb/app/impulse-heart-rate-monitor/id6465695370"
                                        target="_blank"
                                        rel='nofollow noopener noreferrer'
                                    >
                                        <div className="overflow-hidden relative aspect-[1563/921]">
                                            <Image
                                                src='/exercises/banner.png'
                                                alt={details.slug}
                                                title={details.slug}
                                                width={'100%'}
                                                height={'100%'}
                                                style={{ objectFit: 'cover' }}
                                                className="object-cover"
                                                preview={false}
                                            />
                                        </div>
                                    </Link>
                                </> : null
                            }
                        </Space>
                        <div className="w-full md:w-full lg:w-3/5 min-h-7xl markdown-content">
                            <ReactMarkdown>{details.markdownArr[0]}</ReactMarkdown>
                            <Flex className="w-full mt-5 mb-5 rounded-2xl py-5 px-2" vertical align="center" justify='space-evenly' gap={10} style={{ border: '1px solid #000000' }}>
                                <div className="text-lg md:text-2xl lg:text-[28px] text-black">
                                    Track Your Workouts & Pulse
                                    <span style={{ color: '#FF2B3A' }}> In One App</span>
                                </div>
                                <div className="text-base md:text-lg lg:text-xl text-center">
                                    Stay fit and monitor your heart health with real-time tracking, workout guides, and personalized insights.
                                </div>
                                <Link
                                    href="https://apps.apple.com/app/id6465695370"
                                    target="_blank"
                                    rel='nofollow noopener noreferrer'
                                    className="group bg-red-500 text-white px-6 py-2 rounded-xl font-semibold 
                         hover:bg-red-600 transition-all duration-300 transform hover:scale-105
                         flex items-center justify-center gap-2 relative"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                    </svg>
                                    <span>Download App</span>
                                </Link>
                            </Flex>
                            <ReactMarkdown remarkPlugins={[breaks]}>{details.markdownArr[1]}</ReactMarkdown>
                        </div>
                        {
                            isMobile ? <>
                                <p className="text-base md:text-lg lg:text-3xl text-black opacity-70 mt-5 lg:mt-10">
                                    Recommended Exercises
                                </p>
                                {
                                    recommendationsArr.length > 0 ? recommendationsArr?.map((item: ExercisesDetailsModel) => {
                                        return <Flex key={item.id} justify='space-between' align="center" className="w-full">
                                            <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} className="rounded-2xl overflow-hidden relative aspect-[2/1] w-2/5">
                                                <Image
                                                    src={item.image_url || '/exercises/banner.png'}
                                                    alt={item.name}
                                                    title={item.name}
                                                    width={'100%'}
                                                    height={'100%'}
                                                    style={{ objectFit: 'cover' }}
                                                    className="object-cover"
                                                    preview={false}
                                                />
                                            </div>
                                            <Space direction="vertical" className="w-[55%] h-full">
                                                <p className="h-1/4 text-black opacity-70 text-lg md:text-2xl lg:text-[26px] truncate">{capitalizeWords(item.name)}</p>
                                                <p className="h-1/2 ellipsis text-black opacity-70 text-base md:text-xl lg:text-2xl">{item.description}</p>
                                            </Space>
                                        </Flex>
                                    }) : null
                                }
                                <Link
                                    href="https://apps.apple.com/gb/app/impulse-heart-rate-monitor/id6465695370"
                                    target="_blank"
                                    rel='nofollow noopener noreferrer'
                                >
                                    <div className="overflow-hidden relative aspect-[1563/921]">
                                        <Image
                                            src='/exercises/banner.png'
                                            alt={details.slug}
                                            title={details.slug}
                                            width={'100%'}
                                            height={'100%'}
                                            style={{ objectFit: 'cover' }}
                                            className="object-cover"
                                            preview={false}
                                        />
                                    </div>
                                </Link>
                            </> : null
                        }
                    </Flex>
                </main> : <NotFound />
            }
        </>

    )
} 
