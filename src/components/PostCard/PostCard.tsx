import { useEffect, useState } from 'react';

import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils.server';
import { cn } from '@/utils/styleUtils';

type Mode = 'base' | 'card';
export interface PostCardProps {
  post: MDXFrontMatter;
  mode?: Mode;
}

function PostCard({ post, mode = 'base' }: PostCardProps) {
  const { title, subTitle, description, date } = post;
  const [distanceDate, setDistanceDate] = useState<string | undefined>();

  useEffect(() => {
    setDistanceDate(getDistanceToNow(date));
  }, [date]);

  return (
    <article className={cn(mode === 'card' && 'p-8 bg-white rounded-md')}>
      <h3 className="text-2xl font-bold leading-normal">{title}</h3>
      {subTitle && <h4 className="text-xl leading-normal text-gray-700 mt-4">{subTitle}</h4>}
      {description && <p className="leading-7 text-gray-900 mt-4">{description}</p>}
      <div className="h-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center" />
        <div className="flex items-center">
          <p className="text-sm text-gray-700">{distanceDate}</p>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
