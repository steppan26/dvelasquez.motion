import { useCallback, useEffect, useState } from "react";
import { randomIntFromInterval } from "../helpers";

const slideTimeInMs = 1800
const slideTransform = 'translateY(5dvh)'
const slideFunction = "cubic-bezier(0.71, 0, 0.18, 0.93)"

export const useSlideInOnLoad = (querySelector='[data-lazy]') => {
  const [observers, setObservers] = useState<IntersectionObserver[]>([])

  const _attachObserver = useCallback((target: Element) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          (entry.target as HTMLElement).style.transform = 'translateY(0px)';
          (entry.target as HTMLElement).style.opacity = '1';
          setTimeout(() => {
            _unwrapElement(entry.target)
            observer.disconnect()
          }, slideTimeInMs)
        }
      })
    }, { threshold: 0.15, root: null, rootMargin: randomIntFromInterval(3, 8) + 'px' })
    observer.observe(target)
    setObservers(v => [...v, observer])
  }, [])

  const _wrapElement = useCallback((elementToWrap: Element) => {
    const parentNode = elementToWrap.parentNode
    if(!parentNode) return

    const wrapperElement = document.createElement('div')
    wrapperElement.classList.add('slide-wrapper')
    var clonedElement = elementToWrap.cloneNode(true)

    parentNode.insertBefore(wrapperElement, elementToWrap)
    wrapperElement.appendChild(clonedElement)
    _applyStyles(wrapperElement, elementToWrap)
    parentNode.removeChild(elementToWrap)

    return wrapperElement;
  }, [])

  const addObservers = useCallback(() => {
    const elementsArray = Array.from(document.querySelectorAll(querySelector))
    //@ts-ignore
    elementsArray.filter((el) => !["", "false"].includes(el.dataset.lazy))
    .forEach(target => {
      const wrapper = _wrapElement(target);
      if(!wrapper) return

      const originalStyle = window.getComputedStyle(target)
      const transformRegex = new RegExp('translate(?:Y)?\(([^)]+)\)', 'g')
      wrapper.style.transform = slideTransform + ' ' + originalStyle.transform.replaceAll(transformRegex, "");
      wrapper.style.opacity = '0';
      wrapper.style.transition = `${slideTimeInMs}ms all ${slideFunction}`
      _attachObserver(wrapper)
  })
  },[querySelector, _attachObserver, _wrapElement])


  const _applyStyles = (wrapperElement: HTMLElement, elementToWrap: Element) => {

    // TRANSITION ANIMATION
    const originalStyle = window.getComputedStyle(elementToWrap)
    // @ts-ignore
    const element_id = elementToWrap.dataset.lazy
    wrapperElement.style.transform = originalStyle.transform

    if(element_id === 'motion-secrets_drawings_text'){
      wrapperElement.style.margin = originalStyle.margin
    }

    if(element_id === 'motion-secrets_drawing'){
      wrapperElement.style.gridArea = originalStyle.gridArea
      wrapperElement.style.alignSelf = originalStyle.alignSelf
      wrapperElement.style.justifySelf = originalStyle.justifySelf
    }

    if(element_id === 'phone-screenshots_image'){
      wrapperElement.style.margin = originalStyle.margin
      wrapperElement.style.width = originalStyle.width
      wrapperElement.style.height = originalStyle.height
    }

    if(element_id === 'jelly-projectScreens_image'){
      wrapperElement.style.flex = originalStyle.flex
    }

  }

  const _unwrapElement = (wrapperElement: Element) => {
    var childElement = wrapperElement.firstChild as HTMLElement
    if(!wrapperElement.parentNode) return

    wrapperElement.parentNode.replaceChild(childElement, wrapperElement)
    return childElement;
  }

  useEffect(() => {
    if(typeof window == 'undefined') return

    addObservers()

    return () => observers.forEach(observer => observer.disconnect())
  }, [])
}
