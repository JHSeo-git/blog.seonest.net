import { db } from '@/lib/prisma';

import type * as PostTypes from './types';

export function getViews({ slug }: PostTypes.GetViewsParams) {
  return db.postView.count({
    where: {
      slug,
    },
  });
}

export async function getViewsByUser({ slug, ipHash }: PostTypes.GetViewsByUserParams) {
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

export function getLikes({ slug }: PostTypes.GetViewsParams) {
  return db.postLike.count({
    where: {
      slug,
    },
  });
}

export async function getLikesByUser({ slug, ipHash }: PostTypes.GetLikesByUserParams) {
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

export async function viewPost({ slug, ipHash }: PostTypes.ViewPostParams) {
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

export async function likePost({ slug, ipHash }: PostTypes.LikePostParams) {
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
