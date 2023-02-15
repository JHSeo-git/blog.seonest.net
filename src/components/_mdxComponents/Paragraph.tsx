import { cn } from '@/utils/style-utils';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({ className, ...rest }: ParagraphProps) {
  return (
    <p
      className={cn('text-base leading-7 mb-6 sm:text-lg text-black dark:text-white', className)}
      {...rest}
    />
  );
}

export default Paragraph;
