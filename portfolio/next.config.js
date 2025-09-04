/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.magicui.design'],
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
