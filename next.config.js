/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/auth-riotgames/userinfo',
        destination: 'https://auth.riotgames.com/userinfo',
      },
      {
        source: '/riot-pvp/:reegion/offers',
        destination: 'https://pd.:reegion.a.pvp.net/store/v1/offers/',
      },
      {
        source: '/riot-pvp/:reegion/storefront/:puuid',
        destination: 'https://pd.:reegion.a.pvp.net/store/v2/storefront/:puuid',
      }
    ]
  },
}
