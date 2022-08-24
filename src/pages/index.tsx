import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import type { Post } from '@/utils/mdxUtils.server';
import { getAllPosts } from '@/utils/mdxUtils.server';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

interface HomePageProps {
  posts: NonNullable<Post>[];
}
const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <PostCard key={post.frontMatter.title} title={post.frontMatter.title} />
      ))}
    </Layout>
  );
};

export default HomePage;
