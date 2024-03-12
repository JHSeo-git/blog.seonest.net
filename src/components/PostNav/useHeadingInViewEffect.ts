import { usePathname } from "next/navigation"

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect"

import { useHeadingView } from "./HeadingViewProvider"

export default function useHeadingInViewEffect(id: string) {
  const { setHeadingId } = useHeadingView()
  const pathname = usePathname()

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingId(id)
        }
      },
      {
        rootMargin: "0px 0px -80% 0px",
      }
    )

    const heading = document.getElementById(id)

    if (heading) {
      observer.observe(heading)
    }

    return () => {
      observer.disconnect()
    }
  }, [pathname])
}
