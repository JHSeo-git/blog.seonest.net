import { PostCardSkeleton } from '@/components/PostCard';

function CategoryPageLoading() {
  return (
    <section>
      <div className="flex items-baseline justify-between px-6">
        <h1 className="h-10 w-36 animate-pulse rounded-md bg-gray-300 dark:bg-gray-700" />
        <p className="hidden h-7 w-16 animate-pulse rounded-md bg-gray-300 dark:bg-gray-700 sm:block" />
      </div>
      <div className="h-6" />
      <div>
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={`PostCardSkeleton_${idx}`} className="[&:not(:first-of-type)]:mt-8">
            <PostCardSkeleton mode="card" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryPageLoading;
