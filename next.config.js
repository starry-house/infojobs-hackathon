/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  redirects: async () => [
    {
      source: '/app',
      destination: '/app/applications',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
