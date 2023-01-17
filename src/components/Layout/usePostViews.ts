import { useCallback, useState } from 'react';

import { getPostViews } from '@/lib/api/posts';

export function usePostViews(slug: string) {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchViews = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getPostViews({ slug });

      setViews(data.views);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [slug]);

  return {
    views,
    loading,
    error,
    fetchViews,
  };
}
