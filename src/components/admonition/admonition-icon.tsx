import { Icons } from "../icons"
import type { AdmonitionType } from "./admonition"

interface AdmonitionIconProps {
  admonitionType: AdmonitionType
}

export function AdmonitionIcon({ admonitionType }: AdmonitionIconProps) {
  return (
    <>
      {admonitionType === "note" && <Icons.Info />}
      {admonitionType === "caution" && <Icons.AlertTriangle />}
      {admonitionType === "danger" && <Icons.Flame />}
      {admonitionType === "info" && <Icons.AlertCircle />}
      {admonitionType === "tip" && <Icons.Lightbulb />}
    </>
  )
}
