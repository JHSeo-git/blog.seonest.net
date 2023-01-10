import { cn } from '@/utils/styleUtils';

type Mode = 'base' | 'card';
interface PostCardThumbnailProps {
  mode?: Mode;
}

function PostCardThumbnail({ mode = 'base' }: PostCardThumbnailProps) {
  return (
    <article className={cn(mode === 'card' && 'p-8 bg-white dark:bg-black rounded-md')}>
      <h3 className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md w-1/2 h-9" />
      <div className="mt-4">
        <p className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md h-7" />
        <p className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md mt-1 w-3/4 h-7" />
      </div>
      <div className="h-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center" />
        <div className="flex items-center">
          <p className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md w-20 h-5" />
        </div>
      </div>
    </article>
  );
}

export default PostCardThumbnail;
