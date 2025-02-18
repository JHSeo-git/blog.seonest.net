"use client"

import type { TOCItem } from "@/utils/contentlayer-utils"

import HeadingViewProvider from "./HeadingViewProvider"
import PostNavItem from "./PostNav.Item"

interface PostNavProps {
  title: string
  toc: TOCItem[]
}

function PostNavChildren({ title, toc }: PostNavProps) {
  return (
    <nav className="mb-8">
      <h2 className="mb-4 text-lg font-bold tracking-[1px] uppercase">{title}</h2>
      {toc.map((tocItem) => (
        <PostNavItem href={tocItem.link} key={tocItem.id} id={tocItem.id} level={tocItem.level}>
          {tocItem.text}
        </PostNavItem>
      ))}
    </nav>
  )
}

function PostNav({ title, toc }: PostNavProps) {
  return (
    <HeadingViewProvider>
      <PostNavChildren title={title} toc={toc} />
    </HeadingViewProvider>
  )
}

export default PostNav
