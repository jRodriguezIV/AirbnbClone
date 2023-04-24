/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['links.papareact.com', 'https://www.jsonkeeper.com/b/4G1G', '']
  },
  env: {
    mapbox_key:'pk.eyJ1Ijoiam9lZDNyZCIsImEiOiJjbGRscnJmcGowMjl0M3RsaW43bW8zZGtjIn0.BJ0U0R4bKYabS3Vn5KNZ1g'
  }
}

module.exports = nextConfig
