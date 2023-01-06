import { useEffect } from 'react';

export default function useBodyBackgroundColorEffect(color: string) {
  useEffect(() => {
    if (window?.document) {
      document.body.style.backgroundColor = color;
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
}
