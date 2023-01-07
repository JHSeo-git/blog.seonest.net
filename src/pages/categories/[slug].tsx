import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import appConfig from '@/app.config';
import { PageSEO } from '@/components/_seo';
import Hidden from '@/components/Hidden';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';
import type { MDXFrontMatter } from '@/utils/mdxUtils.server';
import { getAllCategories, getPostsByCategory } from '@/utils/mdxUtils.server';

type SerializedPostFromatter = { id: string } & MDXFrontMatter;

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
    date: post.frontMatter.date,
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
  useBodyBackgroundColorEffect('#f3f4f6');

  return (
    <>
      <PageSEO
        url={`categories/${category}`}
        title={`${category.toUpperCase()} Posts - Seonest`}
        description={appConfig.description}
      />
      <Layout mode="category">
        <Hidden>
          <h1>Posts by {category}</h1>
        </Hidden>
        <section>
          <div className="flex items-baseline justify-between px-6">
            <h1 className="text-5xl font-bold capitalize">{category}</h1>
            <p className="hidden text-lg text-gray-700 sm:block">
              {posts.length} Post{posts.length > 0 ? 's' : ''}
            </p>
          </div>
          <div className="h-6" />
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="block transition-color [&:not(:first-of-type)]:mt-8 hover:text-indigo-700"
            >
              <PostCard post={post} mode="card" />
            </Link>
          ))}
        </section>
      </Layout>
    </>
  );
};

export default CategoryPage;
