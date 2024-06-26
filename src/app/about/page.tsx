import Link from "next/link"
import { postSorter } from "@/utils/contentlayer-utils"
import { allPosts } from "contentlayer/generated"
import { twc } from "react-twc"

export const metadata = {
  title: "About",
}

const LinkText = twc.span`text-sm font-medium underline underline-offset-4`

async function AbountPage() {
  const latestPosts = allPosts.sort(postSorter).slice(0, 5)

  return (
    <main className="mx-auto max-w-4xl space-y-2 py-8">
      <article>
        <h1 className="font-mono font-bold">JHSeo</h1>
        <p>I&apos;m a software engineer.</p>
      </article>
      <article className="pt-6">
        <h2 className="font-mono text-lg">Recent Posts</h2>
        <ul className="list-disc space-y-4 py-4 pl-5">
          {latestPosts.map((post) => (
            <li key={post._id}>
              <Link href={post.slug}>
                <LinkText>{post.title}</LinkText>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      {/* <article className="py-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="list-disc space-y-1 py-4 pl-6">
          <li>
            <Link href="https://seonest.net" target="_blank" rel="noopener noreferrer">
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                Blog seonest.net
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
                Post generate cli for seonest.net
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://blogmark.seonest.net" target="_blank" rel="noopener noreferrer">
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                Blogmark
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://own-your-tag.vercel.app/" target="_blank" rel="noopener noreferrer">
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                Own your tag
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/JHSeo-git/fastify-esm-for-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                Fastify ESM for starter template
              </span>
            </Link>
          </li>
        </ul>
      </article>
      <article className="py-6">
        <h2 className="text-xl font-semibold">Practices</h2>
        <ul className="list-disc space-y-1 py-4 pl-6">
          <li>
            <Link
              href="https://please-notification.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                Practice email with react-email.
              </span>
            </Link>
          </li>
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
        <ul className="list-disc space-y-1 py-4 pl-6">
          <li>
            <Link href="https://github.com/jhseo-git" target="_blank" rel="noopener noreferrer">
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                https://github.com/jhseo-git
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/jhseo_dev" target="_blank" rel="noopener noreferrer">
              <span className="text-base font-semibold text-blue-600 underline underline-offset-4">
                https://twitter.com/jhseo_dev
              </span>
            </Link>
          </li>
        </ul>
      </article> */}
    </main>
  )
}

export default AbountPage
