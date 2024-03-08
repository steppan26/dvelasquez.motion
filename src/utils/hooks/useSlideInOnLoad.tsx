import { useCallback, useEffect, useState } from "react";
import { randomIntFromInterval } from "../helpers";

const slideTimeInMs = 500
const slideFunction = "cubic-bezier(0.47, 1.09, 1, 1.14)"

export const useSlideInOnLoad = (querySelector='[data-lazy]') => {
  const [observers, setObservers] = useState<IntersectionObserver[]>([])

  const _attachObserver = useCallback((target: Element) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          (entry.target as HTMLElement).style.transform = 'translateY(0px)';
          (entry.target as HTMLElement).style.opacity = '1';
          setTimeout(() => _unwrapElement(entry.target), slideTimeInMs)
        }
      })
    }, { threshold: 0.05, root: null, rootMargin: randomIntFromInterval(3, 8) + 'px' })
    observer.observe(target)
    setObservers(v => [...v, observer])
  }, [])

  const addObservers = useCallback(() => {
    const elementsArray = Array.from(document.querySelectorAll(querySelector))
    elementsArray.forEach(target => {
      const wrapper = _wrapElement(target);
      if(!wrapper) return

      wrapper.style.transform = ' translateY(20dvh)';
      wrapper.style.opacity = '0.1';
      wrapper.style.transition = `${slideTimeInMs}ms all ${slideFunction}`
      _attachObserver(wrapper)
  })
  },[querySelector, _attachObserver])

  const _wrapElement = (elementToWrap: Element) => {
    const wrapperElement = document.createElement('div')
    wrapperElement.classList.add('slide-wrapper')
    var clonedElement = elementToWrap.cloneNode(true)
    if(!elementToWrap.parentNode) return

    elementToWrap.parentNode.insertBefore(wrapperElement, elementToWrap)
    wrapperElement.appendChild(clonedElement)
    if(!elementToWrap.parentNode) return

    elementToWrap.parentNode.removeChild(elementToWrap)

    return wrapperElement;
}

  const _unwrapElement = (wrapperElement: Element) => {
    var childElement = wrapperElement.firstChild as HTMLElement
    (wrapperElement.parentNode as HTMLElement).replaceChild(childElement, wrapperElement)
    return childElement;
  }
  useEffect(() => {
    if(typeof window == 'undefined') return

    addObservers()

    return () => observers.forEach(observer => observer.disconnect())
  }, [])
}
