import { useCallback, useEffect, useState } from "react";

export const useHideNavBarOnScroll = (containerId: string, navbarRef: string) => {
  const [lastScrollTop, setLastScrollTop] = useState(0)

  const updateNavPosition = useCallback((e: any) => {
    const scrollTop = e.target.scrollTop
    const navbar = document.querySelector(navbarRef) as HTMLDivElement
    navbar.style.top = scrollTop > lastScrollTop ? '-80px' : '0'
    setLastScrollTop(scrollTop)
  }, [lastScrollTop, navbarRef])

  useEffect(() => {
    if(!containerId || !navbarRef) return

    const container = document.querySelector(containerId)
    container?.addEventListener('scroll', updateNavPosition)

    return () => container?.removeEventListener('scroll', updateNavPosition)
  }, [containerId, navbarRef, updateNavPosition])
}
