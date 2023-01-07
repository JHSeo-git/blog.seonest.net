import { cn } from '@/utils/styleUtils';

type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: HeadingAs;
}

function Heading({ as, className, ...rest }: HeadingProps) {
  return (
    <>
      {as === 'h1' && (
        <h1
          className={cn('text-5xl leading-normal scroll-mt-20 mt-[72px] mb-7 font-bold', className)}
          {...rest}
        />
      )}
      {as === 'h2' && (
        <h2
          className={cn(
            'text-4xl leading-normal scroll-mt-20 mt-14 mb-7 font-bold text-indigo-700',
            className
          )}
          {...rest}
        />
      )}
      {as === 'h3' && (
        <h3
          className={cn('text-2xl leading-normal scroll-mt-20 mt-10 mb-7 font-bold', className)}
          {...rest}
        />
      )}
      {as === 'h4' && (
        <h4
          className={cn('text-xl leading-normal scroll-mt-20 mt-8 mb-5 font-bold', className)}
          {...rest}
        />
      )}
    </>
  );
}
export default Heading;
