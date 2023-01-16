export interface ViewPostRequest {
  slug: string;
}

export type ViewPostResponse = Record<never, never>;

export interface GetPostViewsRequest {
  slug: string;
}

export interface GetPostViewsResponse {
  views: number;
}
