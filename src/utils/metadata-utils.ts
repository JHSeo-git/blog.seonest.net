import type { Metadata } from 'next';

import appConfig from '@/app.config';

interface GetMetadataParams {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
}
export const getMetadata = ({
  title,
  description,
  ogImage,
  url,
}: GetMetadataParams = {}): Metadata => {
  const metadataTitle = title ? `${title} - ${appConfig.title}` : appConfig.title;
  const images = generateImages(
    ogImage ? [{ url: ogImage, alt: title || appConfig.title }] : undefined
  );

  return {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    title: metadataTitle,
    description: description || appConfig.description,
    openGraph: {
      title: metadataTitle || appConfig.title,
      description: description || appConfig.description,
      siteName: appConfig.siteName,
      type: 'website',
      url: generateFullSiteUrl(url),
      images,
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataTitle || appConfig.title,
      description: description || appConfig.description,
      site: `@${appConfig.social.twitter}`,
      creator: `@${appConfig.social.twitter}`,
      images,
    },
  };
};

type Image = {
  url: string;
  alt: string;
};
export const generateImages = (images?: Image[]) => {
  if (!images) {
    return [
      {
        url: appConfig.ogImage,
        alt: appConfig.title,
      },
    ];
  }

  return images.map((image) => {
    return {
      url: generateFullUrl(image.url),
      alt: image.alt,
    };
  });
};

export const generateFullUrl = (url: string) => {
  const fullUrl = `${appConfig.siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
  return encodeURI(fullUrl);
};

export const generateFullSiteUrl = (url?: string) => {
  if (!url) {
    return appConfig.siteUrl;
  }

  return generateFullUrl(url);
};
