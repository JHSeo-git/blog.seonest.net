'use client';

import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';

export interface BodyBackgroundColorProps {
  color: string;
}

function BodyBackgroundColor({ color }: BodyBackgroundColorProps) {
  useBodyBackgroundColorEffect(color);

  return null;
}

export default BodyBackgroundColor;
