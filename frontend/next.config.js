/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: '/crazydeal-ecommerce',
  assetPrefix: '/crazydeal-ecommerce/',
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
