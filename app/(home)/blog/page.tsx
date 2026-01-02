import Image from "next/image"
import Link from "next/link"
import { PathUtils } from "fumadocs-core/source"

import { blog } from "@/lib/source"

import BannerImage from "./banner.png"

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path))
}

export default function Page() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? getName(b.path)).getTime() -
      new Date(a.data.date ?? getName(a.path)).getTime()
  )

  return (
    <main className="max-w-page mx-auto w-full px-4 pb-12 md:py-12">
      <div className="dark relative z-2 mb-4 aspect-[3.2] p-8 md:p-12">
        <Image
          src={BannerImage}
          priority
          alt="banner"
          className="absolute inset-0 -z-1 size-full object-cover"
        />
        <h1 className="text-fd-foreground mb-4 font-mono text-3xl font-medium">Blog</h1>
        <p className="text-fd-muted-foreground font-mono text-sm">Latest posts of seonest.</p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col rounded-2xl border p-4 shadow-sm transition-colors"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-fd-muted-foreground text-sm">{post.data.description}</p>

            <p className="text-brand mt-auto pt-4 text-xs">
              {new Date(post.data.date ?? getName(post.path)).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
