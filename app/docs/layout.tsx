import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs"

import { baseOptions, logo } from "@/lib/layout.shared"
import { source } from "@/lib/source"

function docsOptions(): DocsLayoutProps {
  return {
    ...baseOptions(),
    tree: source.pageTree,
    nav: {
      title: (
        <>
          {logo}
          <span className="font-medium">seonest</span>
        </>
      ),
    },
  }
}

export default function Layout({ children }: LayoutProps<"/docs">) {
  return <DocsLayout {...docsOptions()}>{children}</DocsLayout>
}
