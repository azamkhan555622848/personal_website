/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/personal_website',
  assetPrefix: '/personal_website/',
}

module.exports = nextConfig 