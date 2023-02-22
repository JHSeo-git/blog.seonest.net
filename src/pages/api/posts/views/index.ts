import type { NextApiHandler } from 'next';

import { withCatch } from '@/lib/api-middlewares/with-catch';
import { withMethods } from '@/lib/api-middlewares/with-methods';
import AppError from '@/lib/error';
import * as postService from '@/services/post.service';

const postViewsIndexHandler: NextApiHandler = async (req, res) => {
  const method = req.method;

  if (method === 'GET') {
    const encodedSlug = req.query.slug;
    if (!encodedSlug || typeof encodedSlug !== 'string') {
      throw new AppError('BadRequest');
    }

    const slug = decodeURIComponent(encodedSlug);

    const post = await postService.getPost({ slug });

    return res.status(200).json({ views: post?.viewCount ?? 0 });
  }

  if (method === 'POST') {
    const encodedSlug = req.body.slug;
    if (!encodedSlug || typeof encodedSlug !== 'string') {
      throw new AppError('BadRequest');
    }

    const slug = decodeURIComponent(encodedSlug);

    const updatedPost = await postService.viewPost({ slug });

    return res.status(200).json({ views: updatedPost.viewCount });
  }
};

export default withCatch(withMethods(['GET', 'POST'], postViewsIndexHandler));
