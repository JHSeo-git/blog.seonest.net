import { cn } from '@/utils/styleUtils';

type StrongProps = React.HTMLAttributes<HTMLElement>;

function Strong({ className, ...rest }: StrongProps) {
  return <strong className={cn('text-black dark:text-white', className)} {...rest} />;
}

export default Strong;
