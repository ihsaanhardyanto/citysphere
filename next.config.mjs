/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/home',
        destination: '/home/thread',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;