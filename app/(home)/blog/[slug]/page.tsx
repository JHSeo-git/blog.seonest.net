import path from "node:path"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getMDXComponents } from "@/mdx-components"
import { InlineTOC } from "fumadocs-ui/components/inline-toc"

import { createMetadata } from "@/lib/metadata"
import { blog } from "@/lib/source"
import { cn } from "@/lib/utils"
// import { createMetadata } from '@/lib/metadata';
import { buttonVariants } from "@/components/ui/button"

import { ShareButton } from "./page.client"

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  const { body: Mdx, toc } = await page.data.load()

  return (
    <article className="mx-auto flex w-full max-w-[800px] flex-col px-4 py-8">
      <div className="mb-8 flex flex-row gap-4 text-sm">
        <div>
          <p className="text-fd-muted-foreground mb-1">Written by</p>
          <p className="font-medium">{page.data.author}</p>
        </div>
        <div>
          <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
          <p className="font-medium">
            {new Date(
              page.data.date ?? path.basename(page.path, path.extname(page.path))
            ).toDateString()}
          </p>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-semibold">{page.data.title}</h1>
      <p className="text-fd-muted-foreground mb-8">{page.data.description}</p>

      <div className="prose min-w-0 flex-1">
        <div className="not-prose mb-8 flex flex-row gap-2">
          <ShareButton url={page.url} />
          <Link
            href="/blog"
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "secondary",
              })
            )}
          >
            Back
          </Link>
        </div>

        <InlineTOC items={toc} />
        <Mdx components={getMDXComponents()} />
      </div>
    </article>
  )
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? "The post by Seonest",
  })
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }))
}
