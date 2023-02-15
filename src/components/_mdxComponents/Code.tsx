import { cn } from '@/utils/style-utils';

type CodeProps = React.HTMLAttributes<HTMLElement>;

function Code({ className, ...rest }: CodeProps) {
  const inline = !className?.match('code-highlight');

  if (inline) {
    return (
      <code
        className={cn(
          'font-mono text-sm font-semibold rounded text-indigo-800 bg-indigo-50 dark:bg-indigo-800 dark:text-indigo-100 px-1 py-0.5',
          className
        )}
        {...rest}
      />
    );
  }

  return <code className={className} {...rest} />;
}

export default Code;
