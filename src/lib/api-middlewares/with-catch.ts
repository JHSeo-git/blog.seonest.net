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

export declare type Handler = (request: Request, context?: unknown) => Promise<Response>;
export function withRouteCatch(handler: Handler) {
  return async function catchMiddleware(request: Request, context?: unknown) {
    try {
      return await handler(request, context);
    } catch (error) {
      if (isAppError(error)) {
        return new Response(error.message, { status: error.statusCode });
      }

      return new Response('Internal Server Error', { status: 500 });
    }
  };
}
