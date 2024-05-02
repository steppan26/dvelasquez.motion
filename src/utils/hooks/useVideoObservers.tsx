import { RefObject, useCallback, useEffect, useState } from "react"
import { isElementInViewport } from "../helpers"

export const useVideoObservers = (videoRef: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false)

  const attachObserver = useCallback((target: HTMLDivElement) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting)
      })
    }, { threshold: 0.05, root: null })
    observer.observe(target)
    return observer
  }, [])

  useEffect(() => {
    if(!videoRef.current) return

    const observer = attachObserver(videoRef.current)

    return () => observer.disconnect()
  }, [videoRef, attachObserver])

  return { isVisible }
}
