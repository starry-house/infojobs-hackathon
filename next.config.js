/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/app',
      destination: '/app/applications',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
