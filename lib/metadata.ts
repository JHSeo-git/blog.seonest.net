import { Metadata } from "next"

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL("http://localhost:3000")
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
