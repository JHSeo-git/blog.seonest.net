"use client"

import { useServerInsertedHTML } from "next/navigation"
import { getSandpackCssText } from "@codesandbox/sandpack-react"

/**
 * Ensures CSSinJS styles are loaded server side.
 */
export function SandPackCSS() {
  useServerInsertedHTML(() => {
    return <style dangerouslySetInnerHTML={{ __html: getSandpackCssText() }} id="sandpack" />
  })

  return null
}
