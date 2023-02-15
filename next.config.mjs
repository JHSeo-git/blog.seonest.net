import bundleAnalyzer from '@next/bundle-analyzer';
import { withContentlayer } from 'next-contentlayer';

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

export default withBundleAnalyzer(withContentlayer(nextConfig));
