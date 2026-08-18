import type { MetadataRoute } from "next"

import { getPosts } from "@/lib/posts"

const SITE_URL = "https://seonest.net"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  return [
    { url: SITE_URL, lastModified: posts[0]?.createdAt || undefined },
    ...posts.map((post) => ({
      url: `${SITE_URL}/${post.slug}`,
      lastModified: post.updatedAt ?? post.createdAt,
    })),
  ]
}
