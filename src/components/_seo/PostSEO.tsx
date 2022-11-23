import { ArticleJsonLd, NextSeo } from 'next-seo';
import React from 'react';

import appConfig from '@/app.config';

export type PostSEOProps = {
  url: string;
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  images: string[];
  noRobots?: boolean;
};

const generateFullUrl = (url: string) => {
  const fullUrl = `${appConfig.siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
  return encodeURI(fullUrl);
};

const PostSEO = ({
  url,
  title,
  description,
  publishedTime,
  modifiedTime,
  images,
  noRobots = false,
}: PostSEOProps) => {
  const fullUrl = generateFullUrl(url);
  const ogImages = images.map((image) => ({
    url: generateFullUrl(image),
    alt: `${title} thumbnail`,
  }));
  return (
    <>
      <NextSeo
        title={`${title}`}
        description={description}
        canonical={fullUrl}
        openGraph={{
          type: 'article',
          url: fullUrl,
          title: `${title}`,
          description,
          article: {
            publishedTime,
            modifiedTime,
            authors: [appConfig.social.github],
          },
          images: ogImages,
        }}
        twitter={{
          handle: `@${appConfig.social.twitter}`,
          site: `@${appConfig.social.twitter}`,
          cardType: 'summary_large_image',
        }}
        noindex={noRobots}
        nofollow={noRobots}
      />
      <ArticleJsonLd
        type="Blog"
        authorName={appConfig.author}
        dateModified={modifiedTime}
        datePublished={publishedTime}
        description={description}
        images={images}
        title={title}
        url={fullUrl}
      />
    </>
  );
};

export default PostSEO;
