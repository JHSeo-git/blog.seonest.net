import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

import Hidden from '@/components/Hidden';
import { postSorter } from '@/utils/contentlayer-utils';
import { getMetadata } from '@/utils/metadata-utils';

export const metadata = getMetadata({ title: 'About' });

async function AbountPage() {
  const latestPosts = allPosts.sort(postSorter).slice(0, 5);

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col">
      <Hidden>
        <h1>About JHSeo</h1>
      </Hidden>
      <header className="mx-auto w-full px-6">
        <div className="flex items-center justify-between border-b py-4">
          <Link href="/">
            <span className="rounded-l bg-slate-900 py-1 pl-2 pr-1 font-semibold text-white">
              seonest
            </span>
            <span className="rounded-r bg-indigo-700 py-1 pl-1 pr-2 font-semibold text-white">
              jhseo
            </span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto w-full divide-y-2 px-6">
          <article className="py-6">
            <h2 className="text-xl font-semibold">Recent Posts</h2>
            <ul className="py-4">
              {latestPosts.map((post) => (
                <li key={post._id}>
                  <Link href={post.slug}>
                    <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="py-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <ul className="py-4">
              <li>
                <Link href="https://seonest.net" target="_blank" rel="noopener noreferrer">
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    seonest
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/seonest-post-gen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    seonest-post-gen
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://blogmark.seonest.net" target="_blank" rel="noopener noreferrer">
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    blogmark
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://own-your-tag.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    own your tag
                  </span>
                </Link>
              </li>
            </ul>
          </article>
          <article className="py-6">
            <h2 className="text-xl font-semibold">Practices</h2>
            <ul className="py-4">
              <li>
                <Link
                  href="https://practice-complex-context.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    Complex React Context APIs
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://practice-storybook-vite.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    Storybook using Headless for Design System
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://practice-tab-navigation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    Url based tab Routing using react-router 6
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://pagination-nextjs-13.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    Pagination using Next.js 13 + React 18
                  </span>
                </Link>
              </li>
            </ul>
          </article>
          <article className="py-6">
            <h2 className="text-xl font-semibold">Links</h2>
            <ul className="py-4">
              <li>
                <Link href="https://github.com/jhseo-git" target="_blank" rel="noopener noreferrer">
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    https://github.com/jhseo-git
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/jhseo_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                    https://twitter.com/jhseo_dev
                  </span>
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </main>
    </div>
  );
}

export default AbountPage;
