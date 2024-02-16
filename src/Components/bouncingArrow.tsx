import { MouseEventHandler, useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Sizes } from "../Assets";
import { useIsMobileView } from "../utils/hooks";

export const BouncingArrow:React.FC = () => {
  const isMobileView = useIsMobileView()
  const TOP = isMobileView ? 0 : -50
  const BOB = {
    from: { y: TOP - 18 },
    to: { y: TOP },
    config: {
      mass: 2,
      tension: 400,
      friction: 15,
      velocity: 0.2,
      restVelocity: 0.4,
    },
  }
  const arrowRef = useRef<HTMLImageElement>(null)


  const [style, set] = useSpring(() => (BOB))

  const makeBounce = (e?: any) => {
    set(BOB)
  }

  useEffect(() => {
    if(typeof window == 'undefined' || !arrowRef.current) return

    makeBounce()
    const interval = setInterval(makeBounce, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleClick: MouseEventHandler = (e) => {
    const main = document.querySelector('#mainContainer') as HTMLElement
    main.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return(
    <>
    <Arrow
      ref={arrowRef}
      src="/arrow.svg"
      alt="arrow"
      width={40}
      height={50}
      style={style}
      onClick={handleClick}
      />
    </>
  )
}


const Arrow = styled(animated.img)`
  cursor: s-resize;
  z-index: 10;
  align-self: end;

  @media (max-width: ${Sizes.small}) {
    position: absolute;
      bottom: 3rem;
    align-self: unset;
    height: 30px;
  }
`
