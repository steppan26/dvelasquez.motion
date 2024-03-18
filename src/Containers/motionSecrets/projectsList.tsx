import styled from "styled-components"
import { LoopingVideo } from "../../Components"
import { Sizes } from "../../Assets"

export const PersonalProjectsList:React.FC = () => {
  return(
    <Container>
      <ProjectWrapper>
        <LoopingVideo dataLazy videoPath="motion-secrets_who-is-looking.webm" soundOption allowControls />
        <Text data-lazy>Is There Anybody Out There ?</Text>
      </ProjectWrapper>
      <ProjectWrapper>
        <LoopingVideo dataLazy videoPath="motion-secrets_mischievous_blue_dot.webm" soundOption allowControls />
        <Text data-lazy>Mischievious Blue Dot</Text>
      </ProjectWrapper>
      <ProjectWrapper>
        <LoopingVideo dataLazy videoPath="motion-secrets_intro.webm" soundOption allowControls />
        <Text data-lazy>Break On Through To The Other Side</Text>
      </ProjectWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5dvh;
  margin-bottom: 5dvh;
  padding-inline: var(--container-padding);

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

const ProjectWrapper = styled.div``

const Text = styled.div`
  margin-block: 2rem 3rem;
  font-family: var(--font-family-wide);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-style: italic;
  text-transform: capitalize;
`
