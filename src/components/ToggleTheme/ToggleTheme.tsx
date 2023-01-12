'use client';

import * as Toggle from '@radix-ui/react-toggle';
import { useTheme } from '@wits/next-themes';

import Moon from '../_icons/Moon';
import Sun from '../_icons/Sun';
function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const onClick = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Toggle.Root
      title={isDark ? 'Toggle light mode' : 'Toggle dark mode'}
      onClick={onClick}
      aria-label={isDark ? 'Toggle light mode' : 'Toggle dark mode'}
    >
      {isDark ? <Sun /> : <Moon />}
    </Toggle.Root>
  );
}

export default ToggleTheme;
