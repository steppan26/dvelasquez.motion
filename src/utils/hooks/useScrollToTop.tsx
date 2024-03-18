import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [scrollableElements, setScrollableElements] = useState<Element[]>([])

  useEffect(() => {
    if(typeof window == 'undefined') return

    const elements = getScrollableElements(window.document.documentElement)
    setScrollableElements(elements)
  }, [])

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


  const scrollToTop = () => {
    scrollableElements.forEach(el => el.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  return { scrollToTop }
}
