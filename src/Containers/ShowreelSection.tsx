import styled from "styled-components"
import { TitleSecondary } from "../Assets/UIComponents"
import { BouncingArrow, CTAButton, ShowReel } from "../Components"
import { Sizes } from "../Assets"

export const ShowReelSection:React.FC = () => {
  return (
    <Container id="showReelSection">
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
  --inner-padding: 2.5rem;

  scroll-snap-align: end !important;
  display: flex;
    flex-direction: column;
  max-width: 100vw;
  padding: var(--padding-main);
  margin-top: 2.777778dvh;
  height: max-content;

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
  font-size: 1.25rem;
  flex: 0 1 100%;
  margin-block: 0;

  span {
    color: ${p => p.theme.textSecondary};
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 1.1rem;
    text-align: center;
  }
`

const InfoSection = styled.div`
  display: grid;
    grid-template-columns: 61% 39%;
    grid-template-rows: 1fr;
    align-content: end;

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
  margin-block: 8dvh;

  &>div {
    position: absolute;
    right: 0;
    transform-origin: center center;
    transform: rotate(-90deg) translateY(150px);

    img {
      cursor: e-resize;
    }
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`
