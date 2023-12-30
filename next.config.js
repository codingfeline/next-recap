/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactServerComponents: {
  //   use: ['@react-email/render', '@react-email/components', '@react-email/tailwind'],
  // },
  // experimental: {
  //   serverComponentsExternalPackages: [
  //     '@react-email/render',
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixabay.com',
      },
    ],
  },
}

module.exports = nextConfig
