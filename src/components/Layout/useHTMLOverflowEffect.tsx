import { useEffect } from 'react';

export default function useHTMLOverflowEffect(hidden: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    if (hidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [hidden]);
}
