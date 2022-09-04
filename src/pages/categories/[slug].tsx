import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import appConfig from '@/app.config';
import PageSEO from '@/components/_seo/PageSEO';
import Hidden from '@/components/Hidden';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Spacer from '@/components/Spacer';
import { breakpoints, colors, spaces, typography } from '@/constants/theme';
import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { PostFrontMatter } from '@/utils/mdxUtils.server';
import { getAllCategories, getPostsByCategory } from '@/utils/mdxUtils.server';

type SerializedPostFromatter = { id: string } & PostFrontMatter;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();
  const paths = categories.map((category) => ({
    params: { slug: category.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const posts = await getPostsByCategory(slug);

  const serializedPost: SerializedPostFromatter[] = posts.map((post) => ({
    id: `${post.frontMatter.slug}_${post.frontMatter.date ?? Date.now()}`,
    title: post.frontMatter.title,
    subTitle: post.frontMatter.subTitle,
    description: post.frontMatter.description,
    date: post.frontMatter.date ? getDistanceToNow(post.frontMatter.date) : null,
    category: post.frontMatter.category,
    tags: post.frontMatter.tags,
    draft: post.frontMatter.draft,
    slug: post.frontMatter.slug,
  }));

  return {
    props: {
      category: slug,
      posts: serializedPost,
    },
  };
};

interface CategoryPageProps {
  category: string;
  posts: SerializedPostFromatter[];
}
const CategoryPage: NextPage<CategoryPageProps> = ({ category, posts }) => {
  useBodyBackgroundColorEffect('gray3');

  return (
    <>
      <PageSEO
        url={`categories/${category}`}
        title={`${category} Posts`}
        description={appConfig.description}
      />
      <Layout mode="category">
        <Hidden>
          <h1>Posts by {category}</h1>
        </Hidden>
        <PostsSection>
          <SectionHeader>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryCount>
              {posts.length} Post{posts.length > 0 ? 's' : ''}
            </CategoryCount>
          </SectionHeader>
          <Spacer size="$4" />
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`} passHref>
              <PostLink>
                <PostCard post={post} mode="card" />
              </PostLink>
            </Link>
          ))}
        </PostsSection>
      </Layout>
    </>
  );
};

const PostsSection = styled.section``;
const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: ${spaces.$6};
  padding-right: ${spaces.$6};
`;
const CategoryTitle = styled.h1`
  font-size: ${typography.fontSizes['3xl']};
  text-transform: capitalize;
`;
const CategoryCount = styled.p`
  display: none;
  font-size: ${typography.fontSizes.lg};
  color: ${colors.gray11};

  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;

const PostLink = styled.a`
  display: block;
  transition: color 0.2s ease-in-out;

  &:not(:first-of-type) {
    margin-top: ${spaces.$8};
  }

  @media (hover: hover) {
    &:hover {
      color: ${colors.primary900};
    }
  }
`;

export default CategoryPage;
