/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://heartwellness.app/", // 你的网站 URL
  generateRobotsTxt: true, // 生成 robots.txt 文件
  // 可选配置: 排除某些页面或目录
  exclude: ["/admin/*", "/login"],
};
