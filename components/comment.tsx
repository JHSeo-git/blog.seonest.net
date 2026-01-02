"use client"

import { usePathname } from "next/navigation"
import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export function Comment() {
  const pathname = usePathname()
  const { theme } = useTheme()

  return (
    <div className="mt-10">
      <Giscus
        key={`${pathname}_${theme}`}
        id="comments"
        repo="JHSeo-git/seonest-comments"
        repoId="R_kgDOGRegJA"
        category="Announcements"
        categoryId="DIC_kwDOGRegJM4CN-hf"
        mapping="title"
        lang="ko"
        loading="lazy"
        theme={theme}
      />
    </div>
  )
}
