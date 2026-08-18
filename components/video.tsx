import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type VideoProps = ComponentPropsWithoutRef<"video"> & {
  caption?: string
  wide?: boolean
}

// 동영상은 정적 import를 지원하지 않으므로 public/post/<slug>/ 아래에 두고 src 경로로 넘긴다
export function Video({ caption, wide = false, className, ...props }: VideoProps) {
  return (
    <figure className={cn("my-6", wide && "relative left-1/2 w-screen max-w-275 -translate-x-1/2")}>
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="metadata"
        className={cn("border-divider w-full rounded-lg border", className)}
        {...props}
      />
      {caption ? (
        <figcaption className="text-body-secondary mt-2 text-center text-sm">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
