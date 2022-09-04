import { NextSeo } from 'next-seo';

import appConfig from '@/app.config';

export type PageSEOProps = {
  url: string;
  title: string;
  description: string;
  noRobots?: boolean;
};

const PageSEO = ({ url, title, description, noRobots = false }: PageSEOProps) => {
  const fullUrl = `${appConfig.siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
  const encodedUrl = encodeURI(fullUrl);

  return (
    <NextSeo
      title={`${title}`}
      description={description}
      canonical={encodedUrl}
      openGraph={{
        type: 'website',
        title: `${title}`,
        description,
        url: encodedUrl,
        images: [{ alt: title, url: appConfig.siteLogo }],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      noindex={noRobots}
      nofollow={noRobots}
    />
  );
};

export default PageSEO;
