import { cn } from '@/utils/styleUtils';

type BlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>;

function Blockquote({ className, ...rest }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(
        'py-4 pl-5 pr-4 border-l-[5px] rounded-tr-md rounded-br-md mb-4 [&>*:last-child]:mb-0 [&>*:last-child]:text-base',
        'bg-indigo-50  border-indigo-500 dark:bg-indigo-900',
        className
      )}
      {...rest}
    />
  );
}

export default Blockquote;
