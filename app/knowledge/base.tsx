'use client'
import { Divider, Flex, List, Image } from 'antd'
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';

interface Article {
  id: string
  title: string
  description: string
  images: string[]
  keywords: string[]
  created_at: string
  slug_keyword:string
  url: string
  slug: string
}

export default function KnowledgeBase() {
  const [baseData, setBaseData] = useState<Article[]>([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    if (page === 1) setBaseData([]);
    // 发送 GET 请求
    axios.get(apiUrl + `/api/articles/list/?page=${page}&page_size=10`)
      .then(response => {
        const data: { count: number, results: Article[] } = response.data;
        setTotal(data.count);
        if (page === 1) {
          setBaseData([...data.results]);
        } else {
          setBaseData([...baseData, ...data.results]);
        }
        // 处理成功响应
        console.log('数据:', data.results);
      })
      .catch(error => {
        // 处理错误
        console.error('错误:', error);
      });

  }, [page]);

  useEffect(() => {

    const targetElement = document.getElementById('footer-id');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // 检查元素是否在可视区域
        if (entry.isIntersecting) {
          if (total > baseData.length && baseData.length !== 0) {
            setPage(page + 1);
          }
        }
      });
    });

    if (targetElement) {
      observer.unobserve(targetElement); // 先取消观察
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [baseData]);


  return (
    <>
      <div>
        <main className="min-h-screen bg-gray-50 lg:pt-28 pt-16 pb-20 bg-white">
          <div className="mx-auto lg:px-40 px-2">
            <div className="max-w-7xl mx-auto">
              <h1 className='text-xl md:text-lg lg:text-xl font-bold text-black'>
                IMPULSE - HEALTH KNOWLEDGE
              </h1>
              <Divider className='bg-black h-0.5 mb-1 lg:mb-2 mt-1 lg:mt-2' />
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-black lg:mb-4">
                LASTEST UPDATE
              </h2>
              <List
                dataSource={baseData}
                renderItem={(item) => (
                  <Link href={`/knowledge/${item.slug_keyword}`} key={item.id}>
                    <List.Item className='bg-white p-2 md:p-3 lg:p-4 w-full h-28 md:h-32 lg:h-40'>
                      <Flex vertical={false} className="w-full h-full overflow-hidden" style={{ cursor: 'pointer' }} gap='1rem' onClick={() => { }}>
                        <div className="h-full rounded-2xl overflow-hidden relative aspect-[7/4]">
                          <Image
                            src={item?.images[0]}
                            alt={item.title}
                            title={item.title}
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: 'cover' }}
                            className="object-cover"
                            preview={false}
                          />
                        </div>
                        <Flex justify='space-between' align='start' vertical className="w-2/3 h-full">
                          <h3 className="line-clamp-1 text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="line-clamp-3 text-xs md:text-sm lg:text-base text-black" style={{ flex: 1 }}>
                            {item.description}
                          </p>
                          <p className="text-xs md:text-sm lg:text-base text-black">{moment(item.created_at).format('MM-DD-YYYY')}</p>
                        </Flex>
                      </Flex>
                    </List.Item>
                  </Link>
                )}
              />
            </div>
          </div>
        </main >
      </div>
    </>
  )
} 