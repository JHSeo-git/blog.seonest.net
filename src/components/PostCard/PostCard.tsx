'use client';

import { useState } from 'react';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils';
import { cn } from '@/utils/styleUtils';

type Mode = 'base' | 'card';
interface PostCardProps {
  post: MDXFrontMatter;
  mode?: Mode;
}

function PostCard({ post, mode = 'base' }: PostCardProps) {
  const { title, subTitle, description, date } = post;
  const [distanceDate, setDistanceDate] = useState<string | undefined>();

  useIsomorphicLayoutEffect(() => {
    setDistanceDate(getDistanceToNow(date));
  }, [date]);

  return (
    <article className={cn('group', mode === 'card' && 'p-8 bg-white dark:bg-black rounded-md')}>
      <h3 className="text-2xl font-bold leading-normal text-black dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      {subTitle && (
        <h4 className="text-xl leading-normal text-gray-700 dark:text-gray-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 mt-4">
          {subTitle}
        </h4>
      )}
      {description && (
        <p className="leading-7 text-gray-900 dark:text-gray-200 mt-4">{description}</p>
      )}
      <div className="h-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center" />
        <div className="flex items-center">
          <p className="text-sm text-gray-700 dark:text-gray-500">{distanceDate}</p>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
