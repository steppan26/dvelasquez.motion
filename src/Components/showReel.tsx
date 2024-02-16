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
  display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  width: clamp(375px, 100%, 1240px);
  height: 540px;
  margin-block: 4dvh;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Video = styled.div`
  flex: 0 1 100%;
  height: 100%;
  background-color: var(--clr-bg-secondary);
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);
`

const Text = styled.h3`
  font-size: 70px;
  font-weight: 300;
  font-style: italic;
  transform: rotate(-90deg) translateY(320%);
    transform-origin: left bottom;
`
