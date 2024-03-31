import styled from "styled-components"
import { LoopingVideo } from "../../Components"
import { Sizes } from "../../Assets"

export const PersonalProjectsList:React.FC = () => {
  return(
    <Container>
      <ProjectWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565987/motion%20secrets/motion-secrets_who-is-looking_whzdkr.webm" soundOption allowControls />
        <Text>Is There Anybody Out There ?</Text>
      </ProjectWrapper>
      <ProjectWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565985/motion%20secrets/motion-secrets_mischievous_blue_dot_rchsmz.webm" soundOption allowControls />
        <Text>Mischievious Blue Dot</Text>
      </ProjectWrapper>
      <ProjectWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565982/motion%20secrets/motion-secrets_intro_xotqvo.webm" soundOption allowControls />
        <Text>Break On Through To The Other Side</Text>
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

const ProjectWrapper = styled.div`
  width: 100%;
  height: auto;
`

const Text = styled.div`
  margin-block: 2rem 3rem;
  font-family: var(--font-family-wide);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-style: italic;
  text-transform: capitalize;
`
