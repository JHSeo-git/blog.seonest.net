"use client"

import { useEffect } from "react"
import { cn } from "@/utils/style-utils"
import useSWR from "swr"

import ApiClient from "@/lib/api-client"
import { usePostViews } from "@/hooks/usePostViews"

import { Icons } from "./Icons"

type PostView = {
  views: number
}

export interface PostViewsProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string
  isFetchView?: boolean
  withIcon?: boolean
}

export function PostViews({
  slug,
  isFetchView = true,
  withIcon = true,
  className,
  ...props
}: PostViewsProps) {
  const { data } = useSWR<PostView>(`/api/posts/views?slug=${slug}`, ApiClient.request)
  const { fetchViews } = usePostViews(slug)

  useEffect(() => {
    if (!isFetchView) {
      return
    }
    fetchViews()
  }, [fetchViews, isFetchView])

  return (
    <div className={cn("flex items-center gap-1 text-xs", className)} {...props}>
      {withIcon && <Icons.LineChart width={16} height={16} />}
      {data && (
        <>
          <p className="[font-size:inherit]">{data.views.toLocaleString()}</p>
          <p className="[font-size:inherit]">
            {data.views === 0 || data.views === 1 ? "view" : "views"}
          </p>
        </>
      )}
    </div>
  )
}
