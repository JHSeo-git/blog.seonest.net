import '@/styles/mdx.css';

import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Bio from '@/components/Bio';
import Comment from '@/components/Comment';
import Layout from '@/components/Layout';
import { Mdx } from '@/components/Mdx';
import PostNav from '@/components/PostNav';
import { getHeadings, postSorter } from '@/utils/contentlayer-utils';
import { getDistanceToNow } from '@/utils/date-utils';
import { generateFullUrl, getMetadata } from '@/utils/metadata-utils';
import { cn } from '@/utils/style-utils';

type PageParams = {
  slug: string[];
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

type PageProps = {
  params: PageParams;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params?.slug?.join('/') || '';

  const decodedSlug = decodeURIComponent(slug);

  const post = allPosts.find((post) => post.slugAsParams === decodedSlug);

  if (!post) {
    return getMetadata();
  }

  const title = `${post.title || 'Post'}`;
  const description = post.description || post.title;
  const ogImage = post.thumbnail ? generateFullUrl(post.thumbnail) : undefined;
  const url = post.slug;

  return getMetadata({ title, description, ogImage, url });
}

async function PostPage({ params }: PageProps) {
  const slug = params?.slug?.join('/') || '';

  const decodedSlug = decodeURIComponent(slug);
  const sortedPosts = allPosts.sort(postSorter);
  const postIndex = sortedPosts.findIndex((post) => post.slugAsParams === decodedSlug);
  const post = sortedPosts[postIndex];

  if (!post) {
    notFound();
  }

  const next = postIndex - 1 >= 0 && sortedPosts[postIndex - 1];
  const prev = postIndex + 1 < sortedPosts.length && sortedPosts[postIndex + 1];

  const toc = getHeadings(post.body.raw);

  return (
    <Layout mode="post" post={post}>
      <div className="flex items-start justify-center">
        <article className="max-w-[min(720px,100%)] shrink grow basis-[720px]">
          {post.thumbnail && (
            <div className="relative mb-10 overflow-hidden rounded-[20px]">
              <Image
                className="h-full w-full object-cover"
                src={post.thumbnail}
                alt="Thumbnail"
                width={750}
                height={488}
                priority
              />
            </div>
          )}
          <Mdx code={post.body.code} />
          <div className="mt-20">
            <div className="flex items-center justify-end">
              <div>
                <h3 className="text-right text-xs font-bold text-rose-500 dark:text-rose-400">
                  마지막 업데이트
                </h3>
                <p className="mt-1 text-right text-sm font-bold text-gray-500 dark:text-gray-400">
                  {getDistanceToNow(post.lastModified, { humanize: false })}
                </p>
              </div>
            </div>
            <hr
              className={cn(
                'm-0 p-0 outline-none border-none',
                'm-[72px] h-[3px] rounded-md border-white bg-indigo-700 dark:border-black dark:bg-indigo-300',
                'bg-gradient-to-r from-indigo-700 to-rose-700 dark:from-indigo-500 dark:to-rose-500'
              )}
            />
            <Bio />
            <div className="h-16" />
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="w-full md:w-auto">
                {prev && (
                  <Link href={prev.slug} className="group flex flex-col">
                    <h3 className="text-sm font-bold text-gray-700 transition-all group-hover:text-indigo-700 dark:text-gray-300 dark:group-hover:text-indigo-400">
                      이전
                    </h3>
                    <p className="mt-1 truncate font-bold transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                      {prev.title}
                    </p>
                  </Link>
                )}
              </div>
              <div className="w-full md:w-auto">
                {next && (
                  <Link href={next.slug} className="group flex flex-col items-end">
                    <h3 className="text-sm font-bold text-gray-700 transition-all group-hover:text-indigo-700 dark:text-gray-300 dark:group-hover:text-indigo-400">
                      다음
                    </h3>
                    <p className="mt-1 truncate font-bold transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>
            </div>
            <div className="h-14" />
            <Comment />
          </div>
        </article>
        <aside className="sticky top-[100px] ml-auto hidden max-h-[calc(100vh_-_100px)] shrink-[100000] grow-0 basis-[250px] overflow-y-auto xl:block">
          <PostNav toc={toc} title="Table Of Contents" />
        </aside>
      </div>
      <div className="h-12" />
    </Layout>
  );
}

export default PostPage;
