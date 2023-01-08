import { cn } from '@/utils/styleUtils';

export type CodeProps = React.HTMLAttributes<HTMLElement>;

function Code({ className, ...rest }: CodeProps) {
  const inline = !className?.match('code-highlight');

  if (inline) {
    return (
      <code
        className={cn('font-mono font-medium text-rose-700 px-1 break-all', className)}
        {...rest}
      />
    );
  }

  return <code className={className} {...rest} />;
}

export default Code;
