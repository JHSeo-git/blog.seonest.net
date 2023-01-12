import Link from 'next/link';
import { notFound } from 'next/navigation';

import Hidden from '@/components/Hidden';
import PostCard, { PostCardSkeleton } from '@/components/PostCard';
import type { MDXFrontMatter } from '@/utils/mdxUtils';
import { getAllCategories, getPostsByCategory } from '@/utils/mdxUtils';

type SerializedPostFromatter = MDXFrontMatter & { id: string };

const getPostsByCategoryInfo = async (slug: string) => {
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
    category: slug,
    posts: serializedPost,
  };
};

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    slug: category.name,
  }));
}

type PageProps = {
  params: PageParams;
};

async function CategoryPage({ params }: PageProps) {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    notFound();
  }

  const { category, posts } = await getPostsByCategoryInfo(slug);

  return (
    <>
      <Hidden>
        <h2>Posts by {category}</h2>
      </Hidden>
      <section>
        <div className="flex items-baseline justify-between px-6">
          <h1 className="text-5xl font-bold capitalize">{category}</h1>
          <p className="hidden text-lg text-gray-700 dark:text-gray-300 sm:block">
            {posts.length} Post{posts.length > 0 ? 's' : ''}
          </p>
        </div>
        <div className="h-6" />
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className="block [&:not(:first-of-type)]:mt-8"
          >
            <PostCard post={post} mode="card" />
          </Link>
        ))}
      </section>
    </>
  );
}

export default CategoryPage;
