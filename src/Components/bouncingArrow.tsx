import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

export const BouncingArrow:React.FC = () => {
  const [isAnimating, setAnimation] = useState(false)
  const arrowRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if(typeof window == 'undefined') return

    window
  }, [])

  // Define the spring animation
  const [style, set] = useSpring(() => ({
    y: isAnimating ? 100 : 0,
    loop: { reverse: true },
    from: { y: 0 },
    config: { tension: 200, friction: 20 },
    // onRest: () => setDoubleDip(!doubleDip) // Toggle double dip effect
  }))

  const toggleAnimation = () => {
    set({y: 100})
    setAnimation(true)
    setTimeout(() => {
      set({y: 0})
      setAnimation(false)
    }, 500)
  }


  return(
    <>
    <Arrow
      ref={arrowRef}
      src="/arrow.svg"
      alt="arrow"
      width={50}
      height={100}
      style={style}
      onMouseEnter={toggleAnimation}
      />
    </>
  )
}


const Arrow = styled(animated.img)`
  align-self: end;
`
