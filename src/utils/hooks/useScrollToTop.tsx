import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [scrollableElements, setScrollableElements] = useState<Element[]>([])
  const router = useRouter()

  const scrollToTop = useCallback((behavior: ScrollBehavior='smooth') => {
    scrollableElements.forEach(el => el.scrollTo({ top: 0, behavior }))
  }, [scrollableElements])

  useEffect(() => {
    if(typeof window == 'undefined') return

    const elements = getScrollableElements(window.document.documentElement)
    setScrollableElements(elements)
    router.events.on('routeChangeComplete', scrollToTop)

    return () => router.events.off('routeChangeComplete', scrollToTop)
  }, [router, scrollToTop])

  function getScrollableElements(container: HTMLElement) {
    const elements = container ? container.querySelectorAll('*') : document.querySelectorAll('*')
    const scrollableElements: Element[] = []

    elements.forEach((element) => {
      const overflowStyle = window.getComputedStyle(element).overflow
      if (['auto', 'scroll'].some(v => overflowStyle.includes(v))) {
        scrollableElements.push(element)
      }
    })

    return scrollableElements;
  }

  return { scrollToTop }
}
