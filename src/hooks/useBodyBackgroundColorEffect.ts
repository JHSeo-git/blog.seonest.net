import { useEffect } from 'react';

import { colors } from '@/constants/theme';

type Color = keyof typeof colors;

export default function useBodyBackgroundColorEffect(color: Color) {
  useEffect(() => {
    if (window?.document) {
      document.body.style.backgroundColor = colors[color];
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
}
