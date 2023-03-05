'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import useSWR from 'swr';

import ApiClient from '@/lib/api-client';

import { LineChart } from '../_icons';
import { usePostViews } from './usePostViews';

type PostView = {
  views: number;
};

export interface PostViewsProps {
  slug: string;
}

function PostViews({ slug }: PostViewsProps) {
  const { data } = useSWR<PostView>(`/api/posts/views?slug=${slug}`, ApiClient.request);
  const { fetchViews } = usePostViews(slug);

  useEffect(() => {
    fetchViews();
  }, [fetchViews]);

  return (
    <div className="flex items-center gap-1">
      <LineChart width={16} height={16} />
      <AnimatePresence>
        {data && (
          <motion.p
            key="post-views"
            className="text-xs tabular-nums"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {data.views.toLocaleString()}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PostViews;
