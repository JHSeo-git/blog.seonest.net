"use client"

import * as React from "react"
import { getDistanceToNow, type GetDistanceToNowOptions } from "@/utils/date-utils"

import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect"

interface DateDistanceProps extends React.HTMLAttributes<HTMLSpanElement> {
  date: string
  options?: GetDistanceToNowOptions
}

export function DateDistance({ date, options, ...props }: DateDistanceProps) {
  const [distance, setDistance] = React.useState<string>()

  useIsomorphicLayoutEffect(() => {
    setDistance(getDistanceToNow(date, options))
  }, [])

  return <span {...props}>{distance}</span>
}
