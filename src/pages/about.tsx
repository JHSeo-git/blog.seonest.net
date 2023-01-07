import type { GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import appConfig from '@/app.config';
import components from '@/components/_mdxComponents';
import { PageSEO } from '@/components/_seo';
import Container from '@/components/Container';
import Hidden from '@/components/Hidden';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { About, MDXFrontMatter } from '@/utils/mdxUtils.server';
import { getAbout } from '@/utils/mdxUtils.server';

export const getStaticProps: GetStaticProps = async () => {
  const aboutMdx = await getAbout();

  return {
    props: {
      source: aboutMdx.source,
      frontMatter: aboutMdx.frontMatter,
      toc: aboutMdx.toc,
    },
  };
};

type AboutPageProps = NonNullable<About> & {
  frontMatter: MDXFrontMatter;
};

const AboutPage: NextPage<AboutPageProps> = ({ source, frontMatter }) => {
  return (
    <>
      <PageSEO url="about" title="About JHSeo - Seonest" description={appConfig.description} />
      <Container className="py-[72px]">
        <Hidden>
          <h1>About JHSeo</h1>
        </Hidden>
        <div className="flex items-center justify-end">
          <p className="text-xs text-gray-700 mr-2 italic font-bold">Last updated:</p>
          <p className="text-xs text-gray-700 mr-2 italic">
            {getDistanceToNow(frontMatter.lastModified, { humanize: false })}
          </p>
        </div>
        <MDXRemote {...source} components={components} />
      </Container>
    </>
  );
};

export default AboutPage;
