## SEO 改造 计划

> SEO的重点之一就是蹭，蹭热度，蹭关键词，蹭相关行业，蹭知名网站的索引
> 索引比较高的社媒 可以注册一个官方账号 比如 xxxApp 然后发几篇帖子 或者转发自己的博客内容， 比如 twitter，facebook，这些网站的权重比较高用户名和账户ID会被索引到，也是提权的技巧

1. 在所有的 Page 也就是单独的页面里 使用 Metadata 组件(也是为了告诉搜索引擎，这个是单页内容的爬取)

> 文档参考 https://nextjs.org/docs/app/api-reference/functions/generate-metadata

```js
// 示例
export const metadata = {
  title: "High Heart Rate", // 单个文章的内容标题  大概就是这篇文章的主要内容  和page配置的title保持一致即可
  description: "Understanding and managing elevated heart rate", // 单个文章的内容描述 和page配置的description保持一致即可
  keywords: [
    // 这个很重要 文章内所描述的一些 特点 关联网站 等等的一些词汇填入
    "Pulse",
    "Heart rate monitor",
    "Electrocardiogram",
    "Pulse rate",
    "Measure your pulse",
    "Health",
  ],
  // openGraph 为开放数据 既 三方平台 比如 twitter fb WhatsApp 等应用接入的通用展示数据
  openGraph: {
    title: "High Heart Rate", // 同上
    description: "Understanding and managing elevated heart rate", // 同上
    // 推荐 至少使用images,images 配置是用户在社交媒体打开网页时，所展现的图文  如果不想特殊定义 保持和 coverImage 一样也可
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    type: "website",
  },
};
```

2. 站点地图(告诉搜索引擎，我网站里都有哪些东西，你能爬哪些内容）

> 借助三方插件生成了整个网站的 站点地图 需要的维护点不多 只需要按需更改 siteUrl 既 网站网址即可

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pulseheath.com/", // 你的网站 URL
  generateRobotsTxt: true,
};
```

3. GA

GA的参考指标 着陆页,合理的区分用户是从哪个页面访问，以及对应页面的内容是什么，然后拓展相关内容，贴合其他品牌关键词也是提升落地的方法

![image](https://github.com/user-attachments/assets/61364f74-f4fb-41c5-9058-ae423525fdc4)

具体哪些国家的访问量比较高，可以针对对应的国家去做出一些优化，比如当地的习俗？各种节日对产品的影响，做一些本地化相关的内容，或者针对流量大的国家 做网站的本地化

![image](https://github.com/user-attachments/assets/1cbc9355-5135-47f1-95f7-dc41a09d1085)




## 杂项

![image](https://github.com/user-attachments/assets/c866573f-f6be-4930-9be9-296dad03ae0c)








