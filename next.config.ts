import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  // Rust MDX 컴파일러: 빠르지만 remark/rehype 플러그인은 못 씀.
  // 플러그인이 필요해지면 이 플래그를 제거할 것.
  experimental: {
    mdxRs: { mdxType: "gfm" },
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
