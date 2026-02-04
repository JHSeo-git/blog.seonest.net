# Repository Guidelines

- Repo: https://github.com/JHSeo-git/blog.seonest.net
- GitHub issues/comments/PR comments: use literal multiline strings or -F - <<'EOF' (or $'...') for real newlines; never embed "\n".

## Project Structure & Module Organization

- `app/` contains the Next.js App Router routes, layouts, and page-level UI.
- `components/` holds shared UI components, while `hooks/`, `lib/`, and `services/` keep reusable logic and integrations.
- `content/blog/` and `content/docs/` store MDX content and metadata (for example, `content/blog/react-19-beta.mdx`).
- `public/` is for static assets, `styles/` for global styles, and `prisma/` for database schema/seed.
- `legacy/` keeps older implementations that are still referenced.

## Build, Test, and Development Commands

- `pnpm dev` runs the local Next.js server with Turbopack.
- `pnpm build` creates a production build; `pnpm start` serves it.
- `pnpm lint` checks code quality; `pnpm lint:fix` auto-fixes where possible.
- `pnpm typecheck` runs `tsc --noEmit` for TypeScript safety.
- `pnpm format:check` and `pnpm format:write` enforce Prettier formatting.
- `pnpm post` generates post metadata from `content/posts` (see `package.json`).

## Coding Style & Naming Conventions

- Formatting is handled by Prettier (2-space indent, no semicolons, double quotes, print width 100).
- ESLint uses Next.js core-web-vitals and TypeScript rules; unused vars warn, `ts-ignore` requires a description.
- Import order is enforced by Prettier plugin (React, Next, third-party, then `@/` paths).
- Content slugs in `content/blog/` are kebab-case (for example, `why-react-re-renders.mdx`).

## Testing Guidelines

- No dedicated test framework or test directory is present.
- For changes, rely on `pnpm lint` and `pnpm typecheck`. Add tests if introducing critical logic.

## Commit & Pull Request Guidelines

- Commits follow Conventional Commits with optional scopes (examples: `feat(nav): ...`, `docs(claude-code): ...`).
- Commit linting is enforced on `commit-msg`; header length max 150, body lines max 300.
- Pre-commit runs `pretty-quick` and `lint-staged` on changed JS/TS files.
- PRs should include a short summary, linked issues if applicable, and screenshots for UI changes.

## Environment & Configuration

- Use Node `22.12.0` (see `.nvmrc`) and `pnpm@10.2.0`.
- Copy `.env.example` to `.env` and provide Supabase/Prisma connection values.
- Prisma client is generated on install (`pnpm install`).

## Content Guidelines

- Fumadocs markdown guide: https://www.fumadocs.dev/docs/markdown
- MDX files in `content/docs` require proper frontmatter with `title` and `description`
- MDX files in `content/blog` require proper frontmatter with `title`, `description`, `author`, and `date`
- Documentation images go in `public/post/*` following the path structure
- Run `pnpm build` before submitting PRs to ensure MDX compiles correctly

## Agent Notes

- Use the provided scripts and package manager (pnpm); avoid adding dependencies or tooling without confirmation.
