/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crazydeal-ecommerce',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
