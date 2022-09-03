/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
