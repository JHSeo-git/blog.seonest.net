import { SandPackCSS } from '@/components/SandPack';

interface PostLayoutProps {
  children: React.ReactNode;
}

function PostLayout({ children }: PostLayoutProps) {
  return (
    <>
      <head>
        <SandPackCSS />
      </head>
      {children}
    </>
  );
}

export default PostLayout;
