import Layout from '@/components/Layout';

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return <Layout mode="base">{children}</Layout>;
}

export default BaseLayout;
