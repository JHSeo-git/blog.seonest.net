import Link from "next/link"
import { postSorter } from "@/utils/contentlayer-utils"
import { allPosts } from "contentlayer/generated"

import { Card } from "@/components/Card"

async function IndexPage() {
  const posts = allPosts.sort(postSorter)

  return (
    <main className="mx-auto max-w-4xl py-10">
      <h2 className="text-2xl font-bold leading-normal text-slate-700 dark:text-slate-200">
        모든 글
      </h2>
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
  )
}

export default IndexPage
