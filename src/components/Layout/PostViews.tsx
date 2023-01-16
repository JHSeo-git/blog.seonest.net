'use client';

import { useEffect } from 'react';

import { LineChart } from '../_icons';
import { usePostViews } from './usePostViews';

export interface PostViewsProps {
  slug: string;
  initialViews?: number;
}

function PostViews({ slug, initialViews }: PostViewsProps) {
  const { views, fetchViews } = usePostViews(slug);

  useEffect(() => {
    fetchViews();
  }, [fetchViews]);

  return (
    <div className="flex items-center gap-1">
      <LineChart width={16} height={16} />
      <p className="text-xs tabular-nums">{(views ?? initialViews).toLocaleString()}</p>
    </div>
  );
}

export default PostViews;
