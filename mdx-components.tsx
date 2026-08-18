import { Children, ComponentPropsWithoutRef, ReactNode } from "react"
import Link from "next/link"
import { highlight } from "sugar-high"

import { Callout } from "@/components/callout"
import { PostMeta } from "@/components/post-meta"

type HeadingProps = ComponentPropsWithoutRef<"h1">
type ParagraphProps = ComponentPropsWithoutRef<"p">
type ListProps = ComponentPropsWithoutRef<"ul">
type ListItemProps = ComponentPropsWithoutRef<"li">
type AnchorProps = ComponentPropsWithoutRef<"a">
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">
type CodeProps = ComponentPropsWithoutRef<"code">

// mdxRs가 GFM 표의 줄바꿈을 {"\n"} 텍스트 노드로 tbody/tr 안에 남겨
// hydration 에러를 일으키므로 공백 자식을 걸러낸다
function stripWhitespaceChildren(children: ReactNode) {
  return Children.toArray(children).filter(
    (child) => typeof child !== "string" || child.trim() !== ""
  )
}

const linkClassName =
  "text-nav decoration-nav/30 hover:text-body-secondary hover:decoration-body-secondary/30 underline underline-offset-2 transition-colors duration-200"

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-heading mb-3 text-[1.7rem] leading-[1.15] font-semibold tracking-[-0.02em] md:text-[2rem]"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-heading mt-12 mb-5 text-[1.45rem] leading-[1.4] font-semibold tracking-[-0.02em]"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-heading mt-10 mb-4 text-[1.2rem] leading-[1.4] font-semibold tracking-[-0.02em]"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="text-heading font-semibold" {...props} />,
  p: (props: ParagraphProps) => <p className="mb-6" {...props} />,
  ol: (props: ListProps) => <ol className="mb-6 list-decimal space-y-1 pl-5" {...props} />,
  ul: (props: ListProps) => <ul className="mb-6 list-disc space-y-1 pl-5" {...props} />,
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="italic" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={linkClassName} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={linkClassName} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName} {...props}>
        {children}
      </a>
    )
  },
  code: ({ children, className, ...props }: CodeProps) => {
    // 코드 펜스(```lang)만 language-* 클래스가 붙는다 — 인라인 백틱은 하이라이팅하지 않음
    const isBlock = typeof className === "string" && className.startsWith("language-")
    if (!isBlock || typeof children !== "string") {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
    const codeHTML = highlight(children)
    return <code className={className} dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  },
  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <table {...props}>{stripWhitespaceChildren(children)}</table>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead {...props}>{stripWhitespaceChildren(children)}</thead>
  ),
  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props}>{stripWhitespaceChildren(children)}</tbody>
  ),
  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr {...props}>{stripWhitespaceChildren(children)}</tr>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="border-divider text-body-secondary mb-6 border-l-2 pl-4" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="bg-divider my-8 h-px border-0" {...props} />
  ),
  PostMeta,
  Callout,
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
