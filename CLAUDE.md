# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm lint:fix         # ESLint with auto-fix
pnpm format:write     # Prettier formatting
pnpm typecheck        # TypeScript type checking
pnpm analyze          # Bundle analysis (ANALYZE=true)
```

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages
  - `(home)/` - Blog routes (layout group, no URL prefix)
  - `docs/` - Documentation routes
  - `api/` - API routes (posts/views, search)
  - `og/` - Dynamic Open Graph image generation
- `content/` - MDX content files
  - `blog/` - Blog posts
  - `docs/` - Documentation pages
- `lib/` - Shared utilities and helpers
  - `api-middlewares/` - API middleware (with-catch, with-methods)
  - `prisma.ts` - Prisma client singleton
  - `source.tsx` - Fumadocs content loader
  - `utils.ts` - `cn()` utility (clsx + tailwind-merge)
- `components/` - React components
- `hooks/` - Custom React hooks
- `.source/` - Fumadocs configuration

### Key Patterns

- **Path aliases**: `@/` maps to project root
- **Class names**: Use `cn()` from `lib/utils.ts` for conditional classes
- **Content**: Fumadocs MDX processes `content/` directory automatically

## Code Style

- Conventional commits enforced via commitlint
- Pre-commit hooks run prettier and eslint on staged files
- Import order managed by prettier-plugin-sort-imports
- TypeScript strict mode enabled

## Content Guidelines

- Fumadocs markdown guide: https://www.fumadocs.dev/docs/markdown
- MDX files in `content/docs` require proper frontmatter with `title` and `description`
- MDX files in `content/blog` require proper frontmatter with `title`, `description`, `author`, and `date`
- Documentation images go in `public/post/*` following the path structure
- Run `pnpm build` before submitting PRs to ensure MDX compiles correctly
