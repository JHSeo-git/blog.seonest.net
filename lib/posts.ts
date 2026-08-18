import { promises as fs } from "node:fs"
import path from "node:path"

export type PostCategory = "blog" | "notes"

export type Post = {
  slug: string
  category: PostCategory
  title: string
  description?: string
  createdAt: string
  updatedAt?: string
}

const CATEGORIES: PostCategory[] = ["blog", "notes"]

// "2026-07-19T12:44:44Z" → "2026년 7월"
const postDateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
})

export function formatPostDate(date: string): string {
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return date
  return postDateFormatter.format(d)
}

// 번들러가 정적으로 분석할 수 있도록 카테고리별 import 경로를 분기한다.
function importPost(category: PostCategory, slug: string) {
  return category === "blog"
    ? import(`@/app/(blog)/${slug}/page.mdx`)
    : import(`@/app/(notes)/${slug}/page.mdx`)
}

async function getSlugs(category: PostCategory): Promise<string[]> {
  const dir = path.join(process.cwd(), "app", `(${category})`)

  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return []
  }

  const slugs: string[] = []
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    // _ 접두사 폴더는 Next 라우팅에서 제외되는 프라이빗 폴더 — 글이 아님
    if (entry.name.startsWith("_")) continue
    try {
      await fs.access(path.join(dir, entry.name, "page.mdx"))
      slugs.push(entry.name)
    } catch {
      // page.mdx 없는 디렉터리는 글이 아님
    }
  }
  return slugs
}

export async function getPosts(): Promise<Post[]> {
  const nested = await Promise.all(
    CATEGORIES.map(async (category) => {
      const slugs = await getSlugs(category)
      return Promise.all(
        slugs.map(async (slug) => {
          const mod = await importPost(category, slug)
          return {
            slug,
            category,
            title: mod.metadata?.title ?? slug,
            description: mod.metadata?.description,
            createdAt: mod.metadata?.openGraph?.publishedTime ?? "",
            updatedAt: mod.metadata?.openGraph?.modifiedTime,
          } satisfies Post
        })
      )
    })
  )

  return nested.flat().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}
