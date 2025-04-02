/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['styled-components'] = 'styled-components/dist/styled-components.browser.esm.js'
    }
    return config
  },
}

module.exports = nextConfig
