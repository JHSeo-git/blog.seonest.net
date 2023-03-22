import { cva } from 'class-variance-authority';
import Link from 'next/link';

const linkStyle = cva('ml-1 font-bold text-indigo-700 dark:text-indigo-400');

export function Footer() {
  return (
    <footer className="py-10 px-2">
      <div className="flex flex-col items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-300 sm:flex-row">
        <div>
          &copy;
          {new Date().getFullYear()}
          <Link
            href="https://github.com/JHSeo-git"
            target="_blank"
            rel="noreferrer"
            className={linkStyle()}
          >
            JHSeo
          </Link>
        </div>
        <div>
          <span className="mr-1 hidden sm:inline-block">,</span>
          Built with
          <Link href="https://nextjs.org/" target="_blank" rel="noreferrer" className={linkStyle()}>
            Next.js
          </Link>
          , UI referenced by
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noreferrer"
            className={linkStyle()}
          >
            ui.shadcn.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
