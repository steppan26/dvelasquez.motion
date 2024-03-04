import styled from "styled-components"
import { TitleSecondary } from "../Assets/UIComponents"
import { BouncingArrow, CTAButton, ShowReel } from "../Components"
import { Sizes } from "../Assets"
import { MouseEventHandler } from "react"
import Link from "next/link"

export const ShowReelSection:React.FC = () => {

  const handleArrowClick: MouseEventHandler = (e) => {
    const container = document.querySelector('#showcaseContainer') as HTMLElement
    container.scrollBy({ left: window.innerWidth, behavior: 'smooth' })
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  return (
    <Container id="showReelSection">
      <InfoSection>
        <Text>
          Through <span>brand expression</span> and <span>visual storytelling</span> I can help daring <span>organisations</span>, ambitious <span>startups</span> and <span>creative individuals</span> craft their story, communicate their ideas and build their tribe.
        </Text>
        <CTAButton />
      </InfoSection>
      <ShowReel />
      <ProjectsEntice href="/works" scroll prefetch>
        <ProjectsText>Handpicked projects</ProjectsText>
        <span>
          <BouncingArrow onClick={handleArrowClick} />
        </span>
      </ProjectsEntice>
    </Container>
  )
}



const Container = styled.article`
  --inner-padding: 4.25rem;

  scroll-snap-align: end;
  display: flex;
    flex-direction: column;
  width: 100dvw;
    max-width: 100%;
  padding: 0 var(--padding-main);
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
  font-size: 1.625rem;
  flex: 0 1 100%;
  margin-block: 0;
  font-family: "neusa-next-std-wide";
  font-weight: 400;

  span {
    font-family: "neusa-next-std-wide";
    font-weight: 400;
    color: ${p => p.theme.textSecondary};
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 1.1rem;
    text-align: center;
  }
`

const InfoSection = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  padding-left: var(--inner-padding);

  @media (max-width: ${Sizes.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
    margin-top: 2dvh;
    padding-left: 0;
  }
`

const ProjectsText = styled(TitleSecondary)`
  font-size: 1.25rem;
`

const ProjectsEntice = styled(Link)`
  cursor: e-resize;
  position: relative;
  display: flex;
    justify-content: flex-end;
    align-items: center;
  margin-block: 6.8dvh;

  &>span {
    position: absolute;
    right: calc(43px - var(--padding-main) + 3vw);
    transform-origin: center center;
    transform: rotate(-90deg);

    &>div {
      cursor: e-resize;
      margin: 0;
    }
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`
