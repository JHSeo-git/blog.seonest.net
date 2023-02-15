import { getPlaiceholder } from 'plaiceholder';

export async function getBlurThumbnail(src?: string | null) {
  if (!src) {
    return undefined;
  }

  const { base64 } = await getPlaiceholder(src);

  return base64;
}
