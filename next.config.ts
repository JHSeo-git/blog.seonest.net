import type { NextConfig } from "next"
import { createMDX } from "fumadocs-mdx/next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
      { protocol: "https", hostname: "files.seonest.net" },
    ],
  },
}

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
})

export default withMDX(nextConfig)
