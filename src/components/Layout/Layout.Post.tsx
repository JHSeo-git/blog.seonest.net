import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils';

import { CalendarIcon, TimeIcon } from '../_icons';
import Container from '../Container';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';
import LayoutBodyBackgroudColor from './Layout.BodyBackgroudColor';

interface LayoutPostProps {
  children: React.ReactNode;
  postFrontMatter?: MDXFrontMatter;
}

function LayoutPost({ children, postFrontMatter }: LayoutPostProps) {
  return (
    <div className="bg-sky-50 dark:bg-stone-900 transition duration-500">
      <LayoutBodyBackgroudColor lightColor="#f0f9ff" darkColor="#1c1917" />
      <Container className="sticky top-0 z-10">
        <Header />
      </Container>
      <div className="h-[60px] sticky top-0 z-[1] bg-sky-50 dark:bg-stone-900 transition duration-500" />
      {postFrontMatter && (
        <Container className="pt-10 pb-16">
          <h1 className="text-4xl leading-tight font-bold">{postFrontMatter.title}</h1>
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
          </div>
        </Container>
      )}
      <div className="h-[60px] sticky top-0 z-[1] bg-white dark:bg-zinc-900 transition duration-500" />
      <main className="bg-white dark:bg-zinc-900 transition duration-500">
        <Container className="pt-14">{children}</Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default LayoutPost;
