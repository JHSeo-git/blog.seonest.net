"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"

const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.GrainGradient),
  {
    ssr: false,
  }
)

export function Hero() {
  const { resolvedTheme } = useTheme()
  const [showShaders, setShowShaders] = useState(false)

  useEffect(() => {
    // apply some delay, otherwise on slower devices, it errors with uniform images not being fully loaded.
    setTimeout(() => {
      setShowShaders(true)
    }, 400)
  }, [])

  return (
    <>
      {showShaders && (
        <GrainGradient
          className="animate-fd-fade-in absolute inset-0 duration-800"
          colors={
            resolvedTheme === "dark"
              ? ["#8fe6f9", "#6fb6cf", "#3a6f7a00"]
              : ["#f4fdff", "#8fe6f9", "#3a6f7a14"]
          }
          colorBack="#00000000"
          softness={1}
          intensity={0.9}
          noise={0.5}
          speed={1}
          scale={1}
          shape="wave"
          minPixelRatio={1}
          maxPixelCount={1920 * 1080}
        />
      )}
    </>
  )
}
