import Layout from '@/components/Layout';

export interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return <Layout mode="base">{children}</Layout>;
}

export default BaseLayout;
