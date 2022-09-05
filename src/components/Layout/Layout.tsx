import type { MDXFrontMatter } from '@/utils/mdxUtils.server';

import LayoutBase from './Layout.Base';
import LayoutPost from './Layout.Post';

type LayoutProps =
  | {
      mode?: 'base' | 'category';
      children: React.ReactNode;
      postFrontMatter?: never;
    }
  | {
      mode?: 'post';
      children: React.ReactNode;
      postFrontMatter?: MDXFrontMatter;
    };

function Layout({ mode = 'base', children, postFrontMatter }: LayoutProps) {
  return (
    <>
      {mode === 'base' && <LayoutBase>{children}</LayoutBase>}
      {mode === 'category' && <LayoutBase headerMode="grayscale">{children}</LayoutBase>}
      {mode === 'post' && <LayoutPost postFrontMatter={postFrontMatter}>{children}</LayoutPost>}
    </>
  );
}

export default Layout;
