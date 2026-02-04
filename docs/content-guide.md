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
- Filename: kebab-case (e.g. `react-19-beta.mdx`)
- Structure: title in frontmatter, body starts with `##` recommended
- Code blocks: specify language + optional title
  - Example: ```bash title="bash"
- Images stored in `public/post/...`
  - In-doc path: `/post/...`
  - Filenames: lowercase + hyphens, no spaces

## Blog (`content/blog`)

### Frontmatter (Required)

- `title`: post title
- `description`: list/OG summary
- `author`: author name
- `date`: ISO 8601 (UTC recommended)

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

- Start with `##` (e.g. `## 들어가면서`) recommended
- Use clear link text
- Image path example: `/post/blog/react-19-beta/cover.png`
- MDX components allowed when needed (e.g. `<Tweet id="..." />`)

## Docs (`content/docs`)

### Frontmatter (Required/Optional)

- `title` (required)
- `description` (required)
- `icon` (optional): Lucide icon name or custom icon
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
- Section order: `content/docs/<section>/meta.json` `pages`
- Section index: `content/docs/<section>/index.mdx` + `index: true`

### Image Paths

- Docs images: `/post/docs/<section>/<slug>/...`

## References

- Fumadocs MDX guide: https://www.fumadocs.dev/docs/markdown
- Time helper: `pnpm tz` (UTC timestamp)
