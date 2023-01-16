import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { isAppError } from '../error';

export function withCatch(handler: NextApiHandler) {
  return async function catchMiddleware(req: NextApiRequest, res: NextApiResponse) {
    try {
      return await handler(req, res);
    } catch (error) {
      if (isAppError(error)) {
        return res.status(error.statusCode).json({ message: error.message });
      }

      return res.status(500).end();
    }
  };
}
