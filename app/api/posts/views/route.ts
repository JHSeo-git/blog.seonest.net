import { NextResponse } from "next/server"
import * as postService from "@/services/post.service"

import { withRouteCatch } from "@/lib/api-middlewares/with-catch"
import AppError from "@/lib/error"

export const GET = withRouteCatch(async (request: Request) => {
  const url = new URL(request.url)

  const encodedSlug = url.searchParams.get("slug")
  if (!encodedSlug || typeof encodedSlug !== "string") {
    throw new AppError("BadRequest")
  }

  const slug = decodeURIComponent(encodedSlug)

  const post = await postService.getPost({ slug })

  return NextResponse.json({ views: post?.viewCount ?? 0 })
})

export const POST = withRouteCatch(async (request: Request) => {
  const body = await request.json()

  const encodedSlug = body.slug
  if (!encodedSlug || typeof encodedSlug !== "string") {
    throw new AppError("BadRequest")
  }

  const slug = decodeURIComponent(encodedSlug)

  const updatedPost = await postService.viewPost({ slug })

  return NextResponse.json({ views: updatedPost.viewCount })
})
