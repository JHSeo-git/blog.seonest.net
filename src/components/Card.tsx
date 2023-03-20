'use client';

import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import { useState } from 'react';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { getDistanceToNow } from '@/utils/date-utils';

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  const { title, description, date } = post;
  const [distanceDate, setDistanceDate] = useState<string | undefined>();

  useIsomorphicLayoutEffect(() => {
    setDistanceDate(getDistanceToNow(date));
  }, [date]);

  return (
    <div className="group flex flex-col gap-5 sm:flex-row md:gap-10">
      <div className="relative shrink-0 sm:h-[150px] sm:w-[250px] xl:h-[210px] xl:w-[350px]">
        {post.thumbnail ? (
          <Image
            className="h-full w-full rounded-md object-cover"
            src={post.thumbnail}
            alt={post.title}
            width={250}
            height={150}
            placeholder="empty"
          />
        ) : (
          <div className="h-full w-full rounded-md bg-slate-200" />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-bold leading-normal text-black transition-colors group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-400">
          {title}
        </h3>
        {description && (
          <p className="sm:line-clamp-2 md:line-clamp-3 mt-1 leading-7 text-gray-900 dark:text-gray-200">
            {description}
          </p>
        )}
        <div className="min-h-[1rem] flex-1 sm:min-h-0" />
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <p className="min-h-[20px] text-sm text-slate-700 dark:text-gray-400">{distanceDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
