# blog.seonest.net

![seonest](./src/app/opengraph-image.png)

## About this project

This is a blog project using React, Next.js.

I wanted to make a blog that I could write and publish easily. So I made this project.

Feel free to use this project as you like.
and if you have any questions, please leave a [issue](https://github.com/JHSeo-git/blog.seonest.net/issues/new).

## Stack

- [React](https://beta.reactjs.org/)
  - [v19.x](https://www.npmjs.com/package/react)
- [Next.js](https://beta.nextjs.org/)
  - [v15.x](https://www.npmjs.com/package/next)
  - [App Router](https://beta.nextjs.org/docs/app-directory-roadmap)
- DB
  - [Prisma](https://www.prisma.io/)
  - [Supabase](https://supabase.io/)
- UI
  - [framer-motion](https://www.framer.com/motion/)
  - [next-themes](https://github.com/pacocoursey/next-themes)
  - [radix-ui](https://www.radix-ui.com/)
  - [tailwindcss](https://tailwindcss.com/)
- MDX
  - [contentlayer2](https://github.com/timlrx/contentlayer2)
  - [remark-gfm](https://github.com/remarkjs/remark-gfm)
  - [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)
  - [rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code)
  - [rehype-slug](https://github.com/rehypejs/rehype-slug)
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
# Connect to Supabase via connection pooling with Supavisor.
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
