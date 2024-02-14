import { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const TOP = -50

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
export const BouncingArrow:React.FC = () => {
  const arrowRef = useRef<HTMLImageElement>(null)


  const [style, set] = useSpring(() => (BOB))

  const makeBounce = (e?: any) => {
    console.info('bounce bitch')
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

  return(
    <>
    <Arrow
      ref={arrowRef}
      src="/arrow.svg"
      alt="arrow"
      width={40}
      height={50}
      style={style}
      onClick={makeBounce}
      />
    </>
  )
}


const Arrow = styled(animated.img)`
  cursor: s-resize;
  z-index: 10;
  align-self: end;
`
