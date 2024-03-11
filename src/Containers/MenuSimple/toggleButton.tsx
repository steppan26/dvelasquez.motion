import { useState } from "react"
import { UseTrailProps, animated, useTrail } from "react-spring"
import styled from "styled-components"
import { Sizes } from "../../Assets"

interface Props {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

const NUM_OF_DIAMONDS = 3

export const ToggleButton:React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [isHovering, setIsHovering] = useState(false)
  const springConfig: UseTrailProps['config'] = {
    mass: 2,
    tension: 280,
    friction: 45,
    precision: 0.2,
    restVelocity: 0.2,
    velocity: 0.1
  }

  const diamonds = useTrail(NUM_OF_DIAMONDS, {
    from: { y: 0 },
    to: { y: isHovering && !isOpen ? -6 : 0 },
    config: springConfig,
    stagger: 160,
    loop: { reverse: true },
    delay: 0,
  })

  const singleAnimation = () => {
    setIsHovering(true)
    setTimeout(() => setIsHovering(false))
  }

  const handleActivateAnimation = () => {
    setIsHovering(true)
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return(
    <DiamondsWrapper
      style={{ position: 'relative'}}
      onMouseEnter={handleActivateAnimation}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={singleAnimation}
      onClick={handleOnClick}
      >
        <HoverArea onMouseEnter={handleActivateAnimation} >
        </HoverArea>
        <MouseInteractionArea />
        {diamonds.map((props, index) => (
          <Diamond key={index} style={props} />
        ))}
      </DiamondsWrapper>
  )
}


const DiamondsWrapper = styled.div`
  z-index: 5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(5px, 0.502762vw, 10px);
  padding-block: 2rem;

  @media (max-width: ${Sizes.small}) {
    gap: 8px;
  }
`

const HoverArea = styled.div`
  --area-size: 30vw;

  cursor: default;
  z-index: 4;
  position: absolute;
  width: var(--area-size);
  height: var(--area-size);
  border-radius: 50%;
`

const MouseInteractionArea = styled.div`
  z-index: 6;
  cursor: pointer;
  position: absolute;
  inset: 0 -1rem;
`

const Diamond = styled(animated.span)`
  --diamond-size: 0.416667vw;

  position: relative;
  width: var(--diamond-size);
  height: var(--diamond-size);
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-delay: 0.4s;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
    border-radius: 1px;
    background-color: var(--nav-main-color);
  }

  @media (max-width: ${Sizes.small}) {
    --diamond-size: 4px;
  }
`
