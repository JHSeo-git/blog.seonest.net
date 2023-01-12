import { cn } from '@/utils/styleUtils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('w-full max-w-[1100px] mx-auto px-4 sm:px-8', className)}>{children}</div>
  );
}

export default Container;
