# blog.seonest.net

Minimal personal blog at [seonest.net](https://seonest.net), inspired by
[leerob/next-mdx-blog](https://github.com/leerob/next-mdx-blog).

## Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router, Turbopack)
- **Content**: MDX via [@next/mdx](https://www.npmjs.com/package/@next/mdx) with the Rust compiler (mdxRs)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **UI components**: [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) primitives, icons from [Lucide](https://lucide.dev)
- **Syntax highlighting**: [sugar-high](https://github.com/huozhi/sugar-high) (fenced code blocks only)
- **Fonts**: [Noto Serif KR](https://fonts.google.com/noto/specimen/Noto+Serif+KR) for reading text (via `next/font`) + [Pretendard](https://github.com/orioncactus/pretendard) for UI elements (variable, dynamic subset)
- **Dark mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package manager**: [Bun](https://bun.sh) / **Runtime**: Node.js 24 LTS (`.nvmrc`)
- **Deployment**: [Vercel](https://vercel.com)

## Structure

A post is a page. There is no content layer — each post lives in a route group
and is served at a root-level URL:

```
app/
  (blog)/<slug>/page.mdx     → https://seonest.net/<slug>   (long-form posts)
  (notes)/<slug>/page.mdx    → https://seonest.net/<slug>   (short notes)
  page.tsx                   # home: About + auto-generated Notes/Blogs lists
  layout.tsx                 # fonts, theme, analytics, footer
  sitemap.ts
components/                  # PostMeta, Callout, Image, Video, theme toggle, shadcn/ui
lib/posts.ts                 # scans both groups, reads each post's metadata
mdx-components.tsx           # styled MDX elements + sugar-high code blocks
content/                     # archived posts from the previous site (not served)
```

## Writing a post

Create `app/(blog)/<slug>/page.mdx` (or `app/(notes)/<slug>/page.mdx`) with a
kebab-case slug folder. Slugs must be unique across both groups.

```mdx
export const metadata = {
  title: "Post title",
  description: "One-line summary",
  alternates: { canonical: "/post-slug" },
  openGraph: {
    type: "article",
    publishedTime: "2026-08-18T00:00:00Z", // ISO 8601 UTC (created at)
  },
}

# Post title

<PostMeta createdAt={metadata.openGraph.publishedTime} updatedAt={metadata.openGraph.modifiedTime} />

Body starts here.
```

Dates live in the standard `metadata.openGraph` fields, so posts render
`og:type=article` / `article:published_time` tags for free. Add
`modifiedTime` (updated at) when a published post is meaningfully revised —
the meta row and the sitemap pick it up automatically.

`PostMeta`, `Callout`, `Image`, and `Video` are provided globally via
`mdx-components.tsx` — no import needed. Images live next to the post and are
statically imported; videos go in `public/post/<slug>/`. The home page lists
and sitemap are generated automatically from the `metadata` export.

## Running locally

Requires Node.js 24 LTS and Bun.

```bash
bun install
bun run dev
```

## Commands

```bash
bun run dev           # Dev server
bun run build         # Production build
bun run start         # Serve production build
bun run lint          # ESLint
bun run lint:fix      # ESLint with auto-fix
bun run typecheck     # tsc --noEmit
bun run format:check  # Prettier check
bun run format:write  # Prettier write
```
