import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils.server';

import { CalendarIcon, TimeIcon } from '../_icons';
import Container from '../Container';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';

export interface LayoutPostProps {
  children: React.ReactNode;
  postFrontMatter?: MDXFrontMatter;
}

function LayoutPost({ children, postFrontMatter }: LayoutPostProps) {
  useBodyBackgroundColorEffect('#f0f9ff');

  return (
    <div className="bg-sky-50">
      <Container className="sticky top-0 z-10">
        <Header />
      </Container>
      <div className="h-[60px] sticky top-0 z-[1] bg-sky-50" />
      {postFrontMatter && (
        <Container className="pt-10 pb-16">
          <h1 className="text-4xl leading-tight font-bold">{postFrontMatter.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-gray-700">
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
      <div className="h-[60px] sticky top-0 z-[1] bg-white" />
      <main className="bg-white">
        <Container className="pt-14">{children}</Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default LayoutPost;
