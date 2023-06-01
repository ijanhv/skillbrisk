/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fiverr-res.cloudinary.com', 'res.cloudinary.com', 'www.hostinger.com', 'www.hostgator.com', 'thumbor.forbes.com' ,'images.pexels.com', 'images.unsplash.com', 'ps.w.org', 'cdn.pixabay.com', 'static.wixstatic.com'],
  },
}

module.exports = nextConfig
