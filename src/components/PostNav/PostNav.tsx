'use client';

import type { Post } from '@/utils/mdxUtils';

import HeadingViewProvider from './HeadingViewProvider';
import PostNavItem from './PostNav.Item';

interface PostNavProps {
  title: string;
  toc: NonNullable<Post>['toc'];
}

function PostNavChildren({ title, toc }: PostNavProps) {
  return (
    <nav className="mb-8">
      <h2 className="mb-4 text-lg font-bold uppercase tracking-[1px]">{title}</h2>
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
