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

const PostSEO = ({
  url,
  title,
  description,
  publishedTime,
  modifiedTime,
  images,
  noRobots = false,
}: PostSEOProps) => {
  const fullUrl = `${appConfig.siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
  const encodedUrl = encodeURI(fullUrl);
  const ogImages = images.map((image) => ({
    url: image,
    alt: `${title} thumbnail`,
  }));
  return (
    <>
      <NextSeo
        title={`${title}`}
        description={description}
        canonical={encodedUrl}
        openGraph={{
          type: 'article',
          url: encodedUrl,
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
        url={encodedUrl}
      />
    </>
  );
};

export default PostSEO;
