import { useState } from "react";
import { UseTrailProps, animated, useTrail } from "react-spring";
import styled from "styled-components"
import { MenuItems } from "./menuItems";

const NUM_OF_DIAMONDS = 3

export const Menu:React.FC = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
    setIsOpen(v => !v)
  }

  return(
    <Nav
    onMouseEnter={handleActivateAnimation}
    onMouseLeave={() => setIsHovering(false)}
    onTouchStart={singleAnimation}
    onClick={handleOnClick}
    >
      <MenuItems isOpen={isOpen} />
      {diamonds.map((props, index) => (
        <Diamond key={index} style={props} />
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  cursor: pointer;
  z-index: 999;
  position: fixed;
    top: calc(50px - 2rem);
    right: 50px;
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  padding-block: 2rem;
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
