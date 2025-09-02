'use client'
import { List, Image } from 'antd'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface ExercisesModel {
  id: string
  image_url: string
  name: string
  slug: string
  body_part: {
    description: string
    id: number
    name: string
    slug: string
  }
}

export default function ExercisesBase() {
  const [baseData, setBaseData] = useState<ExercisesModel[]>([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://heartwellness.app'; // 你可以设置一个默认值
    if (page === 1) setBaseData([]);
    // 发送 GET 请求
    axios.get(apiUrl + `/api/fitness/exercises?page=${page}&page_size=20`)
      .then(response => {
        const data: { count: number, results: ExercisesModel[] } = response.data;
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
        <main className="min-h-screen bg-gray-50 lg:pt-28 pt-16 pb-20 bg-white mt-10">
          <div className="mx-auto lg:px-40 px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className='text-xl md:text-lg lg:text-40px font-bold text-black text-center'>
                Must-Know Exercises For Every Fitness Goal
              </h1>
              <p className="text-center text-base md:text-lg lg:text-2xl text-black opacity-70 mt-5 lg:mt-10">
                Discover The Core Movements That Form The Foundation Of Every Great Workout.<br /> Choose Your Focus—Strength, Flexibility, Endurance—And Explore Curated Actions That Fit Your Goals.
              </p>
              <List
                className='w-full h-full mt-5 lg:mt-16'
                dataSource={baseData}
                grid={{
                  gutter: 20,
                  column: 3,
                  xs: 1,
                  md: 2,
                  lg: 3,
                  xl: 4,
                  xxl: 5
                }}
                locale={{ emptyText: <></> }}
                renderItem={(item) => (
                  <Link
                    href={ `/exercises/${item.body_part.slug}`}
                    key={item.id}>
                    <List.Item >
                      <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} className="rounded-2xl overflow-hidden relative aspect-[2/1]">
                        <Image
                          src={item?.image_url}
                          alt={item.body_part.name}
                          title={item.body_part.description}
                          width={'100%'}
                          height={'100%'}
                          style={{ objectFit: 'cover' }}
                          className="object-cover"
                          preview={false}
                        />
                      </div>
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