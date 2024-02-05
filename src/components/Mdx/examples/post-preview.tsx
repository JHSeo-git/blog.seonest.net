'use client';

import { allPosts } from 'contentlayer/generated';

interface PostPreviewProps {
  slug: string;
}

function PostPreview({ slug }: PostPreviewProps) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) {
    return null;
  }
  const wordCount = post.body.raw.split(/\s+/).filter(Boolean).length;

  return (
    <section className="rounded-md bg-black/10 p-2">
      <h5 className="font-bold">
        <a href={'/posts/' + slug} target="_blank" className="text-indigo-700 dark:text-indigo-500">
          {post.title}
        </a>
      </h5>
      <i>{wordCount} words</i>
    </section>
  );
}

export { PostPreview };
