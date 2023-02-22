const bundleAnalyzer = require('@next/bundle-analyzer');
const { withContentlayer } = require('next-contentlayer');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    appDir: true,
  },
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
