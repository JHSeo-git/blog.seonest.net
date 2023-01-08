import { cn } from '@/utils/styleUtils';

import { useHeadingView } from './HeadingViewProvider';
import useHeadingInViewEffect from './useHeadingInViewEffect';

interface PostNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  id: string;
  level: number;
}

function PostNavItem({ id, level, ...rest }: PostNavItemProps) {
  useHeadingInViewEffect(id);
  const { headingId } = useHeadingView();
  const isActive = headingId === id;

  return (
    <a
      {...rest}
      className={cn(
        'block text-sm font-medium my-2 opacity-70 transition-opacity hover:opacity-100 active:opacity-100',
        isActive && 'opacity-100 text-indigo-700',
        level === 3 && 'pl-3 mt-1',
        level === 4 && 'pl-6 mt-1',
        level === 5 && 'pl-9 mt-1',
        level === 6 && 'pl-12 mt-1'
      )}
    />
  );
}

export default PostNavItem;
