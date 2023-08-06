import '@/styles/mdx.css';

import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Bio } from '@/components/Bio';
import { Comment } from '@/components/Comment';
import { DateDistance } from '@/components/DateDistance';
import { Icons } from '@/components/Icons';
import { Mdx } from '@/components/Mdx';
import PostNav from '@/components/PostNav';
import { PostViews } from '@/components/PostViews';
import { getHeadings, postSorter } from '@/utils/contentlayer-utils';
import { getDistanceToNow } from '@/utils/date-utils';
import { cn } from '@/utils/style-utils';

// @see https://github.com/rpearce/react-medium-image-zoom/issues/429#issuecomment-1663119432
export const runtime = 'nodejs';

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

  const title = post?.title;
  const description = post?.description;
  const url = post?.slug && `https://seonest.net${cleanUrl(post.slug)}`;
  const ogImage = post?.thumbnail ? cleanUrl(post.thumbnail) : '/opengraph-image.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, alt: post?.title }],
    },
  };
}

const cleanUrl = (url: string) => (url.startsWith('/') ? url : `/${url}`);

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
    <main className="mx-auto py-10 xl:grid xl:grid-cols-[1fr_280px] xl:gap-10">
      <div className="mx-auto w-full min-w-0 max-w-4xl xl:max-w-none">
        {post.thumbnail && (
          <div className="relative overflow-hidden rounded-xl md:rounded-[20px]">
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
        <div className="mt-10 border-b border-b-slate-200 pb-4 dark:border-b-slate-700">
          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <Icons.Timer width={16} height={16} />
              <p className="text-xs">{post.readingTime}</p>
            </div>
            <div className="flex items-center gap-1">
              <Icons.Calendar width={16} height={16} />
              <DateDistance date={post.date} options={{ humanize: false }} className="text-xs" />
            </div>
            <PostViews slug={post.slugAsParams} />
          </div>
          <h1 className="mt-2 text-4xl font-bold leading-tight lg:mt-4 lg:text-6xl">
            {post.title}
          </h1>
        </div>
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
              'border-none p-0 outline-none',
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
      </div>
      <div className="hidden xl:block">
        <div className="sticky top-[104px] max-h-[calc(100vh_-_104px)] overflow-y-auto">
          <PostNav toc={toc} title="On This Page" />
        </div>
      </div>
      <div className="h-12" />
    </main>
  );
}

export default PostPage;
