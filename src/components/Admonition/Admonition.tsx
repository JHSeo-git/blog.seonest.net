import { cn } from "@/lib/utils"

import { AdmonitionIcon } from "./AdmonitionIcon"

export type AdmonitionType = "note" | "info" | "tip" | "caution" | "danger"
interface AdmonitionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AdmonitionType
}

export function Admonition({ type = "note", children, ...rest }: AdmonitionProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-[5px] border-gray-500 bg-gray-100 p-4 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-50",
        type === "note" &&
          "border-gray-500 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-50 [&>div:first-child]:text-gray-700 dark:[&>div:first-child]:text-gray-400",
        type === "caution" &&
          "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-50 [&>div:first-child]:text-yellow-700 dark:[&>div:first-child]:text-yellow-400",
        type === "danger" &&
          "border-red-500 bg-red-50 text-red-900 dark:bg-red-900 dark:text-red-50 [&>div:first-child]:text-red-700 dark:[&>div:first-child]:text-red-400",
        type === "info" &&
          "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900 dark:text-blue-50 [&>div:first-child]:text-blue-700 dark:[&>div:first-child]:text-blue-400",
        type === "tip" &&
          "border-green-500 bg-green-50 text-green-900 dark:bg-green-900 dark:text-green-50 [&>div:first-child]:text-green-700 dark:[&>div:first-child]:text-green-400"
      )}
      {...rest}
    >
      <div className="flex items-center gap-2">
        <AdmonitionIcon admonitionType={type} />
        <p className="text-sm font-bold uppercase">{type}</p>
      </div>
      <div className="mt-2 [&_*:last-of-type]:m-0">{children}</div>
    </div>
  )
}
