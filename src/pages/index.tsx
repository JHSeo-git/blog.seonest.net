import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/utils/mdxUtils.server';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  const serialized = posts.map((post) => ({
    id: `${post.frontMatter.title}_${post.frontMatter.date ?? Date.now()}`,
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    date: post.frontMatter.date,
    category: post.frontMatter.category,
    tags: post.frontMatter.tags,
    draft: post.frontMatter.draft,
  }));

  console.log(serialized);

  return {
    props: {
      posts: serialized,
    },
  };
};

interface HomePageProps {
  posts: {
    id: string;
    title: string;
    description: string | null;
    date: string | null;
    category: string | null;
    tags: string[] | null;
    draft: boolean | null;
  }[];
}
const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} />
      ))}
    </Layout>
  );
};

export default HomePage;
