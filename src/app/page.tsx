import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { postSorter } from '@/utils/contentlayer-utils';

async function IndexPage() {
  const posts = allPosts.sort(postSorter);

  return (
    <main className="mx-auto max-w-4xl py-10">
      <h1 className="text-2xl font-bold leading-normal text-slate-700 dark:text-slate-200">
        모든 글
      </h1>
      <div className="h-14" />
      {posts.map((post) => (
        <Link
          key={post._id}
          href={post.slug}
          className="block transition-colors [&:not(:first-of-type)]:mt-[72px]"
        >
          <Card post={post} />
        </Link>
      ))}
    </main>
  );
}

export default IndexPage;
