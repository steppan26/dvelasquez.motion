import { useEffect, useState } from "react"

export const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  const handleWindowResize = (e?: UIEvent): any => {
    setIsMobileView(window.innerWidth <= 650)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return { isMobileView }
}
