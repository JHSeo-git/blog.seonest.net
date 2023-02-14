import { cn } from '@/utils/styleUtils';

type CodeProps = React.HTMLAttributes<HTMLElement>;

function Code({ className, ...rest }: CodeProps) {
  const inline = !className?.match('code-highlight');

  if (inline) {
    return (
      <code
        className={cn(
          'font-mono text-sm font-semibold rounded text-slate-900 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 px-1 py-0.5',
          className
        )}
        {...rest}
      />
    );
  }

  return <code className={className} {...rest} />;
}

export default Code;
