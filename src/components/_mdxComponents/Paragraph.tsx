import { cn } from '@/utils/styleUtils';

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({ className, ...rest }: ParagraphProps) {
  return <p className={cn('text-base leading-7 mb-6 sm:text-lg', className)} {...rest} />;
}

export default Paragraph;
