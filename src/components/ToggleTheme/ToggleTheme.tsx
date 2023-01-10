'use client';

import { useTheme } from '@wits/next-themes';

function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button type="button" onClick={onClick}>
      {theme}
    </button>
  );
}

export default ToggleTheme;
