import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import Hidden from '@/components/Hidden';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Spacer from '@/components/Spacer';
import { colors, spaces, typography } from '@/constants/theme';
import { getDistanceToNow } from '@/utils/dateUtils.server';
import type { PostFrontMatter } from '@/utils/mdxUtils.server';
import { getAllPosts } from '@/utils/mdxUtils.server';

type SerializedPostFromatter = { id: string } & PostFrontMatter;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  const serialized: SerializedPostFromatter[] = posts.map((post) => ({
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
        <h1>Seonest homepage</h1>
      </Hidden>
      <PageSection>
        <SectionTitle>최신 글</SectionTitle>
        <Spacer size="$9" />
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.slug}`} passHref>
            <PostLink>
              <PostCard post={post} />
            </PostLink>
          </Link>
        ))}
      </PageSection>
    </Layout>
  );
};

const PageSection = styled.section``;
const SectionTitle = styled.h2`
  font-size: ${typography.fontSizes.base};
  line-height: ${typography.lineHeight.heading};
  color: ${colors.secondary900};
`;

const PostLink = styled.a`
  display: block;
  transition: color 0.2s ease-in-out;

  &:not(:first-of-type) {
    margin-top: ${spaces.$12};
  }

  @media (hover: hover) {
    &:hover {
      color: ${colors.primary900};
    }
  }
`;

export default HomePage;
