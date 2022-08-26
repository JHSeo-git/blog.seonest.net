import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import Hidden from '@/components/Hidden';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Spacer from '@/components/Spacer';
import { colors, typography } from '@/constants/theme';
import { getDistanceToNow } from '@/utils/dateUtils.server';
import type { PostFrontMatter } from '@/utils/mdxUtils.server';
import { getAllPosts } from '@/utils/mdxUtils.server';

type SerializedPostFromatter = { id: string } & PostFrontMatter;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  const serialized: SerializedPostFromatter[] = posts.map((post) => ({
    id: `${post.frontMatter.title}_${post.frontMatter.date ?? Date.now()}`,
    title: post.frontMatter.title,
    subTitle: post.frontMatter.subTitle,
    description: post.frontMatter.description,
    date: post.frontMatter.date ? getDistanceToNow(post.frontMatter.date) : null,
    category: post.frontMatter.category,
    tags: post.frontMatter.tags,
    draft: post.frontMatter.draft,
  }));

  return {
    props: {
      posts: serialized,
    },
  };
};

interface HomePageProps {
  posts: SerializedPostFromatter[];
}
const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <Layout>
      <Hidden>
        <h1>JHSeo homepage</h1>
      </Hidden>
      <SectionTitle>최신 글</SectionTitle>
      <Spacer size="$9" />
      <PostsSection>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsSection>
    </Layout>
  );
};

const SectionTitle = styled.h2`
  font-size: ${typography.fontSizes.base};
  line-height: ${typography.lineHeight.heading};
  color: ${colors.secondary900};
`;

const PostsSection = styled.section``;

export default HomePage;
