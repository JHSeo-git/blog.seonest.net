import slugify from 'cjk-slug';
import glob from 'glob';

/**
 * @see https://github.com/ahmadnassri/node-glob-promise
 */
export function globPromise(pattern: string, options?: glob.IOptions) {
  return new Promise<string[]>((resolve, reject) => {
    glob(pattern, options ?? {}, (err, files) => (err === null ? resolve(files) : reject(err)));
  });
}

export const getSlug = (text: string) => slugify(text);

export async function hashCode(message: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return hash;
}
