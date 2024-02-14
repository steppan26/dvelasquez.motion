import { useEffect } from "react"

export const useTrackMouseClick = () => {
  useEffect(() => {
    if(typeof window == 'undefined') return

    window.addEventListener('click', trackMouseClick)

    return () => window.removeEventListener('click', useTrackMouseClick)
  }, [])

  const trackMouseClick = (e: MouseEvent) => {
    console.info(e.target)
  }
  return
}
