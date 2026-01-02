import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared"
import { AlbumIcon } from "lucide-react"

import { SeonestIcon } from "@/app/layout.client"

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: "Blog",
    url: "/blog",
    active: "nested-url",
  },
]

export const logo = (
  <>
    <SeonestIcon className="size-5" />
  </>
)

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          <span className="font-medium">seonest</span>
        </>
      ),
    },
    links: [],
    githubUrl: "https://github.com/JHSeo-git/blog.seonest.net",
  }
}
