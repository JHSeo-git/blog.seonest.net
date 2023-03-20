import { cn } from '@/utils/style-utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1100px] px-4 sm:px-8', className)}>{children}</div>
  );
}

export default Container;
