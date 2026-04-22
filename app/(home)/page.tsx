import Link from "next/link"
import { PathUtils } from "fumadocs-core/source"
import { ChevronRight, ChevronRightIcon } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { blog, type BlogPage } from "@/lib/source"
import { buttonVariants } from "@/components/ui/button"

import { Hero } from "./page.client"

function getName(filePath: string) {
  return PathUtils.basename(filePath, PathUtils.extname(filePath))
}

function getPostDate(post: BlogPage) {
  return new Date(post.data.date ?? getName(post.path))
}

export default function IndexPage() {
  const posts = [...blog.getPages()].sort(
    (a, b) => getPostDate(b).getTime() - getPostDate(a).getTime()
  )
  const featured = posts[0]
  const recent = posts.slice(1, 7)

  return (
    <main className="relative flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b">
        <Hero />
        <div className="relative z-1 mx-auto max-w-[680px] px-4 pt-20 pb-20 md:pt-28 md:pb-24">
          <div className="bg-fd-card/70 text-fd-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase backdrop-blur-sm">
            <span className="bg-seonest-primary size-1.5 rounded-full" />
            {posts.length} posts · essays & notes
          </div>
          <h1 className="mt-6 mb-5 text-4xl leading-[1.08] font-medium">
            <p>I build software</p>
            <p>and write what I learn</p>
            <p className="text-seonest-primary">along the way.</p>
          </h1>
          <p className="text-fd-muted-foreground text-sm md:text-base">
            <Balancer>
              Notes on frontend, backend systems, AI agents, and scalable web applications — with an
              emphasis on clarity, structure, and long-term maintainability.
            </Balancer>
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link
              href="/blog"
              className={buttonVariants({
                variant: "default",
                className: "flex items-center gap-2",
              })}
            >
              <span>Read the blog</span>
              <ChevronRight className="size-4" />
            </Link>
            <Link href="/docs" className={buttonVariants({ variant: "secondary" })}>
              Browse docs
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto w-full max-w-[960px] px-4 pt-14">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-fd-muted-foreground font-mono text-xs tracking-widest uppercase">
              — Featured
            </span>
          </div>
          <Link
            href={featured.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col gap-4 rounded-2xl border p-6 shadow-sm transition-colors md:p-8"
          >
            <span className="text-seonest-primary font-mono text-xs tracking-[0.08em] uppercase">
              {getName(featured.path)} · {getPostDate(featured).toDateString()}
            </span>
            <h2 className="text-lg font-semibold md:text-xl">{featured.data.title}</h2>
            <p className="text-fd-muted-foreground text-base">{featured.data.description}</p>
            <span className="text-sm font-medium">Read more</span>
          </Link>
        </section>
      )}

      <section className="mx-auto mb-20 w-full max-w-[960px] px-4 pt-14">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-fd-muted-foreground font-mono text-xs tracking-widest uppercase">
            — Recent writing
          </span>
          <Link
            href="/blog"
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
              className: "text-fd-muted-foreground",
            })}
          >
            <ChevronRightIcon />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => {
            const cat = getName(post.path)
            return (
              <Link
                key={post.url}
                href={post.url}
                className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex min-h-[170px] flex-col rounded-2xl border p-4 shadow-sm transition-colors"
              >
                <span className="text-fd-muted-foreground mb-3 font-mono text-[10px] tracking-[0.08em] uppercase">
                  {cat}
                </span>
                <p className="font-medium">{post.data.title}</p>
                <p className="text-fd-muted-foreground mt-2 line-clamp-2 text-sm">
                  {post.data.description}
                </p>
                <p className="text-fd-muted-foreground mt-auto pt-4 font-mono text-[11px]">
                  {getPostDate(post).toDateString()}
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
