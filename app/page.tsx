import Link from "next/link"

import { formatPostDate, getPosts, type Post } from "@/lib/posts"

export default async function Home() {
  const posts = await getPosts()
  const notes = posts.filter((post) => post.category === "notes")
  const blogs = posts.filter((post) => post.category === "blog")

  return (
    <>
      <h1 className="text-heading text-[2.2rem] leading-[1.15] font-semibold tracking-[-0.02em] md:text-[2.65rem]">
        <a
          href="https://github.com/JHSeo-git"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70"
        >
          Seonest
        </a>
      </h1>

      <section aria-label="About" className="mt-8 mb-13">
        <div className="border-line-subtle text-nav mb-5 border-b pb-2 font-sans text-sm">
          About
        </div>
        <p className="mb-6">I&apos;m a software engineer. Short notes and long-form posts.</p>
      </section>

      {notes.length > 0 && (
        <section aria-labelledby="notes-heading" className="mt-14">
          <h2
            id="notes-heading"
            className="text-heading mb-5 text-[1.45rem] font-semibold tracking-[-0.02em]"
          >
            Notes
          </h2>
          <ul className="list-[square] pl-[1.1em]">
            {notes.map((post) => (
              <li key={post.slug} className="mb-2 pl-0.5">
                <Link
                  href={`/${post.slug}`}
                  className="text-nav decoration-nav/30 hover:text-body-secondary hover:decoration-body-secondary/30 underline underline-offset-2 transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {blogs.length > 0 && (
        <section aria-labelledby="blog-heading" className="mt-14">
          <h2
            id="blog-heading"
            className="text-heading mb-5 text-[1.45rem] font-semibold tracking-[-0.02em]"
          >
            Blogs
          </h2>
          <div className="border-line-subtle border-t">
            {blogs.map((post) => (
              <BlogRow key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

function BlogRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="border-line-subtle grid grid-cols-1 gap-0.5 border-b py-3 transition-opacity duration-200 hover:opacity-70 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-5"
    >
      <span>{post.title}</span>
      <time
        dateTime={post.date}
        className="text-nav font-sans text-[13px] whitespace-nowrap tabular-nums"
      >
        {formatPostDate(post.date)}
      </time>
    </Link>
  )
}
