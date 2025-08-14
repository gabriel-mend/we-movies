import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://wefit-react-web-test.s3.amazonaws.com/**'),
    ],
  },
}

export default nextConfig
