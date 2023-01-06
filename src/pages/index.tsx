import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import Hidden from '@/components/Hidden';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
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
      <div className="grid [grid-template:'posts'_'categories'] gap-[72px] md:[grid-template:'posts_categories'_/_2fr_1fr]">
        <section className="[grid-area:posts]">
          <h2 className="leading-normal text-rose-600 font-bold">최신 글</h2>
          <div className="h-14" />
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="block transition-colors hover:text-indigo-700 [&:not(:first-of-type)]:mt-[72px]"
            >
              <PostCard post={post} />
            </Link>
          ))}
        </section>
        <section className="[grid-area:categories]">
          <h2 className="leading-normal text-rose-600 font-bold">카테고리</h2>
          <div className="h-14" />
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.name}`}
              className="inline-block text-sm font-bold px-3 py-2 mr-4 mb-4 capitalize text-indigo-700 relative group"
            >
              <div className="absolute inset-0 -z-[1] w-full h-full rounded-md origin-center transition-all bg-indigo-50 group-hover:scale-110 group-hover:bg-indigo-100" />
              {category.name}
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
