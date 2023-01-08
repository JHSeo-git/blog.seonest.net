import { PostCardSkeleton } from '@/components/PostCard';
import { cn } from '@/utils/styleUtils';

function IndexPageLoading() {
  return (
    <div className="grid [grid-template:'posts'_'categories'] gap-[72px] md:[grid-template:'posts_categories'_/_2fr_1fr]">
      <section className="[grid-area:posts]">
        <h2 className="leading-normal text-rose-600 font-bold">최신 글</h2>
        <div className="h-14" />
        <div>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={`PostCardSkeleton_${idx}`} className="[&:not(:first-of-type)]:mt-[72px]">
              <PostCardSkeleton />
            </div>
          ))}
        </div>
      </section>
      <section className="[grid-area:categories]">
        <h2 className="leading-normal text-rose-600 font-bold">카테고리</h2>
        <div className="h-14" />
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={`CategoriesLinkSkeleton_${idx}`}
            className={cn(
              'inline-block px-3 py-2 mr-4 mb-4 h-9 animate-pulse bg-gray-200 rounded-md',
              idx % 2 === 0 ? 'w-14' : 'w-[72px]'
            )}
          />
        ))}
      </section>
    </div>
  );
}

export default IndexPageLoading;
