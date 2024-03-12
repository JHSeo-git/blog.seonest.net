"use client"

import { allPosts } from "contentlayer/generated"

import { PostPreview } from "./post-preview"

function PostList() {
  return (
    <div className="mb-4 flex h-72 flex-col gap-2 overflow-scroll font-sans">
      {allPosts.map((post) => (
        <PostPreview key={post._id} slug={post.slugAsParams} />
      ))}
    </div>
  )
}

export { PostList }
