import type { Post } from 'contentlayer/generated';
import Image from 'next/image';

import { DateDistance } from './DateDistance';
import { PostViews } from './PostViews';

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  const { title, description, date } = post;

  return (
    <div className="group flex flex-col gap-5 sm:flex-row md:gap-10">
      <div className="relative shrink-0  sm:h-[150px] sm:w-[250px] md:h-[210px] md:w-[350px]">
        {post.thumbnail ? (
          <Image
            className="h-full w-full rounded-md object-cover transition-all group-hover:-translate-y-2 group-hover:shadow-md"
            src={post.thumbnail}
            alt={post.title}
            width={250}
            height={150}
            placeholder="empty"
          />
        ) : (
          <div className="h-full w-full rounded-md bg-slate-200 transition-all group-hover:-translate-y-2 group-hover:shadow-md" />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-bold leading-normal text-black transition-colors group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-400">
          {title}
        </h3>
        {description && (
          <p className="sm:line-clamp-3 md:line-clamp-4 mt-1 leading-7 text-gray-900 dark:text-gray-200">
            {description}
          </p>
        )}
        <div className="min-h-[1rem] flex-1 sm:min-h-0" />
        <div className="flex items-center justify-between gap-4">
          <PostViews
            slug={post.slugAsParams}
            isFetchView={false}
            withIcon={false}
            className="text-sm text-slate-700 dark:text-gray-400"
          />
          <DateDistance
            date={date}
            className="min-h-[20px] text-sm text-slate-700 dark:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
