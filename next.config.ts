// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add any other configurations you need
  compiler: {
    // This allows both .jsx and .tsx files
    reactRemoveProperties: false,
  },
  // Enable JSX in .js files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

export default nextConfig
