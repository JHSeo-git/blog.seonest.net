import { cn } from '@/utils/styleUtils';

type Mode = 'base' | 'card';
interface PostCardThumbnailProps {
  mode?: Mode;
}

function PostCardThumbnail({ mode = 'base' }: PostCardThumbnailProps) {
  return (
    <article className={cn(mode === 'card' && 'p-8 bg-white dark:bg-black rounded-md')}>
      <h3 className="h-9 w-1/2 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
      <div className="mt-4">
        <p className="h-7 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
        <p className="mt-1 h-7 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="h-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center" />
        <div className="flex items-center">
          <p className="h-5 w-20 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </article>
  );
}

export default PostCardThumbnail;
