interface PostParams {
  slug: string;
}

interface PostWithIpHashParams extends PostParams {
  ipHash: string;
}

export type GetViewsParams = PostParams;

export type GetViewsByUserParams = PostWithIpHashParams;

export type GetLikesParams = PostParams;

export type GetLikesByUserParams = PostWithIpHashParams;

export type ViewPostParams = PostWithIpHashParams;

export type LikePostParams = PostWithIpHashParams;
