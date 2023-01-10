import { cn } from '@/utils/styleUtils';

interface SpicyTextProps {
  children: React.ReactNode;
  em?: boolean;
}

function SpicyText({ children, em = true }: SpicyTextProps) {
  return (
    <span
      className={cn('font-spicy font-medium text-teal-700 dark:text-teal-400 px-2', em && 'italic')}
    >
      {children}
    </span>
  );
}

export default SpicyText;
