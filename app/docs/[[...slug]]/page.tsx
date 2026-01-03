import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getMDXComponents } from "@/mdx-components"
import { findSiblings } from "fumadocs-core/page-tree"
import { Card, Cards } from "fumadocs-ui/components/card"
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page"
import { createRelativeLink } from "fumadocs-ui/mdx"

import { createMetadata, getDocsPageOgImage } from "@/lib/metadata"
import { source } from "@/lib/source"

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const { body: Mdx, toc } = await page.data.load()

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Mdx
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        {page.data.index ? <DocsCategory url={page.url} /> : null}
      </DocsBody>
    </DocsPage>
  )
}

function DocsCategory({ url }: { url: string }) {
  return (
    <Cards>
      {findSiblings(source.getPageTree(), url).map((item) => {
        if (item.type === "separator") return
        if (item.type === "folder") {
          if (!item.index) return
          item = item.index
        }

        return (
          <Card key={item.url} title={item.name} href={item.url}>
            {item.description}
          </Card>
        )
      })}
    </Cards>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  const ogImageUrl = getDocsPageOgImage(page).url

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? "The document by Seonest",
    openGraph: {
      images: ogImageUrl,
    },
    twitter: {
      images: ogImageUrl,
    },
  })
}
