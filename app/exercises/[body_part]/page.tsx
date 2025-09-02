import BodyPartBase from "./BodyPartBase";

export function generateMetadata({ params }: any) {
    debugger
    console.log(`这是params的数据${JSON.stringify(params)}`)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    try {
    
        const title = params.body_part.charAt(0).toUpperCase() + params.body_part.slice(1)
        return {
            title: title,
            description: `Best ${title} Moves to Add to Your Routine`,
            keywords: [params.body_part],
            type: 'website',
            icons: {
                icon: '/logo.png',
            },
            url: apiUrl + `/exercises/${params.body_part}`,
            openGraph: {
                title:title,
                description: `Best ${title} Moves to Add to Your Routine`,
                type: "website",
                url: apiUrl + `/exercises/${params.body_part}`,
                images: [
                    {
                        url: 'https://heartwellness.app/open-graph.png',
                        width: 1200,
                        height: 630,
                        alt: title,
                        type: 'photo',
                    }
                ]
            },
            twitter: {
                card: 'summary_large_image',
                title: title,
                description: `Best ${title} Moves to Add to Your Routine`,
                site: apiUrl + `/exercises/${params.body_part}`,
                images: [
                    {
                        url: 'https://heartwellness.app/open-graph.png',
                        width: 1200,
                        height: 630,
                        alt: title,
                        type: 'photo'
                    }
                ]
            },

        }
    } catch (error) {
        return {}
    }
}

export default function BodyPart({ params }: any) {

  return (
    <BodyPartBase params={params}/>
  )
} 