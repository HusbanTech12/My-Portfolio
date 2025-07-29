import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Extend page file support (e.g. .md, .mdx)
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // Custom compiler options
  compiler: {
    reactRemoveProperties: false,
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image domains for next/image
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
  },

  // Internationalization (optional)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  // Experimental features (for app directory & server components)
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },

  // Webpack customization (for importing SVGs etc.)
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },

  // Env variables (optional)
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.example.com',
    CUSTOM_SECRET_KEY: process.env.CUSTOM_SECRET_KEY,
  },
}

export default nextConfig
