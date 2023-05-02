/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [{
      source: '/',
      headers: [
        { 
          key: 'cache-control',
          value: 'must-revalidate, no-store',
        },
      ]
    }];
  },
  poweredByHeader: false,
}

module.exports = nextConfig
