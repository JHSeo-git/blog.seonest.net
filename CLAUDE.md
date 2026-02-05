# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL GUIDELINES

### NEVER CREATE BLOG POSTS WITHOUT CONSENT

- **Never create new blog posts without explicit consent from jhseo**
- Only modify or fix existing posts when explicitly requested

### Development Server Limitation

- Do NOT use `pnpm dev` for verification
- Always use `pnpm build && pnpm start` to verify changes

## Commands

```bash
pnpm dev              # Dev server with Turbopack
pnpm build            # Production build
pnpm lint             # Check code quality
pnpm lint:fix         # Auto-fix lint issues
pnpm typecheck        # TypeScript check (tsc --noEmit)
pnpm format:check     # Check Prettier formatting
pnpm format:write     # Apply Prettier formatting
pnpm tz               # Get UTC timestamp for content dates
```

## Architecture

Next.js 16 blog/docs site with App Router, React 19, TypeScript, and Fumadocs for MDX content.

**Key directories:**

- `app/` - Routes and layouts (App Router)
- `components/` - Shared UI (shadcn/ui based)
- `content/blog/` - Blog posts (MDX)
- `content/docs/` - Documentation (MDX with `meta.json` navigation)
- `lib/` - Utilities (`source.tsx` for Fumadocs loaders, `metadata.ts` for OG)
- `services/` - Business logic (post view tracking)
- `prisma/` - Database schema (Supabase/PostgreSQL)

**Content system:**

- Fumadocs manages both blog and docs collections via `source.config.ts`
- Blog route: `/app/(home)/blog/[slug]/page.tsx`
- Docs route: `/app/docs/[[...slug]]/page.tsx` (catch-all)
- Custom MDX components in `mdx-components.tsx` (Tweet, Video, Mermaid)

## Code Style

- Prettier: 2-space indent, no semicolons, double quotes, 100 char width
- Import order: React → Next → third-party → `@/` paths (enforced by Prettier plugin)
- ESLint: Next.js core-web-vitals + TypeScript; `ts-ignore` requires description
- Commits: Conventional Commits with scopes (e.g., `feat(nav):`, `docs(claude-code):`)

## Content Guidelines

**Blog posts** (`content/blog/<slug>.mdx`):

- Required frontmatter: `title`, `description`, `author`, `date` (ISO 8601 UTC)
- Images: store in `public/post/<category>/<slug>/`, reference as `/post/<category>/<slug>/...`

**Docs** (`content/docs/**/*.mdx`):

- Required: `title`, `description`
- Optional: `icon` (Lucide name), `index: true` (for section index pages)
- Navigation: controlled by `meta.json` files in each section

**Slugs:** kebab-case (e.g., `why-react-re-renders.mdx`)

## Environment

- Node 22.12.0 (`.nvmrc`), pnpm 10.2.0
- Copy `.env.example` to `.env` for Supabase connection
- Prisma client generated on `pnpm install`

## New Blog Post Workflow

1. Ask for topic/title if not provided
2. Create branch with short slug from title
3. Scaffold `content/blog/<slug>.mdx` with required frontmatter:
   - `title`: Post title
   - `description`: Brief summary
   - `author`: "jhseo"
   - `date`: ISO 8601 UTC (use `pnpm tz` to get timestamp)
4. No body content or invented outline—leave for user to write
