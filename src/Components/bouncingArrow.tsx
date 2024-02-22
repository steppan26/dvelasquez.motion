import { MouseEventHandler, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Arrow, Sizes } from "../Assets";
import { useIsMobileView } from "../utils/hooks";

interface Props {
  onClick: MouseEventHandler
}

export const BouncingArrow:React.FC<Props> = ({ onClick }) => {
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
  const [style, set] = useSpring(() => (BOB))

  const makeBounce = (e?: any) => {
    set(BOB)
  }

  useEffect(() => {
    if(typeof window == 'undefined') return

    makeBounce()
    const interval = setInterval(makeBounce, 3000)

    return () => clearInterval(interval)
  }, [])

  return(
    <ArrowWrapper style={style} onClick={onClick}>
      <Arrow />
    </ArrowWrapper>
  )
}

const ArrowWrapper = styled(animated.div)`
  position: relative;
  cursor: s-resize;
  z-index: 10;
  align-self: end;
  margin-bottom: 15.555556dvh;

  @media (max-width: ${Sizes.small}) {
    align-self: unset;
    position: absolute;
      bottom: 3rem;
    height: 30px;
  }
`
