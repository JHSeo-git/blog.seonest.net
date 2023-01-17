import type { SerializedPostFromatter } from '@/app/(post)/posts/[...slug]/page';
import { getDistanceToNow } from '@/utils/dateUtils';

import { CalendarIcon, TimeIcon } from '../_icons';
import Container from '../Container';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';
import LayoutBodyBackgroudColor from './Layout.BodyBackgroudColor';
import PostViews from './PostViews';

interface LayoutPostProps {
  children: React.ReactNode;
  postFrontMatter?: SerializedPostFromatter;
}

function LayoutPost({ children, postFrontMatter }: LayoutPostProps) {
  return (
    <div className="bg-sky-50 transition duration-500 dark:bg-stone-900">
      <LayoutBodyBackgroudColor lightColor="#f0f9ff" darkColor="#1c1917" />
      <Container className="sticky top-0 z-10">
        <Header />
      </Container>
      <div className="sticky top-0 z-[1] h-[60px] bg-sky-50 transition duration-500 dark:bg-stone-900" />
      {postFrontMatter && (
        <Container className="pt-10 pb-16">
          <h1 className="text-4xl font-bold leading-tight">{postFrontMatter.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <TimeIcon width={16} height={16} />
              <p className="text-xs">{postFrontMatter.readingTime}</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon width={16} height={16} />
              <p className="text-xs">
                {getDistanceToNow(postFrontMatter.date, { humanize: false })}
              </p>
            </div>
            <PostViews slug={postFrontMatter.slug} />
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
