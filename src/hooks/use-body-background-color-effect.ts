import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect"

export default function useBodyBackgroundColorEffect(color: string) {
  useIsomorphicLayoutEffect(() => {
    if (window?.document) {
      document.body.style.backgroundColor = color
    }

    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [color])
}
