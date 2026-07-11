import { createElement } from "react"
import { InferPageType, loader, multiple } from "fumadocs-core/source"
import { blog as blogPosts, docs } from "fumadocs-mdx:collections/server"
import { toFumadocsSource } from "fumadocs-mdx/runtime/server"
import { icons } from "lucide-react"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
})

export const blog = loader(toFumadocsSource(blogPosts, []), {
  baseUrl: "/blog",
})

// search source
export const allSource = loader(
  multiple({ source: docs.toFumadocsSource(), blog: toFumadocsSource(blogPosts, []) }),
  {
    baseUrl: "/",
  }
)

export type DocsPage = InferPageType<typeof source>
export type BlogPage = InferPageType<typeof blog>
