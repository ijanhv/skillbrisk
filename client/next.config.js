/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fiverr-res.cloudinary.com', 'images.pexels.com', 'images.unsplash.com', 'ps.w.org', 'cdn.pixabay.com'],
  },
}

module.exports = nextConfig
