import type { Post } from 'contentlayer/generated';

import { getDistanceToNow } from '@/utils/date-utils';

import { CalendarIcon, TimeIcon } from '../_icons';
import Container from '../Container';
import PostViews from '../PostViews';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';
import LayoutBodyBackgroudColor from './Layout.BodyBackgroudColor';

interface LayoutPostProps {
  children: React.ReactNode;
  post?: Post;
}

function LayoutPost({ children, post }: LayoutPostProps) {
  return (
    <div className="bg-sky-50 transition duration-500 dark:bg-stone-900">
      <LayoutBodyBackgroudColor headerMode="grayscale" lightColor="#f0f9ff" darkColor="#1c1917" />
      <Container className="sticky top-0 z-10">
        <Header />
      </Container>
      <div className="sticky top-0 z-[1] h-[60px] bg-sky-50 transition duration-500 dark:bg-stone-900" />
      {post && (
        <Container className="pt-10 pb-16">
          <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <TimeIcon width={16} height={16} />
              <p className="text-xs">{post.readingTime}</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon width={16} height={16} />
              <p className="text-xs">{getDistanceToNow(post.date, { humanize: false })}</p>
            </div>
            <PostViews slug={post.slugAsParams} />
          </div>
        </Container>
      )}
      <div className="sticky top-0 z-[1] h-[60px] bg-white transition duration-500 dark:bg-zinc-900" />
      <main className="bg-white transition duration-500 dark:bg-zinc-900">
        <Container className="pt-14">{children}</Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default LayoutPost;
