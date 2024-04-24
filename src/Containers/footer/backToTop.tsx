import styled from "styled-components"
import { Sizes, VerticalArrow } from "../../Assets"
import { useScrollToTop } from "../../utils/hooks"
import { useState } from "react"
import { animated, useSpring } from "react-spring"

export const BackToTop:React.FC = () => {
  const { scrollToTop } = useScrollToTop()
  const [isHovering, setIsHovering] = useState(false)

  const { x } = useSpring({
    from: { x: 0 },
    x: isHovering ? 1 : 0,
    config: { tension: 100, friction: 10 },
    reset: true
  });

  return(
    <Container
    onClick={_ => scrollToTop()}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    style={{
      transform: x.interpolate(x => `rotate(${10 * Math.sin(x * Math.PI)}deg)`),
    }}
    >
      <Background />
      <VerticalArrow />
    </Container>
  )
}


const Container = styled(animated.div)`
  --size: clamp(75px, 6.5vw, 150px);

  cursor: pointer;
  position: absolute;
  top: -45px; right: 7vw;
  display: grid;
  place-items: center;

  width: var(--size);
    max-width: 120px;
  height: var(--size);
    max-height: 120px;

  svg {
    z-index: 2;
    transform-origin: center top;
    transform: scale(0.85);
    max-height: 65%;
    max-width: 41%;
  }

  @media (max-width: ${Sizes.small}) {
    --size: clamp(38px, 15vw, 60px);
    top: -25px;
  }
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: #FFD340;
  border-radius: 5% 50% 50% 50%;
  overflow: hidden;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  transform: rotate(45deg);
  transition: ease all 260ms;

&:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
  }
`
