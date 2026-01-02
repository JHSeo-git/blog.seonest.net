import client from "../client"
import type * as PostsType from "./posts.types"

export async function viewPost(params: PostsType.ViewPostRequest) {
  const data = await client.post<PostsType.ViewPostResponse>("/api/posts/views", params)

  return data
}

export async function getPostViews(params: PostsType.GetPostViewsRequest) {
  const data = await client.get<PostsType.GetPostViewsResponse>(
    `/api/posts/views?slug=${params.slug}`
  )

  return data
}
