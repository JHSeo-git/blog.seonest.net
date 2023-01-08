import appConfig from '@/app.config';
import { generateFullUrl } from '@/utils/mdxUtils';

const generateFullSiteUrl = (url?: string) => {
  if (!url) {
    return appConfig.siteUrl;
  }

  return generateFullUrl(url);
};

interface HeadTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: 'blog' | 'website';
  url?: string;
}

function HeadTags({ ogType = 'blog', title, description, ogImage, url }: HeadTagsProps) {
  const fullSiteUrl = generateFullSiteUrl(url);

  return (
    <>
      <title>{title || appConfig.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={description || appConfig.description} />

      <meta property="og:title" content={title || appConfig.title} />
      <meta property="og:description" content={description || appConfig.description} />
      <meta property="og:site_name" content={appConfig.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullSiteUrl} />
      <meta property="og:image" content={ogImage || appConfig.ogImage} />
      <meta property="og:image:alt" content={title || appConfig.title} />
      <meta property="og:image" content={appConfig.siteLogo} />
      <meta property="og:image:alt" content={title || appConfig.title} />
      <meta property="og:locale" content="ko_KR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || appConfig.title} />
      <meta name="twitter:description" content={description || appConfig.description} />
      <meta property="twitter:domain" content={appConfig.siteDomain} />
      <meta property="twitter:url" content={fullSiteUrl} />
      <meta name="twitter:image" content={ogImage || appConfig.ogImage} />
      <meta name="twitter:image:alt" content={title || appConfig.title} />
      <meta name="twitter:image" content={appConfig.siteLogo} />
      <meta name="twitter:image:alt" content={title || appConfig.title} />
      <meta name="twitter:site" content={`@${appConfig.social.twitter}`} />
      <meta name="twitter:creator" content={`@${appConfig.social.twitter}`} />
    </>
  );
}

export default HeadTags;
