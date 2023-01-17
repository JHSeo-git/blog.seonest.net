import Link from 'next/link';

import Hidden from '@/components/Hidden';
import PostCard from '@/components/PostCard';
import type { MDXFrontMatter } from '@/utils/mdxUtils';
import { getAllCategories } from '@/utils/mdxUtils';
import { getAllPosts } from '@/utils/mdxUtils';

type SerializedPostFromatter = { id: string } & MDXFrontMatter;

const getPostsAndCategories = async () => {
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
    posts: serializedPost,
    categories,
  };
};

async function IndexPage() {
  const { posts, categories } = await getPostsAndCategories();

  return (
    <>
      <Hidden>
        <h1>Seonest homepage</h1>
      </Hidden>
      <div className="grid gap-[72px] [grid-template:'posts'_'categories'] md:[grid-template:'posts_categories'_/_2fr_1fr]">
        <section className="[grid-area:posts]">
          <h2 className="font-bold leading-normal text-rose-600 dark:text-rose-500">최신 글</h2>
          <div className="h-14" />
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="block transition-colors [&:not(:first-of-type)]:mt-[72px]"
            >
              <PostCard post={post} />
            </Link>
          ))}
        </section>
        <section className="[grid-area:categories]">
          <h2 className="font-bold leading-normal text-rose-600 dark:text-rose-500">카테고리</h2>
          <div className="h-14" />
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.name}`}
              className="group relative mr-4 mb-4 inline-block px-3 py-2 text-sm font-bold capitalize text-indigo-700 dark:text-indigo-100"
            >
              <div className="absolute inset-0 z-[-1] h-full w-full origin-center rounded-md bg-indigo-50 transition-all group-hover:scale-110 group-hover:bg-indigo-100 dark:bg-indigo-900 dark:group-hover:bg-indigo-800" />
              {category.name}
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}

export default IndexPage;
