export interface ViewPostRequest {
  slug: string;
}

export interface ViewPostResponse {
  views: number;
}

export interface GetPostViewsRequest {
  slug: string;
}

export interface GetPostViewsResponse {
  views: number;
}
