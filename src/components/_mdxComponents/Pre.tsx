import { cn } from '@/utils/styleUtils';

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
}

function Pre({ className, ...rest }: PreProps) {
  return (
    <div className="relative">
      <pre
        className={cn(
          'py-4 my-[1em] flex overflow-auto rounded-md',
          'font-semibold',
          '[--code-line-inset:16px] sm:[--code-line-inset:32px]',
          // '[&>code]:pre-code',
          className
        )}
        {...rest}
      />
    </div>
  );
}

export default Pre;
