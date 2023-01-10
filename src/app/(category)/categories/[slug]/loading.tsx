import { PostCardSkeleton } from '@/components/PostCard';

function CategoryPageLoading() {
  return (
    <section>
      <div className="flex items-baseline justify-between px-6">
        <h1 className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-md w-36 h-10" />
        <p className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-md hidden sm:block w-16 h-7" />
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
