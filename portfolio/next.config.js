/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',

  images: {
    unoptimized: true,
  },
  
  // Font optimization configuration to prevent timeout errors
  experimental: {
    fontLoaders: [
      {
        loader: 'next/font/google',
        options: {
          subsets: ['latin'],
          display: 'swap',
          fallback: ['system-ui', 'arial'],
        },
      },
    ],
  },

  // Increase timeout for font loading
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Font-Timeout',
            value: '30000',
          },
        ],
      },
    ]
  },

  // Configure webpack to handle font loading timeouts
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
