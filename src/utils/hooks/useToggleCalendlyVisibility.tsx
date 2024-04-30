import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const useToggleCalendlyVisibility = () => {
  const router = useRouter()

  useEffect(() => {
    if(typeof window == 'undefined') return

    const landingContainer = document.getElementById('landingContainer')as HTMLDivElement
    !!landingContainer && _attachObserver(landingContainer)
  }, [router.pathname])

  const _attachObserver = useCallback((target: Element) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const calendlyElement = document.querySelector('.calendly-badge-widget')
        if(entry.isIntersecting){
          calendlyElement?.classList.remove('show')
        } else {
          calendlyElement?.classList.add('show')
        }
      })
    }, { threshold: 0.15, root: null })
    observer.observe(target)
  }, [])

}
