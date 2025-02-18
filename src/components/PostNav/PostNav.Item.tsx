import { cn } from "@/lib/utils"

import { useHeadingView } from "./HeadingViewProvider"
import useHeadingInViewEffect from "./useHeadingInViewEffect"

interface PostNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  id: string
  level: number
}

function PostNavItem({ id, level, ...rest }: PostNavItemProps) {
  useHeadingInViewEffect(id)
  const { headingId } = useHeadingView()
  const isActive = headingId === id

  return (
    <a
      {...rest}
      className={cn(
        "my-2 block text-sm font-medium opacity-70 transition-opacity hover:opacity-100 active:opacity-100",
        isActive && "text-indigo-700 opacity-100 dark:text-indigo-400",
        level === 3 && "mt-1 pl-3",
        level === 4 && "mt-1 pl-6",
        level === 5 && "mt-1 pl-9",
        level === 6 && "mt-1 pl-12"
      )}
    />
  )
}

export default PostNavItem
