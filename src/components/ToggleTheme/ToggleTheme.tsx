'use client';

import * as Toggle from '@radix-ui/react-toggle';
import { useTheme } from 'next-themes';

import { cn } from '@/utils/style-utils';

import Moon from '../_icons/Moon';
import Sun from '../_icons/Sun';

function IconWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'absolute inset-0 flex items-center justify-center transform text-black dark:text-white',
        '[transition-property:transform,_opacity,_color] duration-500',
        className
      )}
      style={{ transformOrigin: '50% 100px' }}
    >
      {children}
    </span>
  );
}

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
      className={cn(
        'relative overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-700',
        'transition duration-500',
        'w-12 h-12 sm:w-14 sm:h-14'
      )}
    >
      <IconWrapper className={cn('rotate-0 opacity-100 dark:-rotate-90 dark:opacity-0')}>
        <Sun className="h-6 w-6 sm:h-8 sm:w-8" />
      </IconWrapper>
      <IconWrapper className={cn('rotate-90 opacity-0 dark:rotate-0 dark:opacity-100')}>
        <Moon className="h-6 w-6 sm:h-8 sm:w-8" />
      </IconWrapper>
    </Toggle.Root>
  );
}

export default ToggleTheme;
