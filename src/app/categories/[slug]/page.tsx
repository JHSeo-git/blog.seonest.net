import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { postSorter } from "@/utils/contentlayer-utils"
import { allPosts } from "contentlayer/generated"

import { Card } from "@/components/Card"

type PageParams = {
  slug: string
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return allPosts
    .map((post) => decodeURIComponent(post.category))
    .filter((category, index, self) => self.indexOf(category) === index)
    .map((category) => ({
      slug: category,
    }))
}

type PageProps = {
  params: Promise<PageParams>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = (await params)?.slug

  const decodedCategory = decodeURIComponent(category)

  const capitalized = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)

  const title = `${capitalized} Posts`
  const description = `${capitalized} Posts`
  const url = `categories/${decodedCategory}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
  }
}

async function CategoryPage({ params }: PageProps) {
  const category = (await params)?.slug

  if (typeof category !== "string") {
    notFound()
  }

  const decodedCategory = decodeURIComponent(category)
  const posts = allPosts.filter((post) => post.category === decodedCategory).sort(postSorter)

  return (
    <main className="mx-auto max-w-4xl py-10">
      <div className="flex items-baseline justify-between px-6">
        <h1 className="text-5xl font-bold capitalize">{category}</h1>
        <p className="hidden text-lg text-gray-700 sm:block dark:text-gray-300">
          {posts.length} Post{posts.length > 0 ? "s" : ""}
        </p>
      </div>
      <div className="h-14" />
      {posts.map((post) => (
        <Link
          key={post._id}
          href={post.slug}
          className="block transition-colors not-first:mt-[72px]"
        >
          <Card post={post} />
        </Link>
      ))}
    </main>
  )
}

export default CategoryPage
