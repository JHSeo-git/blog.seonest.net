import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PostCard from '@/components/PostCard';
import { postSorter } from '@/utils/contentlayer-utils';
import { getMetadata } from '@/utils/metadata-utils';

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return allPosts
    .map((post) => decodeURIComponent(post.category))
    .filter((category, index, self) => self.indexOf(category) === index)
    .map((category) => ({
      slug: category,
    }));
}

type PageProps = {
  params: PageParams;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = params?.slug;

  const decodedCategory = decodeURIComponent(category);

  if (!decodedCategory) {
    return getMetadata();
  }

  const capitalized = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

  const title = `${capitalized} Posts`;
  const description = `${capitalized} Posts`;
  const url = `categories/${decodedCategory}`;

  return getMetadata({ title, description, url });
}

async function CategoryPage({ params }: PageProps) {
  const category = params?.slug;

  if (typeof category !== 'string') {
    notFound();
  }

  const decodedCategory = decodeURIComponent(category);
  const posts = allPosts.filter((post) => post.category === decodedCategory).sort(postSorter);

  return (
    <>
      <section>
        <div className="flex items-baseline justify-between px-6">
          <h1 className="text-5xl font-bold capitalize">{category}</h1>
          <p className="hidden text-lg text-gray-700 dark:text-gray-300 sm:block">
            {posts.length} Post{posts.length > 0 ? 's' : ''}
          </p>
        </div>
        <div className="h-6" />
        {posts.map((post) => (
          <Link key={post._id} href={post.slug} className="block [&:not(:first-of-type)]:mt-8">
            <PostCard post={post} mode="card" />
          </Link>
        ))}
      </section>
    </>
  );
}

export default CategoryPage;
