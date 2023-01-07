import { cn } from '@/utils/styleUtils';

export type DelProps = React.DelHTMLAttributes<HTMLModElement>;

function Del({ className, ...rest }: DelProps) {
  return <del className={cn('opacity-50', className)} {...rest} />;
}

export default Del;
