import Layout from '@/components/Layout';

interface CategoryLayoutProps {
  children: React.ReactNode;
}

function CategoryLayout({ children }: CategoryLayoutProps) {
  return <Layout mode="category">{children}</Layout>;
}

export default CategoryLayout;
