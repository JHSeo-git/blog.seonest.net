import '@/styles/globals.css';

import { PT_Sans } from '@next/font/google';
import type { NextPage } from 'next';
import Link from 'next/link';

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

const Custom404: NextPage = () => {
  return (
    <div className={`${ptSans.variable} font-sans`}>
      <div className="absolute inset-0 bg-neutral-900 text-white flex items-center justify-center">
        <div className="px-4">
          <h1 className="text-5xl font-bold leading-tight">Not Found</h1>
          <h2 className="mt-2 text-2xl leading-tight">Sorry, there is nothing page.</h2>
          <div className="h-14" />
          <Link href="/" className="text-xl font-bold text-indigo-500">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
