import EventEmitter from "events"
import { useEffect, useState } from "react"

export const useNavMode = (defaultMode: 'light' | 'dark' = 'dark') => {
  const [observers, setObservers] = useState<IntersectionObserver[]>([])
  const [navMode, setNavMode] = useState<"light" | "dark">(defaultMode)
  const [displayBg, setDisplayBg] = useState(false)

  const updateStates = (event: any) => {
    console.info("received event", event.detail)
    const mode = event.detail.mode
    const bg = event.detail.bg
    setDisplayBg(bg)
    setNavMode(mode)
  }

  useEffect(() => {
    if(typeof window == 'undefined') return

    window.addEventListener('setNavMode', updateStates)

    return () => {
      window.removeEventListener('setNavMode', updateStates)
      cleanUpObservers()
    }
  }, [])

  const updateNavMode = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const event = new CustomEvent('setNavMode', {detail: {
        bg: !entry.isIntersecting,
        mode: entry.isIntersecting ? defaultMode : 'dark'
      }})
      window.dispatchEvent(event)
    })
  }

  const addObserver = (containerRef: HTMLElement, options: IntersectionObserverInit = {}) => {
    const observer = new IntersectionObserver(updateNavMode,
      {
        rootMargin: '100%',
        threshold: 0.05,
        ...options
      }
    )
    observer.observe(containerRef)
    setObservers(o => [...o, observer])
  }

  const cleanUpObservers = () => {
    observers.forEach(observer => !!observer && observer.disconnect())
  }

  return { addObserver, navMode, displayBg }
}
