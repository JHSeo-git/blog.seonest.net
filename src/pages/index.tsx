import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import Hidden from '@/components/Hidden';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Spacer from '@/components/Spacer';
import { breakpoints, colors, radii, spaces, typography } from '@/constants/theme';
import type { CategoryInfo, MDXFrontMatter } from '@/utils/mdxUtils.server';
import { getAllCategories } from '@/utils/mdxUtils.server';
import { getAllPosts } from '@/utils/mdxUtils.server';

type SerializedPostFromatter = { id: string } & MDXFrontMatter;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  const serializedPost: SerializedPostFromatter[] = posts.map((post) => ({
    id: `${post.frontMatter.slug}_${post.frontMatter.date ?? Date.now()}`,
    title: post.frontMatter.title,
    subTitle: post.frontMatter.subTitle,
    description: post.frontMatter.description,
    date: post.frontMatter.date,
    category: post.frontMatter.category,
    tags: post.frontMatter.tags,
    draft: post.frontMatter.draft,
    slug: post.frontMatter.slug,
  }));

  return {
    props: {
      posts: serializedPost,
      categories,
    },
  };
};

interface HomePageProps {
  posts: SerializedPostFromatter[];
  categories: CategoryInfo[];
}
const HomePage: NextPage<HomePageProps> = ({ posts, categories }) => {
  return (
    <Layout mode="base">
      <Hidden>
        <h1>Seonest homepage</h1>
      </Hidden>
      <PageGrid>
        <PostsSection>
          <SectionTitle>최신 글</SectionTitle>
          <Spacer size="$12" />
          {posts.map((post) => (
            <PostLink key={post.id} href={`/posts/${post.slug}`}>
              <PostCard post={post} />
            </PostLink>
          ))}
        </PostsSection>
        <CategoriesSection>
          <SectionTitle>카테고리</SectionTitle>
          <Spacer size="$12" />
          {categories.map((category) => (
            <CategoryLink key={category.name} href={`/categories/${category.name}`}>
              <CategoryPill />
              {category.name}
            </CategoryLink>
          ))}
        </CategoriesSection>
      </PageGrid>
    </Layout>
  );
};

const PageGrid = styled.div`
  display: grid;
  grid-template: 'posts' 'categories';
  gap: ${spaces.$14};

  @media (min-width: ${breakpoints.md}) {
    grid-template: 'posts categories' / 2fr 1fr;
  }
`;

const PostsSection = styled.section`
  grid-area: posts;
`;
const CategoriesSection = styled.section`
  grid-area: categories;
`;

const SectionTitle = styled.h2`
  font-size: ${typography.fontSizes.base};
  line-height: ${typography.lineHeight.heading};
  color: ${colors.secondary900};
`;

const PostLink = styled(Link)`
  display: block;
  transition: color 0.2s ease-in-out;

  &:not(:first-of-type) {
    margin-top: ${spaces.$14};
  }

  @media (hover: hover) {
    &:hover {
      color: ${colors.primary900};
    }
  }
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.medium};
  padding: ${spaces.$1} ${spaces.$3};
  margin-right: ${spaces.$4};
  margin-bottom: ${spaces.$4};

  text-transform: capitalize;
  color: ${colors.primary900};

  position: relative;
`;

const CategoryPill = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  inset: 0;

  border-radius: ${radii.base};
  background-color: ${colors.primary300};
  transform-origin: center center;

  transition: transform 0.2s ease, background-color 0.2s ease;
  @media (hover: hover) {
    ${CategoryLink}:hover & {
      transform: scale(1.1);
      background-color: ${colors.primary400};
    }
  }
`;

export default HomePage;
