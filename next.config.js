/** @type {import('next').NextConfig} */

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // 在 Webpack 配置中加入 Progress Bar Plugin
    if (!isServer) {
      config.plugins.push(new ProgressBarPlugin());
    }

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['**'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}

module.exports = nextConfig