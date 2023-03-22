'use client';

import * as React from 'react';

import { cn } from '@/utils/style-utils';

import { Icons } from './Icons';

async function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
}

interface CopyToClipboardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
function CopyToClipboard({ children, ...props }: CopyToClipboardProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const onCopy = () => {
    if (ref?.current?.textContent) {
      copyToClipboard(ref.current.textContent);
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  };

  return (
    <>
      <div ref={ref} {...props}>
        {children}
      </div>
      <button
        className={cn(
          'absolute top-4 right-4 z-20 inline-flex h-8 items-center justify-center rounded-md border-none p-2 text-sm font-medium text-slate-300 opacity-50 outline-none transition-all hover:bg-transparent hover:opacity-100 dark:text-slate-100 dark:hover:bg-slate-800'
        )}
        onClick={onCopy}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <Icons.Check className="h-4 w-4" /> : <Icons.Copy className="h-4 w-4" />}
      </button>
    </>
  );
}

export default CopyToClipboard;
