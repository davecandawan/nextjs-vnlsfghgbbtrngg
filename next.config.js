const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable more verbose logging
  logging: {
    level: 'debug',
    fullUrl: true,
  },
  experimental: {
    // Next.js 15+ handles ESM externals automatically
  },
  // Add webpack configuration for path aliases
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'd1tnk6mbnurvod.cloudfront.net',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 200,
        ignored: ['**/.git', '**/node_modules'],
      };
    }
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
  // Environment variables
  env: {
    // Add any environment variables here
  },
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
  // Optional: Configure build output directory
  distDir: '.next',
};

module.exports = nextConfig;
