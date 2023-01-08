import Layout from '@/components/Layout';

export interface CategoryLayoutProps {
  children: React.ReactNode;
}

function CategoryLayout({ children }: CategoryLayoutProps) {
  return <Layout mode="category">{children}</Layout>;
}

export default CategoryLayout;
