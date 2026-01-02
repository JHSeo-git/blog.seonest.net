import { db } from "@/lib/prisma"

import type * as PostTypes from "./types"

export function getPost({ slug }: PostTypes.GetPostParams) {
  return db.post.findUnique({
    where: {
      slug,
    },
  })
}

export async function viewPost({ slug }: PostTypes.ViewPostParams) {
  return db.post.upsert({
    where: {
      slug,
    },
    create: {
      slug,
      viewCount: 1,
    },
    update: {
      viewCount: {
        increment: 1,
      },
    },
  })
}
