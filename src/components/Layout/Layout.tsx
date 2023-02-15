import type { Post } from 'contentlayer/generated';

import LayoutBase from './Layout.Base';
import LayoutPost from './Layout.Post';

type LayoutProps =
  | {
      mode?: 'base' | 'category';
      children: React.ReactNode;
      post?: never;
    }
  | {
      mode?: 'post';
      children: React.ReactNode;
      post?: Post;
    };

function Layout({ mode = 'base', children, post }: LayoutProps) {
  return (
    <>
      {mode === 'base' && <LayoutBase>{children}</LayoutBase>}
      {mode === 'category' && <LayoutBase headerMode="grayscale">{children}</LayoutBase>}
      {mode === 'post' && <LayoutPost post={post}>{children}</LayoutPost>}
    </>
  );
}

export { LayoutPost };
export default Layout;
