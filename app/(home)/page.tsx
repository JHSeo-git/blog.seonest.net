import Link from "next/link"

import { SeonestTextIcon } from "../layout.client"
import { Hero } from "./page.client"

export default function IndexPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <Hero />
      <div className="z-1 mx-auto mt-16 max-w-[650px] px-4">
        <h1 className="flex items-center gap-2 text-2xl font-medium">
          <SeonestTextIcon className="h-5 w-auto" />
        </h1>
        <p className="my-5">I build software and write about what I learn along the way.</p>
        <p className="my-5">
          My focus is on frontend, backend systems, AI agents, and scalable web applications with an
          emphasis on clarity, structure, and long-term maintainability.
        </p>
        <p className="my-5">
          I believe good software comes from good thinking. This site is where I share my
          reflections on articles, ideas, and lessons that shaped how I approach building things.
        </p>
        <p className="my-5">
          You can see my posts on{" "}
          <Link href="/blog" className="font-medium underline">
            /blog
          </Link>
        </p>
      </div>
    </main>
  )
}
