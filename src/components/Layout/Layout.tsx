import LayoutBase from './Layout.Base';

export interface LayoutProps {
  mode?: 'base' | 'post';
  children: React.ReactNode;
}

function Layout({ mode = 'base', children }: LayoutProps) {
  return <>{mode === 'base' && <LayoutBase>{children}</LayoutBase>}</>;
}

export default Layout;
