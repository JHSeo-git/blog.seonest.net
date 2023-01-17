import type { SerializedPostFromatter } from '@/app/(post)/posts/[...slug]/page';

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
      postFrontMatter?: SerializedPostFromatter;
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

export { LayoutPost };
export default Layout;
