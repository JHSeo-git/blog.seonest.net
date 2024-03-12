interface PostRequest {
  slug: string
}

interface PostResponse {
  views: number
}

export type ViewPostRequest = PostRequest

export type ViewPostResponse = PostResponse

export type GetPostViewsRequest = PostRequest

export type GetPostViewsResponse = PostResponse
