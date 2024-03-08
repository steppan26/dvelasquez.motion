import styled from "styled-components"
import { LoopingVideo } from "../../Components"
import { Sizes } from "../../Assets"

export const PersonalProjectsList:React.FC = () => {
  return(
    <Container>
      <LoopingVideo videoPath="motion-secrets_who-is-looking.webm" soundOption allowControls />
      <LoopingVideo videoPath="motion-secrets_mischievous_blue_dot.webm" soundOption allowControls />
      <LoopingVideo videoPath="motion-secrets_intro.webm" soundOption allowControls />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5dvh;
  margin-bottom: 5dvh;

  & video {
    border: 1px solid var(--clr-text-main);
    border-radius: var(--border-radius);
    overflow: hidden;
    width: clamp(375px, 90vw, 1440px);
    height: auto;
  }

  @media (max-width: ${Sizes.small}) {
    gap: 1dvh;

    &>* {
      width: clamp(375px, 98vw, 1440px);
    }
  }
`
