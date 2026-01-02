import { notFound } from "next/navigation"
import { ImageResponse } from "@takumi-rs/image-response"

import { getBlogPageOgImage } from "@/lib/metadata"
import { blog } from "@/lib/source"

import { getImageResponseOptions, generate as MetadataImage } from "./generate"

export const revalidate = false

export async function GET(_req: Request, { params }: RouteContext<"/og/blog/[...slug]">) {
  const { slug } = await params
  const page = blog.getPage(slug.slice(0, -1))
  if (!page) notFound()

  return new ImageResponse(
    <MetadataImage title={page.data.title} description={page.data.description} />,
    await getImageResponseOptions()
  )
}

export function generateStaticParams() {
  return blog.getPages().map((page) => ({
    lang: page.locale,
    slug: getBlogPageOgImage(page).segments,
  }))
}
