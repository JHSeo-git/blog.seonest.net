# blog.seonest.net

![seonest](./app/opengraph-image.png)

## About this project

This is a blog project using React, Next.js.

I wanted to make a blog that I could write and publish easily. So I made this project.

Feel free to use this project as you like.
and if you have any questions, please leave a [issue](https://github.com/JHSeo-git/blog.seonest.net/issues/new).

## Stack

- [React](https://react.dev/)
  - [v19.x](https://www.npmjs.com/package/react)
- [Next.js](https://nextjs.org/)
  - [v16.x](https://www.npmjs.com/package/next)
  - [App Router](https://nextjs.org/docs/app)
- UI
  - [tailwindcss v4](https://tailwindcss.com/)
  - [next-themes](https://github.com/pacocoursey/next-themes)
  - [lucide-react](https://lucide.dev/)
  - [@paper-design/shaders-react](https://paper.design/)
- MDX
  - [fumadocs](https://fumadocs.vercel.app/) (fumadocs-mdx, fumadocs-core, fumadocs-ui)
  - [shiki](https://shiki.style/)
  - [rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code)
- [Node.js](https://nodejs.org/)
  - v24.x (LTS)
- [pnpm](https://pnpm.io/)
  - [v11.x](https://www.npmjs.com/package/pnpm)

## Running Locally

1. Clone this repository

```bash
git clone https://github.com/JHSeo-git/blog.seonest.net.git my-blog

cd my-blog
```

2. Install dependencies

> Requires Node.js 24+ (see `.nvmrc`). Run `corepack enable` once to use the pinned pnpm version.

```bash
pnpm install
```

3. Run dev server.

```bash
pnpm dev
```

## License

[MIT](./LICENSE)
