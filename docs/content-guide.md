---
summary: "Writing rules for content/ (blog/docs)"
read_when:
  - When writing or editing content/blog or content/docs.
---

# Content Writing Guide

## Purpose

Defines writing rules for posts under `content/`.

## Common Rules

- Location: `content/blog/`, `content/docs/`
- Extension: `.mdx`
- Frontmatter: required in all `content/*/*.mdx`
- Filename: lowercase slug, hyphen + number ok
  - Prefer ASCII for new files
  - Existing exceptions: filenames with Korean/`@`/`.` exist
- Body: freeform (first line does not need to start with `##`; intro text/quote/image/tweet starts exist)
- Code blocks: specify language + optional title
  - Example: ```bash title="bash"
- Images: store in `public/post/...`, in-doc path is `/post/...`
  - Filenames: lowercase + hyphens, no spaces

## Blog (`content/blog`)

### Frontmatter (Required)

- `title`: post title
- `description`: list/OG summary
- `author`: author name
- `date`: ISO 8601 (UTC recommended)
  - Example: `2024-05-06T05:08:41.283Z`

Example:

```mdx
---
title: React 19 Beta!
description: 드디어 React 19 Beta! (React 18.3과 함께)
author: seonest
date: 2024-05-06T05:08:41.283Z
---
```

### Writing Rules

- Many posts start with intro text or a quote
- Use clear link text
- Image path pattern: `/post/<category>/<slug>/...`
  - Example: `/post/react/react-19-beta/cover.png`
  - Category examples: `react`, `web`, `javascript`, `ai`, `design`, `blog`
- MDX components allowed when needed (e.g. `<Callout />`, `<Tweet id="..." />`)

## Docs (`content/docs`)

### Frontmatter (Required/Optional)

- `title` (required)
- `description` (required)
- `icon` (optional): Lucide icon name or custom icon (`Sparkles`, `ClaudeIcon`, etc.)
- `index` (optional): set `true` for section index pages

Example:

```mdx
---
title: Get started
description: Seonest 블로그를 로컬에서 실행하는 방법을 안내합니다.
icon: Sparkles
---
```

### Navigation/Ordering

- Root order: `content/docs/meta.json` `pages`
  - Group label: `---Group---` format
  - Page id: use slug without extension (e.g. `what-is-seonest`)
- Section order: `content/docs/<section>/meta.json` `pages`
  - Example: `content/docs/claude-code/meta.json`
  - Add when the section has multiple pages
- Section index: `content/docs/<section>/index.mdx` + `index: true`

### Image Paths

- Docs images: `/post/docs/<section>/<slug>/...`

## References

- Fumadocs MDX guide: https://www.fumadocs.dev/docs/markdown
- Time helper: `pnpm tz` (UTC timestamp)
