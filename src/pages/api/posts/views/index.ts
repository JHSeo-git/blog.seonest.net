import { createHash } from 'crypto';
import type { NextApiHandler } from 'next';

import { withCatch } from '@/lib/api-middlewares/with-catch';
import { withMethods } from '@/lib/api-middlewares/with-methods';
import AppError from '@/lib/error';
import getIP from '@/lib/get-ip';
import * as postService from '@/services/post.service';

const postViewsIndexHandler: NextApiHandler = async (req, res) => {
  const method = req.method;

  if (method === 'GET') {
    const encodedSlug = req.query.slug;
    if (!encodedSlug || typeof encodedSlug !== 'string') {
      throw new AppError('BadRequest');
    }

    const slug = decodeURIComponent(encodedSlug);
    const ip = getIP(req);
    const ipHash = createHash('sha256').update(ip).digest('hex');

    await postService.viewPost({ slug, ipHash });
    const views = await postService.getViews({ slug });

    return res.status(200).json({
      views,
    });
  }
};

export default withCatch(withMethods(['GET'], postViewsIndexHandler));
