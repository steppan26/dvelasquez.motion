import { RefObject, useCallback, useEffect } from "react"

export const useVideoObservers = (videoRef: RefObject<HTMLVideoElement>) => {

  const attachObserver = useCallback((target: HTMLVideoElement) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          target.play()
        } else {
          target.pause()
        }
      })
    }, { threshold: 0.15, root: null })
    observer.observe(target)
    return observer
  }, [])

  useEffect(() => {
    if(!videoRef.current) return

    const observer = attachObserver(videoRef.current)

    return () => observer.disconnect()
  }, [videoRef, attachObserver])
}
