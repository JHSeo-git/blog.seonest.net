'use client';

import * as Toggle from '@radix-ui/react-toggle';
import { useTheme } from '@wits/next-themes';

import { cn } from '@/utils/styleUtils';

import Moon from '../_icons/Moon';
import Sun from '../_icons/Sun';

function IconWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'absolute inset-0 flex items-center justify-center transition duration-500 transform text-black dark:text-white',
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
      className="relative w-14 h-14 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 transition duration-500 border border-gray-300 dark:border-gray-700"
    >
      <IconWrapper className={cn('rotate-0 dark:-rotate-90 dark:opacity-0')}>
        <Sun width={32} height={32} />
      </IconWrapper>
      <IconWrapper className={cn('rotate-90 dark:rotate-0 dark:opacity-100')}>
        <Moon width={32} height={32} />
      </IconWrapper>
    </Toggle.Root>
  );
}

export default ToggleTheme;
