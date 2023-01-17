'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import { LineChart } from '../_icons';
import { usePostViews } from './usePostViews';

export interface PostViewsProps {
  slug: string;
}

function PostViews({ slug }: PostViewsProps) {
  const { views, fetchViews } = usePostViews(slug);

  useEffect(() => {
    fetchViews();
  }, [fetchViews]);

  return (
    <div className="flex items-center gap-1">
      <LineChart width={16} height={16} />
      <AnimatePresence>
        {views ? (
          <motion.p
            key="post-views"
            className="text-xs tabular-nums"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {views.toLocaleString()}
          </motion.p>
        ) : (
          <p className="text-xs">—</p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PostViews;
