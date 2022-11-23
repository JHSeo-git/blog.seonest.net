import { DefaultSeo } from 'next-seo';

import appConfig from '@/app.config';

function DefaultSEO() {
  return (
    <DefaultSeo
      title={appConfig.title}
      description={appConfig.description}
      openGraph={{
        type: 'blog',
        locale: 'ko_KR',
        url: appConfig.siteUrl,
        title: appConfig.title,
        description: appConfig.description,
        images: [{ url: appConfig.siteLogo, alt: appConfig.title }],
      }}
      twitter={{
        handle: `@${appConfig.social.twitter}`,
        site: `@${appConfig.social.twitter}`,
        cardType: 'summary_large_image',
      }}
    />
  );
}

export default DefaultSEO;
