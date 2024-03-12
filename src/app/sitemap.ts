import { allPosts } from "contentlayer/generated"

const siteUrl = "https://seonest.net"

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${siteUrl}${post.slug}`,
    lastModified: post.update?.split("T")[0] ?? post.date.split("T")[0],
  }))

  const routes = ["", "/about"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts]
}
