'use client';
import * as React from 'react';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import type { GetDistanceToNowOptions } from '@/utils/date-utils';
import { getDistanceToNow } from '@/utils/date-utils';

interface DateDistanceProps extends React.HTMLAttributes<HTMLSpanElement> {
  date: string;
  options?: GetDistanceToNowOptions;
}

export function DateDistance({ date, options, ...props }: DateDistanceProps) {
  const [distance, setDistance] = React.useState<string>();

  useIsomorphicLayoutEffect(() => {
    setDistance(getDistanceToNow(date, options));
  }, []);

  return <span {...props}>{distance}</span>;
}
