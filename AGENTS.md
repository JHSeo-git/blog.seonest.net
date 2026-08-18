## CRITICAL GUIDELINES

### NEVER CREATE BLOG POSTS WITHOUT CONSENT

- **Never create new blog posts without explicit consent from jhseo**
- Only modify or fix existing posts when explicitly requested

### Verification

- Do NOT rely on `bun run dev` for verification
- Always use `bun run build && bun run start` to verify changes

## Commands

```bash
bun install           # Install dependencies (Bun is the package manager)
bun run dev           # Dev server
bun run build         # Production build
bun run start         # Serve production build
bun run lint          # ESLint
bun run lint:fix      # Auto-fix lint issues
bun run typecheck     # TypeScript check (tsc --noEmit)
bun run format:check  # Check Prettier formatting
bun run format:write  # Apply Prettier formatting
```

## Architecture

Minimal Next.js blog (App Router, Turbopack). A post is a page — no content layer.

- MDX: `@next/mdx` + Rust compiler (`experimental.mdxRs`, gfm). No remark/rehype plugins.
- Posts: `app/(blog)/<slug>/page.mdx` and `app/(notes)/<slug>/page.mdx` → served at
  `/<slug>`. Slugs must be unique across both groups. `_`-prefixed folders are excluded
  from routing and the post list. Each group needs at least one `page.mdx`, or the
  dynamic import glob in `lib/posts.ts` breaks the build.
- Unpublishing: move the post into the group's `_deprecated/` folder and `_`-prefix its
  slug folder, e.g. `app/(blog)/_deprecated/_old-post/page.mdx`. Content stays in the
  repo; restore by moving it back and dropping the prefix.
- `lib/posts.ts` scans both groups and reads each post's `metadata`/`date` exports;
  home and sitemap build on it.
- `mdx-components.tsx`: styled MDX tags + global `PostMeta`/`Callout` (no import needed).
  Only fenced code blocks (`language-*`) get sugar-high; inline backticks stay plain.
- Styling: design tokens in `app/globals.css`, exposed as Tailwind colors via
  `@theme inline`. shadcn/ui on Base UI primitives (`bunx shadcn@latest add <name>`),
  lucide-react icons.
- Dark mode: next-themes class strategy (`@custom-variant dark` in globals.css).
- Fonts: reading text = Noto Serif KR (site default); UI elements opt into Pretendard
  with `font-sans`.
- `content/`: archive of old posts/images, not served. Posts using images, Tweet,
  Video, or mermaid stay archived until those features exist.

## Post Conventions

Each `page.mdx` exports:

```mdx
export const metadata = {
  title: "Post title",
  description: "One-line summary",
  alternates: { canonical: "/post-slug" },
}

export const date = "2026-08-18T00:00:00Z"
```

- `date`: ISO 8601 UTC — get it with `date -u +"%Y-%m-%dT%H:%M:%SZ"`
- Body starts with `# Post title` followed by `<PostMeta date={date} />` (the meta row;
  provided globally via `mdx-components.tsx`, no import needed)
- Slug: kebab-case folder name

## New Blog Post Workflow

1. Ask for topic/title if not provided, and whether it is a blog post or a note
2. Create branch with short slug from title
3. Create `app/(blog)/<slug>/page.mdx` (or `app/(notes)/<slug>/page.mdx`) following
   the Post Conventions above (`metadata`, `date`, `# title`, `<PostMeta date={date} />`)
4. Fill in `metadata` and `date` (ISO 8601 UTC) only
5. No body content or invented outline — leave for jhseo to write

## Conventions

- Commits: Conventional Commits with scopes (e.g., `feat(nav):`)
- Code style is config-driven (Prettier/ESLint) — just run the commands above
- Node 24 LTS (`.nvmrc`), Bun as package manager; cold builds download fonts (network)

## Dependency Pins

- `eslint` is pinned to `^9` and `typescript` to `^6` on purpose: typescript-eslint
  does not support TS 7 yet, and eslint-plugin-react (pulled in by eslint-config-next)
  crashes on ESLint 10. Verify ecosystem support before bumping either.
