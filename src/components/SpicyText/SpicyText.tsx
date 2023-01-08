import { cn } from '@/utils/styleUtils';

interface SpicyTextProps {
  children: React.ReactNode;
  em?: boolean;
}

function SpicyText({ children, em = true }: SpicyTextProps) {
  return (
    <span className={cn('font-spicy font-medium text-teal-700 px-2', em && 'italic')}>
      {children}
    </span>
  );
}

export default SpicyText;
