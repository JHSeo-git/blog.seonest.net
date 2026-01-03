import { ImageZoom, ImageZoomProps } from "fumadocs-ui/components/image-zoom"
import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { Tweet as ReactTweet } from "react-tweet"

import { Mermaid } from "@/components/mermaid"

import { cn } from "./lib/utils"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as ImageZoomProps)} />,
    Tweet: ({ id }: { id: string }) => (
      <div className="mb-6 flex justify-center">
        <ReactTweet id={id} />
      </div>
    ),
    Video: ({ className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) => (
      <video
        controls
        autoPlay
        muted={true}
        loop
        playsInline
        className={cn("my-2", className)}
        {...props}
      />
    ),
    IFrame: ({ className, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) => (
      <iframe className={cn("my-4 h-[500px] w-full", className)} {...props} />
    ),
    Mermaid,
    ...components,
  }
}
