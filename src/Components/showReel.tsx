import styled from "styled-components"
import { Sizes } from "../Assets"

export const ShowReel:React.FC = () => {
  return(
    <Container>
      <Text>
        Showreel
      </Text>
      <Video></Video>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  align-self: end;
  display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  width: clamp(650px, 80%, 1240px);
  height: 540px;
  margin-block: 4dvh;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Video = styled.div`
  flex: 1 1 100%;
  height: 100%;
  background-color: var(--clr-bg-secondary);
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);
`

const Text = styled.h3`
  position: absolute;
    bottom: 0;
    left: 0;
  font-size: 70px;
  font-weight: 300;
  font-style: italic;
  transform: rotate(-90deg);
    transform-origin: left bottom;
`
