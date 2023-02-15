import Link from 'next/link';

import { cn } from '@/utils/style-utils';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Anchor({ href, className, ...rest }: AnchorProps) {
  if (!href) {
    return (
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={cn('text-blue-700 dark:text-blue-500 font-bold hover:underline', className)}
        {...rest}
      />
    );
  }

  const external = href && href.startsWith('http');

  if (external) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('text-blue-700 dark:text-blue-500 font-bold hover:underline', className)}
        {...rest}
      />
    );
  }

  return (
    <Link
      href={href}
      className="font-bold text-blue-700 hover:underline dark:text-blue-500"
      {...rest}
    />
  );
}

export default Anchor;
