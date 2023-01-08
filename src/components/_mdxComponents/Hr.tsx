import { cn } from '@/utils/styleUtils';

type HrProps = React.HTMLAttributes<HTMLHRElement>;

function Hr({ className, ...rest }: HrProps) {
  return (
    <hr
      className={cn(
        'm-0 p-0 outline-none border-none',
        'm-[72px] h-[3px] rounded-md border-white bg-indigo-700',
        'bg-gradient-to-r from-indigo-700 to-rose-700',
        className
      )}
      {...rest}
    />
  );
}

export default Hr;
