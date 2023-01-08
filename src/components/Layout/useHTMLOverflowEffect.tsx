import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

export default function useHTMLOverflowEffect(hidden: boolean) {
  useIsomorphicLayoutEffect(() => {
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
