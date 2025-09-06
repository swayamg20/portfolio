/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portolio',

  images: {
    unoptimized: true,
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
