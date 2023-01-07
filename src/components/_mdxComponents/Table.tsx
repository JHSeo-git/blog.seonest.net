import { cn } from '@/utils/styleUtils';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

function Table({ className, ...rest }: TableProps) {
  return (
    <table
      className={cn(
        'w-full border-collapse my-6 [&_th]:p-4 [&_td]:p-4 [&_tr]:border-b [&_tr]:border-gray-300',
        className
      )}
      {...rest}
    />
  );
}

export default Table;
