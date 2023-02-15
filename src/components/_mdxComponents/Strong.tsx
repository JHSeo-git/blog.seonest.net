import { cn } from '@/utils/style-utils';

type StrongProps = React.HTMLAttributes<HTMLElement>;

function Strong({ className, ...rest }: StrongProps) {
  return <strong className={cn('text-black dark:text-white', className)} {...rest} />;
}

export default Strong;
