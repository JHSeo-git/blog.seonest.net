import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

import Hidden from '@/components/Hidden';
import PostCard from '@/components/PostCard';
import { postSorter } from '@/utils/contentlayer-utils';

async function IndexPage() {
  const posts = allPosts.sort(postSorter);
  const categories = allPosts
    .map((post) => decodeURIComponent(post.category))
    .filter((category, index, self) => self.indexOf(category) === index);

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
              key={post._id}
              href={post.slug}
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
              key={category}
              href={`/categories/${category}`}
              className="group relative mr-4 mb-4 inline-block px-3 py-2 text-sm font-bold capitalize text-indigo-700 dark:text-indigo-100"
            >
              <div className="absolute inset-0 z-[-1] h-full w-full origin-center rounded-md bg-indigo-50 transition-all group-hover:scale-110 group-hover:bg-indigo-100 dark:bg-indigo-900 dark:group-hover:bg-indigo-800" />
              {category}
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}

export default IndexPage;
