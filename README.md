# blog.seonest.net

![seonest](./opengraph-image.png)

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
- DB
  - [Prisma](https://www.prisma.io/)
  - [Supabase](https://supabase.io/)
- UI
  - [tailwindcss v4](https://tailwindcss.com/)
  - [next-themes](https://github.com/pacocoursey/next-themes)
  - [lucide-react](https://lucide.dev/)
  - [@paper-design/shaders-react](https://paper.design/)
- MDX
  - [fumadocs](https://fumadocs.vercel.app/) (fumadocs-mdx, fumadocs-core, fumadocs-ui)
  - [shiki](https://shiki.style/)
  - [rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code)
- [pnpm](https://pnpm.io/)

## Running Locally

1. Clone this repository

```bash
git clone https://github.com/JHSeo-git/blog.seonest.net.git my-blog

cd my-blog
```

2. Install dependencies

```bash
pnpm install
```

3. Edit .env file

copy .env.example to .env and edit it.

```bash
# supabase
# Connect to Supabase via connection pooling.
SUPABASE_DATABASE_URL="postgres://postgres.../postgres?schema=preview&pgbouncer=true&connection_limit=1"
# Direct connection to the database. Used for migrations.
DIRECT_URL="postgres://postgres.../postgres?schema=preview&pgbouncer=true&connection_limit=1"
```

4. Run dev server.

```bash
pnpm dev
```

## License

[MIT](./LICENSE)
