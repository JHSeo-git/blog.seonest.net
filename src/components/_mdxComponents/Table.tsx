import { cn } from '@/utils/styleUtils';

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

function Table({ className, ...rest }: TableProps) {
  return (
    <table
      className={cn(
        'w-full border-collapse my-6 [&_th]:p-4 [&_td]:p-4 [&_tr]:border-b [&_tr]:border-gray-300 dark:[&_tr]:border-gray-500',
        className
      )}
      {...rest}
    />
  );
}

export default Table;
