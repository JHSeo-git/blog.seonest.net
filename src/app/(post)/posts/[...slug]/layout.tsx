import { notFound } from 'next/navigation';

import { viewPost } from '@/lib/api/posts';

export interface PostLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}

async function PostLayout({ children, params }: PostLayoutProps) {
  const slugs = params?.slug;

  if (!Array.isArray(slugs)) {
    notFound();
  }

  if (slugs.some((slug) => typeof slug !== 'string')) {
    notFound();
  }

  const slug = slugs.map((slug) => decodeURIComponent(slug)).join('/');

  await viewPost({ slug });

  return <>{children}</>;
}

export default PostLayout;
