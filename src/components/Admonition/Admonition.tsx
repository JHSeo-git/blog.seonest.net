import { cn } from '@/utils/styleUtils';

import AdmonitionIcon from './AdmonitionIcon';

export type AdmonitionType = 'note' | 'info' | 'tip' | 'caution' | 'danger';
interface AdmonitionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AdmonitionType;
}

function Admonition({ type = 'note', children, ...rest }: AdmonitionProps) {
  return (
    <div
      className={cn(
        'p-4 mb-2 rounded-lg shadow-sm border-l-[5px] border-gray-500 bg-gray-100 text-gray-900',
        type === 'note' &&
          'border-gray-500 bg-gray-50 text-gray-900 [&>div:first-child]:text-gray-700',
        type === 'caution' &&
          'border-yellow-500 bg-yellow-50 text-yellow-900 [&>div:first-child]:text-yellow-700',
        type === 'danger' &&
          'border-red-500 bg-red-50 text-red-900 [&>div:first-child]:text-red-700',
        type === 'info' &&
          'border-blue-500 bg-blue-50 text-blue-900 [&>div:first-child]:text-blue-700',
        type === 'tip' &&
          'border-green-500 bg-green-50 text-green-900 [&>div:first-child]:text-green-700'
      )}
      {...rest}
    >
      <div className="flex items-center gap-2">
        <AdmonitionIcon admonitionType={type} />
        <p className="uppercase font-bold text-sm">{type}</p>
      </div>
      <div className="mt-2 [&_*:last-of-type]:m-0">{children}</div>
    </div>
  );
}

export default Admonition;
