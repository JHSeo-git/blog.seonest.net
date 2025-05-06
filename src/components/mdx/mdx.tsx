import * as React from "react"
import NextImage from "next/image"
import { cva } from "class-variance-authority"
import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer2/hooks"
import { Tweet as ReactTweet } from "react-tweet"

import { cn } from "@/lib/utils"

import { Admonition } from "../admonition"
import { Callout } from "../callout"
import CopyToClipboard from "../copy-to-clipboard"
import { Zoom } from "../zoom"
import { Counter } from "./examples/counter"
import { PostList } from "./examples/post-list"
import { PostPreview } from "./examples/post-preview"

const mdxImageStyle = cva("mx-auto my-4 h-auto w-full object-contain")

const Image = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!src) {
    return <span className={cn(mdxImageStyle(), className)} />
  }

  if (typeof src !== "string") {
    return <span className={cn(mdxImageStyle(), className)} />
  }

  if (src.startsWith("http")) {
    return (
      <Zoom wrapElement="span" zoomImg={{ alt, src }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={cn(mdxImageStyle(), className)} src={src} alt={alt} {...props} />
      </Zoom>
    )
  }

  return (
    <Zoom wrapElement="span" zoomImg={{ alt, src }}>
      <NextImage
        className={cn(mdxImageStyle(), className)}
        src={src}
        alt={alt ?? ""}
        {...props}
        width={0}
        height={0}
        sizes="100vw"
        placeholder="empty"
      />
    </Zoom>
  )
}

const Video = ({ className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) => (
  <video
    controls
    autoPlay
    muted={true}
    loop
    playsInline
    className={cn("my-2", className)}
    {...props}
  />
)

const IFrame = ({ className, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) => (
  <iframe className={cn("my-4 h-[500px] w-full", className)} {...props} />
)

const components: MDXComponents = {
  h1: ({ className, children, ...props }) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }) => (
    <h2
      className={cn(
        "mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0 dark:border-b-slate-700",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ className, children, ...props }) => (
    <h4
      className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ className, children, ...props }) => (
    <h5
      className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ className, children, ...props }) => (
    <h6
      className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h6>
  ),
  a: ({ className, children, ...props }) => (
    <a
      className={cn(
        "font-medium break-all text-slate-900 underline underline-offset-4 dark:text-slate-50",
        className
      )}
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ className, children, ...props }) => (
    <p className={cn("leading-7 not-first:mt-6", className)} {...props}>
      {children}
    </p>
  ),
  ul: ({ className, children, ...props }) => (
    <ul
      className={cn("my-6 list-disc pl-6 [li_>_&]:m-0 [li_>_&]:list-[circle]", className)}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }) => (
    <ol className={cn("my-6 list-decimal pl-6 [li_>_&]:m-0", className)} {...props}>
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }) => (
    <li className={cn("mt-2", className)} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, children, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 break-all text-slate-800 italic [&>*]:text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold break-all text-slate-900 dark:bg-slate-800 dark:text-slate-400",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <CopyToClipboard>
      <pre
        className={cn("my-6 overflow-x-auto rounded-md py-4", "font-semibold", className)}
        {...props}
      />
    </CopyToClipboard>
  ),
  hr: ({ className, ...props }) => (
    <hr
      className={cn(
        "border-none p-0 outline-none",
        "m-[72px] h-[3px] rounded-md border-white bg-indigo-700 dark:border-black dark:bg-indigo-300",
        "bg-gradient-to-r from-indigo-700 to-rose-700 dark:from-indigo-500 dark:to-rose-500",
        className
      )}
      {...props}
    />
  ),
  img: ({ alt, ...props }) => <Image alt={alt} {...props} />,
  video: (props) => <Video {...props} />,
  table: ({ className, children, ...props }) => (
    <div className={cn("my-4 overflow-x-auto", className)} {...props}>
      <table className="w-full table-auto">{children}</table>
    </div>
  ),
  th: ({ className, children, ...props }) => (
    <th
      className={cn(
        "bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900",
        "dark:bg-slate-800 dark:text-slate-400",
        className
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }) => (
    <td
      className={cn(
        "border-t border-slate-200 px-4 py-2 text-sm text-slate-900",
        "dark:border-slate-700 dark:text-slate-400",
        className
      )}
      {...props}
    >
      {children}
    </td>
  ),

  // custom
  Admonition,
  Callout,
  IFrame,
  Video,
  ImageCaption: ({
    src,
    alt,
    children,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { children?: string }) => (
    <figure className="my-4 w-full">
      <Image {...props} src={src} alt={alt} className="my-0" />
      <figcaption className="mt-2 text-center text-sm opacity-50">{children}</figcaption>
    </figure>
  ),
  Tweet: ({ id }: { id: string }) => (
    <div className="mb-6 flex justify-center">
      <ReactTweet id={id} />
    </div>
  ),

  // examples
  Counter: () => <Counter />,
  PostPreview: ({ slug }: { slug: string }) => <PostPreview slug={slug} />,
  PostList: () => <PostList />,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
