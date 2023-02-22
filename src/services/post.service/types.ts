interface PostParams {
  slug: string;
}

interface PostWithIpHashParams extends PostParams {
  ipHash: string;
}

export type GetPostParams = PostParams;

export type GetViewsParams = PostParams;

export type GetViewsByUserParamsWithIpHash = PostWithIpHashParams;

export type ViewPostParams = PostParams;

export type ViewPostParamsWithIpHash = PostWithIpHashParams;

export type GetLikesParams = PostParams;

export type GetLikesByUserParamsWithIpHash = PostWithIpHashParams;

export type LikePostParamsWithIpHash = PostWithIpHashParams;
