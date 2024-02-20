import styled from "styled-components"
import { TitleSecondary } from "../Assets/UIComponents"
import { BouncingArrow, CTAButton, ShowReel } from "../Components"
import { Sizes } from "../Assets"

export const ShowReelSection:React.FC = () => {
  return (
    <Container>
      <TitleSecondary>Unique Design for Unique Ideas</TitleSecondary>
      <InfoSection>
        <Text>
          Through <span>brand expression</span> and <span>visual storytelling</span> I can help daring <span>organisations</span>, ambitious <span>startups</span> and <span>creative individuals</span> craft their story, communicate their ideas and build their tribe.
        </Text>
        <CTAButton />
      </InfoSection>
      <ShowReel />
      <ProjectsEntice>
        <ProjectsText>Handpicked projects</ProjectsText>
        <div>
          <BouncingArrow />
        </div>
      </ProjectsEntice>
    </Container>
  )
}

const Container = styled.article`
  scroll-snap-stop: s ;
  display: flex;
    flex-direction: column;
  max-width: 100vw;
  height: max-content;
    min-height: 100dvh;
  margin-top: 15dvh;
  padding: 15dvh 12.615741vw 7dvh;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
    padding-top: unset;
    margin-top: 5dvh;
    min-height: unset;

    &>h4 {
      max-width: 90%;
      margin-inline: auto;
    }
  }
`


const Text = styled.p`
  font-size: 1.75rem;

  span {
    color: ${p => p.theme.textSecondary};
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 1.3rem;
    text-align: center;
  }
`

const InfoSection = styled.div`
  display: grid;
    grid-template-columns: 55% 45%;
    grid-template-rows: 1fr;
    align-content: end;
  margin-top: 5dvh;
  padding-left: 2.5rem;

  @media (max-width: ${Sizes.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
    margin-top: 2dvh;
    padding-left: 0;
  }
`

const ProjectsText = styled(TitleSecondary)`
  font-size: 1.6rem;
`

const ProjectsEntice = styled.div`
  position: relative;
  display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;

  &>div {
    position: absolute;
    right: 0;
    transform-origin: center center;
    transform: rotate(-90deg) translateY(100%);

    img {
      cursor: e-resize;
    }
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`
