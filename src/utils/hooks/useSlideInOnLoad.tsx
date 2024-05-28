import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useIsMobileView } from "./useIsMobileView";
import { useTranslation } from "./useTranslation";

export const useSlideInOnLoad = (querySelector='[data-lazy]') => {
  const [observers, setObservers] = useState<IntersectionObserver[]>([])
  const { isMobileView } = useIsMobileView()
  const router = useRouter()
  const { t } = useTranslation()

  const _attachObserver = useCallback((target: Element) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          (entry.target as HTMLElement).style.opacity = '1';
          const durationRaw = getComputedStyle(entry.target as HTMLElement).transitionDuration
          const cleanedDuration = parseFloat(durationRaw.replace('s', '').trim()) * 1000
          setTimeout(() => {
            _unwrapElement(entry.target)
            observer.disconnect()
          }, cleanedDuration + 100)
        }
      })
    }, {
      threshold: 0.15,
      root: null,
      // rootMargin: randomIntFromInterval(3, 8) + 'px'
    })
    observer.observe(target)
    setObservers(v => [...v, observer])
  }, [])

  const _wrapElement = useCallback((elementToWrap: Element) => {
    const parentNode = elementToWrap.parentNode
    if(!parentNode) return

    const wrapperElement = document.createElement('div')
    wrapperElement.classList.add('slide-wrapper')
    _applyStyles(wrapperElement, elementToWrap)
    parentNode.insertBefore(wrapperElement, elementToWrap)
    wrapperElement.appendChild(elementToWrap)
    return wrapperElement;
  }, [])

  const addObservers = useCallback(() => {
    const elementsArray = Array.from(document.querySelectorAll(querySelector))
    //@ts-ignore
    elementsArray.filter((el) => !["", "false"].includes(el.dataset.lazy))
    .forEach(target => {
      const wrapper = _wrapElement(target);
      wrapper && _attachObserver(wrapper)
  })
  },[querySelector, _attachObserver, _wrapElement])


  const _applyStyles = (wrapperElement: HTMLElement, elementToWrap: Element) => {

    // TRANSITION ANIMATION
    const originalStyle = window.getComputedStyle(elementToWrap)

    // @ts-ignore
    const element_id = elementToWrap.dataset.lazy
    wrapperElement.style.flex = originalStyle.flex
    wrapperElement.style.gridArea = originalStyle.gridArea
    wrapperElement.style.overflow = originalStyle.overflow

    switch (element_id) {
      case 'showreel':
        wrapperElement.style.display = originalStyle.display
        wrapperElement.style.justifyContent = originalStyle.justifyContent
        wrapperElement.style.alignItems = originalStyle.alignItems
        wrapperElement.style.alignSelf = originalStyle.alignSelf

        break;

      case 'projectScreens_image':
        wrapperElement.style.transform = originalStyle.transform
        wrapperElement.style.order = originalStyle.order
        break;

      case 'motion-secrets_drawings_text':
        wrapperElement.style.margin = originalStyle.margin
        break;

      case 'motion-secrets_drawing':
        wrapperElement.style.gridArea = originalStyle.gridArea
        wrapperElement.style.alignSelf = originalStyle.alignSelf
        wrapperElement.style.justifySelf = originalStyle.justifySelf
        wrapperElement.style.overflow = 'visible'
        break;

      case 'phone-screenshots_image':
        wrapperElement.style.margin = originalStyle.margin
        wrapperElement.style.width = originalStyle.width
        wrapperElement.style.height = originalStyle.height
        wrapperElement.style.order = originalStyle.order
        break;

      case 'wrapperElement.style.flex = originalStyle.flex':
        wrapperElement.style.flex = originalStyle.flex
        break;

      case 'intro-image':
        wrapperElement.style.display = 'flex'
        wrapperElement.style.justifyContent = 'center'
        wrapperElement.style.width = '100%'

      case 'intro':
        wrapperElement.style.gridArea = originalStyle.gridArea
        wrapperElement.style.alignSelf = originalStyle.alignSelf
        wrapperElement.style.height = originalStyle.height
        wrapperElement.style.justifySelf = originalStyle.justifySelf
        wrapperElement.style.order = originalStyle.order
        break;

      default:
        break;
    }

    if (element_id === 'intro') {
      wrapperElement.style.width = originalStyle.width
    }
  }

  const _unwrapElement = (wrapperElement: Element) => {
    var childElement = wrapperElement.firstChild as HTMLElement
    if(!wrapperElement.parentNode) return

    wrapperElement.parentNode.replaceChild(childElement, wrapperElement)
    return childElement;
  }

  const cleanUp = () => {
    const observedElements = document.querySelectorAll('.slide-wrapper')
    observedElements.forEach(_unwrapElement)
    observers.forEach(observer => observer.disconnect())
  }

  useEffect(() => {
    if(typeof window == 'undefined') return

    addObservers()

    return cleanUp
  }, [router.asPath, t])
}
