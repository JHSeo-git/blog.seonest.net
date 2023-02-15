import { cn } from '@/utils/style-utils';

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

function Table({ className, ...rest }: TableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...rest} />
    </div>
  );
}

export default Table;
