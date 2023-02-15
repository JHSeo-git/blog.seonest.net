import { cn } from '@/utils/style-utils';

type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: HeadingAs;
}

function Heading({ as, className, ...rest }: HeadingProps) {
  return (
    <>
      {as === 'h1' && (
        <h1
          className={cn(
            'text-5xl leading-normal scroll-m-20 mt-[72px] mb-7 font-bold text-slate-900 dark:text-slate-100 border-b',
            className
          )}
          {...rest}
        />
      )}
      {as === 'h2' && (
        <h2
          className={cn(
            'text-4xl pb-2 leading-normal scroll-m-20 mt-14 mb-7 font-bold text-slate-900 dark:text-slate-100 border-b border-b-slate-200 dark:border-b-slate-700',
            className
          )}
          {...rest}
        />
      )}
      {as === 'h3' && (
        <h3
          className={cn(
            'text-2xl leading-normal scroll-m-20 mt-10 mb-7 font-bold text-slate-900 dark:text-slate-100',
            className
          )}
          {...rest}
        />
      )}
      {as === 'h4' && (
        <h4
          className={cn(
            'text-xl leading-normal scroll-m-20 mt-8 mb-5 font-bold text-slate-900 dark:text-slate-100',
            className
          )}
          {...rest}
        />
      )}
    </>
  );
}
export default Heading;
