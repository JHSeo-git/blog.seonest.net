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
    // 'width=device-width, initial-scale=1, shrink-to-fit=no',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
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
      creator: `@${appConfig.social.twitter}`,
      images,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'RjVCFQ8Ye2KJxwjzcLX82cGsxOLxH1mhaUvLx5SC6I4',
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
