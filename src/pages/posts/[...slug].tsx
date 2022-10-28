import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import styled, { css } from 'styled-components';

import components from '@/components/_mdxComponents';
import Hr from '@/components/_mdxComponents/Hr';
import PostSEO from '@/components/_seo/PostSEO';
import Bio from '@/components/Bio';
import Comment from '@/components/Comment';
import Layout from '@/components/Layout';
import PostNav from '@/components/PostNav';
import Spacer from '@/components/Spacer';
import { breakpoints, colors, spaces, typography } from '@/constants/theme';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter, Post } from '@/utils/mdxUtils.server';
import { getPrevNextBySlug } from '@/utils/mdxUtils.server';
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

type SerializedPostFromatter = { id: string } & MDXFrontMatter;

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

  const prevnext = await getPrevNextBySlug(slug);

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
    thumbnail: mdx.frontMatter.thumbnail,
  };

  return {
    props: {
      source: mdx.source,
      frontMatter: serializedFrontMatter,
      toc: mdx.toc,
      prev: prevnext.prev && {
        title: prevnext.prev.frontMatter.title,
        slug: prevnext.prev.frontMatter.slug,
      },
      next: prevnext.next && {
        title: prevnext.next.frontMatter.title,
        slug: prevnext.next.frontMatter.slug,
      },
    },
  };
};

type PostPrevNext = {
  title: string;
  slug: string;
};
type PostPageProps = NonNullable<Post> & {
  frontMatter: SerializedPostFromatter;
  prev?: PostPrevNext;
  next?: PostPrevNext;
};

const PostPage: NextPage<PostPageProps> = ({ source, frontMatter, toc, prev, next }) => {
  const images = frontMatter.thumbnail ? [frontMatter.thumbnail] : [];

  return (
    <>
      <PostSEO
        url={`posts/${frontMatter.slug}`}
        title={frontMatter.title}
        description={frontMatter.description ?? frontMatter.title}
        images={images}
        publishedTime={frontMatter.date ?? ''}
        modifiedTime={frontMatter.lastModified ?? ''}
      />
      <Layout mode="post" postFrontMatter={frontMatter}>
        <MDXWrapper>
          <MDXArticle>
            {frontMatter.thumbnail && (
              <MDXThumbnailWrapper>
                <MDXThumbnail
                  src={frontMatter.thumbnail}
                  alt="Thumbnail"
                  width={750}
                  height={488}
                  placeholder="blur"
                  blurDataURL={frontMatter.thumbnail}
                  priority
                />
              </MDXThumbnailWrapper>
            )}
            <MDXRemote {...source} components={components} />
            <MDXFooter>
              <MDXFooterTop>
                <DateBox>
                  <BoxLabel>마지막 업데이트</BoxLabel>
                  <BoxValue>
                    {getDistanceToNow(frontMatter.lastModified, { humanize: false })}
                  </BoxValue>
                </DateBox>
              </MDXFooterTop>
              <Hr />
              <Bio />
              <Spacer size="$14" />
              <MDXFooterNav>
                <PrevNextWrapper>
                  {prev && (
                    <PrevNext href={`/posts/${prev.slug}`}>
                      <PrevNextLabel>이전</PrevNextLabel>
                      <PrevNextTitle>{prev.title}</PrevNextTitle>
                    </PrevNext>
                  )}
                </PrevNextWrapper>
                <PrevNextWrapper $isNext>
                  {next && (
                    <PrevNext href={`/posts/${next.slug}`} $isNext>
                      <PrevNextLabel>다음</PrevNextLabel>
                      <PrevNextTitle>{next.title}</PrevNextTitle>
                    </PrevNext>
                  )}
                </PrevNextWrapper>
              </MDXFooterNav>
              <Spacer size="$14" />
              <Comment />
            </MDXFooter>
          </MDXArticle>
          <MDXAside>
            <PostNav toc={toc} title="Table Of Contents" />
          </MDXAside>
        </MDXWrapper>
        <Spacer size="$10" />
      </Layout>
    </>
  );
};

const MDXWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MDXThumbnailWrapper = styled.div`
  position: relative;
  margin-bottom: ${spaces.$10};
`;

const MDXThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MDXArticle = styled.article`
  flex: 1 1 720px;
  max-width: min(720px, 100%);
`;
const MDXAside = styled.aside`
  display: none;
  flex: 0 100000 250px;
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
`;
const MDXFooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MDXFooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${spaces.$6};
`;
const DateBox = styled.div``;
const BoxLabel = styled.h3`
  font-size: ${typography.fontSizes.xs};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.secondary900};
  text-align: right;
`;
const BoxValue = styled.p`
  margin-top: ${spaces.$1};
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.gray11};
  text-align: right;
`;
const PrevNextWrapper = styled.div<{ $isNext?: boolean }>`
  width: 100%;
  ${({ $isNext }) =>
    $isNext &&
    css`
      align-items: flex-end;
    `};

  @media (min-width: ${breakpoints.md}) {
    width: auto;
  }
`;
const PrevNext = styled(Link)<{ $isNext?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $isNext }) =>
    $isNext &&
    css`
      align-items: flex-end;
    `};
`;
const PrevNextLabel = styled.h3`
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.gray11};
  transition: color 0.2s ease;

  @media (hover: hover) {
    ${PrevNext}:hover & {
      color: ${colors.primary900};
    }
  }
`;
const PrevNextTitle = styled.p`
  margin-top: ${spaces.$1};
  font-size: ${typography.fontSizes.base};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.hiContrast};
  transition: color 0.2s ease;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (hover: hover) {
    ${PrevNext}:hover & {
      color: ${colors.primary900};
    }
  }
`;

export default PostPage;
