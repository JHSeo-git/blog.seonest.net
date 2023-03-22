import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { Icons } from '../Icons';
import ModeToggle from '../ModeToggle';

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent py-2 px-4 text-sm font-medium transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:bg-slate-800'
);

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6">
          <Icons.Logo />
        </Link>
        <nav className="flex items-center space-x-2"></nav>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            <Link href="/about" className={navigationMenuTriggerStyle()}>
              About
            </Link>
            {/* <Link href="https://github.com/JHSeo-git" target="_blank" rel="noreferrer">
              <span
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-slate-700 dark:text-slate-400',
                })}
              >
                <Icons.Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </span>
            </Link> */}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
