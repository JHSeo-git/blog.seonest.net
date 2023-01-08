'use client';

import type { Post } from '@/utils/mdxUtils';

import HeadingViewProvider from './HeadingViewProvider';
import PostNavItem from './PostNav.Item';

export interface PostNavProps {
  title: string;
  toc: NonNullable<Post>['toc'];
}

function PostNavChildren({ title, toc }: PostNavProps) {
  return (
    <nav className="mb-8">
      <h2 className="text-lg tracking-[1px] uppercase mb-4 font-bold">{title}</h2>
      {toc.map((tocItem) => (
        <PostNavItem href={tocItem.link} key={tocItem.id} id={tocItem.id} level={tocItem.level}>
          {tocItem.text}
        </PostNavItem>
      ))}
    </nav>
  );
}

function PostNav({ title, toc }: PostNavProps) {
  return (
    <HeadingViewProvider>
      <PostNavChildren title={title} toc={toc} />
    </HeadingViewProvider>
  );
}

export default PostNav;
