import { Metadata } from "next"

import { BlogPage, DocsPage } from "./source"

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL("http://localhost:3001")
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)

export function createMetadata(metadata: Metadata) {
  return {
    ...metadata,
    openGraph: {
      title: {
        default: "Seonest",
        template: "%s | Seonest",
      },
      description: "JHSeo 개발 블로그",
      url: "https://seonest.net",
      images: [{ url: "/opengraph-image.png", alt: "Seonest" }],
      siteName: "Seonest",
      ...metadata.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@seo_dev2142",
      title: metadata.title ?? undefined,
      description: "JHSeo 개발 블로그",
      images: [{ url: "/opengraph-image.png", alt: "Seonest" }],
      ...metadata.twitter,
    },
  }
}

export function getBlogPageOgImage(page: BlogPage) {
  const segments = [...page.slugs, "image.webp"]

  return {
    segments,
    url: `/og/blog/${segments.join("/")}`,
  }
}

export function getDocsPageOgImage(page: DocsPage) {
  const segments = [...page.slugs, "image.webp"]

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  }
}
