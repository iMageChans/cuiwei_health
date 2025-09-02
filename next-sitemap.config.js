/** @type {import('next-sitemap').IConfig} */
const axios = require('axios');
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_API_URL || "https://heartwellness.app", // 你的网站 URL
  generateRobotsTxt: true, // 生成 robots.txt 文件
  // 可选配置: 排除某些页面或目录
  exclude: ["/admin/*", "/login"],
  autoLastmod: true, // 自动更新最后修改时间
  additionalPaths: async (config) => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/list/?page=1&page_size=20`);
      return data.map(item => {
        return {
          loc: `/knowledge/${item.id}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmod: new Date().toISOString()
                }
      });

    } catch (error) {
      return [];
    }

  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ]
  }
};


// package.json加入下面的内容生成sitemap
       //"postbuild": "next-sitemap"
        // "next-sitemap": "^4.2.3",
