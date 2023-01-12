'use client';

import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';

interface BodyBackgroundColorProps {
  color: string;
}

function BodyBackgroundColor({ color }: BodyBackgroundColorProps) {
  useBodyBackgroundColorEffect(color);

  return null;
}

export default BodyBackgroundColor;
