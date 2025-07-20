import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // Enable experimental features
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  
  // Three.js compatibility
  transpilePackages: ['three'],
  
  // Image optimization for portfolio assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  swcMinify: true,
  compress: true,
};

export default nextConfig;
