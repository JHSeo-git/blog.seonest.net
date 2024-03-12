import { Icons } from "../Icons"
import type { AdmonitionType } from "./Admonition"

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
