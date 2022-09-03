import { useEffect } from 'react';

import { useHeadingView } from './HeadingViewProvider';

export default function useHeadingInViewEffect(id: string) {
  const { setHeadingId } = useHeadingView();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingId(id);
        }
      },
      {
        rootMargin: '0px 0px -50% 0px',
      }
    );

    const heading = document.getElementById(id);

    if (heading) {
      observer.observe(heading);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}
