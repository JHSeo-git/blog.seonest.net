import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';

import components from '@/components/_mdxComponents';
import Layout from '@/components/Layout';
import PostNav from '@/components/PostNav';
import Spacer from '@/components/Spacer';
import { breakpoints, colors, spaces, typography } from '@/constants/theme';
import type { Post, PostFrontMatter } from '@/utils/mdxUtils.server';
import { getAllSlugs, getPost } from '@/utils/mdxUtils.server';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug: slug.startsWith('/') ? slug.slice(1).split('/') : slug.split('/') },
  }));

  return {
    paths,
    fallback: false,
  };
};

type SerializedPostFromatter = { id: string } & PostFrontMatter;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugs = params?.slug;

  if (!Array.isArray(slugs)) {
    return {
      notFound: true,
    };
  }

  const slug = slugs.join('/');
  const mdx = await getPost(slug);

  if (!mdx) {
    return {
      notFound: true,
    };
  }

  const serializedFrontMatter: SerializedPostFromatter = {
    id: `${mdx.frontMatter.slug}_${mdx.frontMatter.date ?? Date.now()}`,
    title: mdx.frontMatter.title,
    subTitle: mdx.frontMatter.subTitle,
    description: mdx.frontMatter.description,
    date: mdx.frontMatter.date,
    category: mdx.frontMatter.category,
    tags: mdx.frontMatter.tags,
    draft: mdx.frontMatter.draft,
    slug: mdx.frontMatter.slug,
    readingTime: mdx.frontMatter.readingTime,
    lastModified: mdx.frontMatter.lastModified,
  };

  return {
    props: {
      source: mdx.source,
      frontMatter: serializedFrontMatter,
      toc: mdx.toc,
    },
  };
};

type PostPageProps = NonNullable<Post> & {
  frontMatter: SerializedPostFromatter;
};

const PostPage: NextPage<PostPageProps> = ({ source, frontMatter, toc }) => {
  return (
    <Layout mode="post" postFrontMatter={frontMatter}>
      <MDXWrapper>
        <MDXArticle>
          <MDXRemote {...source} components={components} />
          <MDXFooter>
            <DateBox>
              <BoxLabel>마지막 업데이트</BoxLabel>
              <BoxValue>{frontMatter.lastModified}</BoxValue>
            </DateBox>
          </MDXFooter>
        </MDXArticle>
        <MDXAside>
          <PostNav toc={toc} title="Table Of Contents" />
        </MDXAside>
      </MDXWrapper>
      <Spacer size="$10" />
    </Layout>
  );
};

const MDXWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MDXArticle = styled.article`
  flex: 1 1 750px;
  max-width: min(750px, 100%);
`;
const MDXAside = styled.aside`
  display: none;
  flex: 0 100000 230px;
  margin-left: auto;

  position: sticky;
  top: 100px;

  max-height: calc(100vh - 100px);
  overflow-y: auto;

  @media (min-width: ${breakpoints.xl}) {
    display: block;
  }
`;

const MDXFooter = styled.div`
  margin-top: ${spaces.$14};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DateBox = styled.div``;
const BoxLabel = styled.h3`
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.gray11}; ;
`;
const BoxValue = styled.p`
  margin-top: ${spaces.$2};
  font-size: ${typography.fontSizes.lg};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.hiContrast};
`;

export default PostPage;
