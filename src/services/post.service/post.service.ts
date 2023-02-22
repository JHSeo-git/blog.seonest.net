import { db } from '@/lib/prisma';

import type * as PostTypes from './types';

export function getPost({ slug }: PostTypes.GetPostParams) {
  return db.post.findUnique({
    where: {
      slug,
    },
  });
}

export function getViews({ slug }: PostTypes.GetViewsParams) {
  return db.postView.count({
    where: {
      slug,
    },
  });
}

export async function getViewsByUserWithIpHash({
  slug,
  ipHash,
}: PostTypes.GetViewsByUserParamsWithIpHash) {
  const viewer = await db.user.findUnique({
    where: {
      ipHash,
    },
  });

  if (!viewer) {
    return 0;
  }

  return db.postView.count({
    where: {
      slug,
      viewerId: viewer.id,
    },
  });
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
  });
}

export async function viewPostWithIpHash({ slug, ipHash }: PostTypes.ViewPostParamsWithIpHash) {
  let viewer = await db.user.findUnique({
    where: {
      ipHash,
    },
  });

  if (!viewer) {
    viewer = await db.user.create({
      data: {
        ipHash,
      },
    });
  }

  return db.postView.create({
    data: {
      slug,
      viewerId: viewer.id,
    },
  });
}

export function getLikes({ slug }: PostTypes.GetViewsParams) {
  return db.postLike.count({
    where: {
      slug,
    },
  });
}

export async function getLikesByUserWithIpHash({
  slug,
  ipHash,
}: PostTypes.GetLikesByUserParamsWithIpHash) {
  const liker = await db.user.findUnique({
    where: {
      ipHash,
    },
  });

  if (!liker) {
    return 0;
  }

  return db.postLike.count({
    where: {
      slug,
      likerId: liker.id,
    },
  });
}

export async function likePostWithIpHash({ slug, ipHash }: PostTypes.LikePostParamsWithIpHash) {
  let liker = await db.user.findUnique({
    where: {
      ipHash,
    },
  });

  if (!liker) {
    liker = await db.user.create({
      data: {
        ipHash,
      },
    });
  }

  return db.postLike.create({
    data: {
      slug,
      likerId: liker.id,
    },
  });
}
