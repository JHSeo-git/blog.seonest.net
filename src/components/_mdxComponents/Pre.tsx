import { cn } from '@/utils/styleUtils';

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
}

function Pre({ className, ...rest }: PreProps) {
  return (
    <div className="relative mx-[-16px] sm:mx-[-32px]">
      <pre
        className={cn(
          'py-[30px] px-4 my-[1em] mx-0 flex overflow-auto bg-[#2b2b2b] sm:px-8 min-[786px]:rounded-md',
          '[--code-line-inset:16px] sm:[--code-line-inset:32px]',
          '[&>code]:pre-code',
          className
        )}
        {...rest}
      />
    </div>
  );
}

export default Pre;
