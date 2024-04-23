import styled from "styled-components"
import { Sizes, VerticalArrow } from "../../Assets"
import { useScrollToTop } from "../../utils/hooks"

export const BackToTop:React.FC = () => {
  const { scrollToTop } = useScrollToTop()

  return(
    <Container onClick={_ => scrollToTop()}>
      <Background />
      <VerticalArrow />
    </Container>
  )
}


const Container = styled.div`
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
  }

  @media (max-width: ${Sizes.small}) {
    --size: clamp(38px, 11.2vw, 50px);
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
    box-shadow: 7px 2px 5px 2px rgba(0, 0, 0, 0.17);
  }
`
