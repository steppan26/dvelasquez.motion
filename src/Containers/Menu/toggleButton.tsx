import { useState } from "react"
import { UseTrailProps, animated, useTrail } from "react-spring"
import styled from "styled-components"

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
        {diamonds.map((props, index) => (
          <Diamond key={index} style={props} />
        ))}
      </DiamondsWrapper>
  )
}


const DiamondsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-block: 1rem;
`

const Diamond = styled(animated.span)`
  position: relative;
  width: 8px;
  height: 8px;
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
    background-color: ${p => p.theme.textPrimary};
  }
`