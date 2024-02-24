/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/feed/me',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/feed/me',
        permanent: true,
      },
      {
        source: '/feed/recommended',
        destination: '/feed/recommended/channels',
        permanent: true,
      },
      {
        source: '/mypage',
        destination: '/404',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
