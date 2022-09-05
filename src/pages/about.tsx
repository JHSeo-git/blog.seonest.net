import type { GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';

import appConfig from '@/app.config';
import components from '@/components/_mdxComponents';
import PageSEO from '@/components/_seo/PageSEO';
import Container from '@/components/Container';
import Hidden from '@/components/Hidden';
import { colors, spaces, typography } from '@/constants/theme';
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
      <PageSEO url="about" title="About JHSeo" description={appConfig.description} />
      <AboutContainer>
        <Hidden>
          <h1>About JHSeo</h1>
        </Hidden>
        <LastModifiedBox>
          <Label>Last updated:</Label>
          <LastUpdated>
            {getDistanceToNow(frontMatter.lastModified, { humanize: false })}
          </LastUpdated>
        </LastModifiedBox>
        <MDXRemote {...source} components={components} />
      </AboutContainer>
    </>
  );
};

const AboutContainer = styled(Container)`
  padding-top: ${spaces.$14};
  padding-bottom: ${spaces.$14};
`;
const LastModifiedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Label = styled.p`
  font-size: ${typography.fontSizes.xs};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.gray11};
  margin-right: ${spaces.$2};
  font-style: italic;
`;
const LastUpdated = styled.p`
  font-size: ${typography.fontSizes.xs};
  color: ${colors.gray11};
  font-style: italic;
`;

export default AboutPage;
