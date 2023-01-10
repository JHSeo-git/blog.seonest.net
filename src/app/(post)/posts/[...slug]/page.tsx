import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import components from '@/components/_mdxComponents';
import Hr from '@/components/_mdxComponents/Hr';
import Bio from '@/components/Bio';
import Comment from '@/components/Comment';
import Layout from '@/components/Layout';
import MDXRemoteClient from '@/components/MDXRemoteClient';
import PostNav from '@/components/PostNav';
import { getDistanceToNow } from '@/utils/dateUtils';
import { getBlurThumbnail } from '@/utils/imageUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils';
import { getAllSlugs, getPost, getPrevNextBySlug } from '@/utils/mdxUtils';

type SerializedPostFromatter = MDXFrontMatter & { id: string; blurThumbnail?: string | null };

const getPostInfo = async (slugs: string[]) => {
  const slug = slugs.map((slug) => decodeURIComponent(slug)).join('/');
  const mdx = await getPost(slug);

  if (!mdx) {
    notFound();
  }

  const prevnext = await getPrevNextBySlug(slug);
  const thumbnailPlaceHolder = await getBlurThumbnail(mdx.frontMatter.thumbnail);

  const serializedFrontMatter: SerializedPostFromatter = {
    id: `${mdx.frontMatter.slug}_${mdx.frontMatter.date ?? Date.now()}`,
    title: mdx.frontMatter.title,
    subTitle: mdx.frontMatter.subTitle,
    description: mdx.frontMatter.description,
    date: mdx.frontMatter.date,
    category: mdx.frontMatter.category,
    tags: mdx.frontMatter.tags,
    draft: mdx.frontMatter.draft,
    slug: mdx.frontMatter.slug,
    readingTime: mdx.frontMatter.readingTime,
    lastModified: mdx.frontMatter.lastModified,
    thumbnail: mdx.frontMatter.thumbnail,
    blurThumbnail: thumbnailPlaceHolder ?? mdx.frontMatter.thumbnail,
  };

  return {
    source: mdx.source,
    frontMatter: serializedFrontMatter,
    toc: mdx.toc,
    prev: prevnext.prev && {
      title: prevnext.prev.frontMatter.title,
      slug: prevnext.prev.frontMatter.slug,
    },
    next: prevnext.next && {
      title: prevnext.next.frontMatter.title,
      slug: prevnext.next.frontMatter.slug,
    },
  };
};

type PageParams = {
  slug: string[];
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug.startsWith('/') ? slug.slice(1).split('/') : slug.split('/'),
  }));
}

type PageProps = {
  params: PageParams;
};

async function PostPage({ params }: PageProps) {
  const slugs = params?.slug;

  if (!Array.isArray(slugs)) {
    notFound();
  }

  if (slugs.some((slug) => typeof slug !== 'string')) {
    notFound();
  }

  const { source, frontMatter, toc, prev, next } = await getPostInfo(slugs);

  return (
    <Layout mode="post" postFrontMatter={frontMatter}>
      <div className="flex items-start justify-center">
        <article className="flex-grow flex-shrink basis-[720px] max-w-[min(720px,100%)]">
          {frontMatter.thumbnail && (
            <div className="relative mb-10">
              <Image
                className="w-full h-full object-cover"
                src={frontMatter.thumbnail}
                alt="Thumbnail"
                width={750}
                height={488}
                placeholder={frontMatter.blurThumbnail ? 'blur' : undefined}
                blurDataURL={frontMatter.blurThumbnail || undefined}
                priority
              />
            </div>
          )}
          <MDXRemoteClient {...source} components={components} />
          <div className="mt-20">
            <div className="flex items-center justify-end">
              <div>
                <h3 className="text-xs font-bold text-rose-500 dark:text-rose-400 text-right">
                  마지막 업데이트
                </h3>
                <p className="mt-1 text-sm font-bold text-gray-500 dark:text-gray-400 text-right">
                  {getDistanceToNow(frontMatter.lastModified, { humanize: false })}
                </p>
              </div>
            </div>
            <Hr />
            <Bio />
            <div className="h-16" />
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="w-full md:w-auto">
                {prev && (
                  <Link href={`/posts/${prev.slug}`} className="flex flex-col group">
                    <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                      이전
                    </h3>
                    <p className="mt-1 font-bold transition-all truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                      {prev.title}
                    </p>
                  </Link>
                )}
              </div>
              <div className="w-full md:w-auto">
                {next && (
                  <Link href={`/posts/${next.slug}`} className="flex flex-col group items-end">
                    <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                      다음
                    </h3>
                    <p className="mt-1 font-bold transition-all truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
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
        <aside className="hidden flex-grow-0 flex-shrink-[100000] basis-[250px] ml-auto sticky top-[100px] max-h-[calc(100vh_-_100px)] overflow-y-auto xl:block">
          <PostNav toc={toc} title="Table Of Contents" />
        </aside>
      </div>
      <div className="h-12" />
    </Layout>
  );
}

export default PostPage;
