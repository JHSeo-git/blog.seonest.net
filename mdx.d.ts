declare module "*.mdx" {
  import type { MDXProps } from "mdx/types"

  const MDXContent: (props: MDXProps) => import("react").JSX.Element
  export default MDXContent

  // 글 컨벤션: 각 page.mdx는 metadata(제목/설명)와 date(ISO 8601 UTC)를 export한다.
  export const metadata: { title?: string; description?: string } | undefined
  export const date: string | undefined
}
