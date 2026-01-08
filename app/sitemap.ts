import type { MetadataRoute } from "next"

import { baseUrl } from "@/lib/metadata"
import { blog as blogPosts, source } from "@/lib/source"

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString()
  const items = await Promise.all(
    source.getPages().map(async (page) => {
      const { lastModified } = await page.data.load()

      return {
        url: url(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: "weekly",
        priority: 0.5,
      } as MetadataRoute.Sitemap[number]
    })
  )
  const blogs = await Promise.all(
    blogPosts.getPages().map(async (blog) => {
      const { lastModified } = await blog.data.load()

      return {
        url: url(blog.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: "weekly",
        priority: 0.5,
      } as MetadataRoute.Sitemap[number]
    })
  )

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/docs"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/blog"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...items.filter((v) => v !== undefined && v.url !== url("/docs")),
    ...blogs.filter((v) => v !== undefined && v.url !== url("/blog")),
  ]
}
