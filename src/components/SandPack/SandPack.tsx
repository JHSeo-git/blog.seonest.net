"use client"

import { usePathname } from "next/navigation"
import { Sandpack, type SandpackInternal } from "@codesandbox/sandpack-react"
import { useTheme } from "next-themes"

export function SandPack({ ...props }: SandpackInternal) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const themeName = theme === "dark" ? "dark" : "light"

  return <Sandpack key={`${pathname}_${theme}`} theme={themeName} template="react" {...props} />
}
