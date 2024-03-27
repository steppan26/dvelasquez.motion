import styled from "styled-components"
import { TitleSecondary } from "../Assets/UIComponents"
import { BouncingArrow, CTAButton, ShowReel } from "../Components"
import { Sizes } from "../Assets"
import { MouseEventHandler } from "react"
import Link from "next/link"

export const ShowReelSection:React.FC = () => {
  const handleArrowClick: MouseEventHandler = (e) => {
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  return (
    <Container id="showReelSection">
      <InfoSection data-lazy>
        <Text>
          Through <span>brand expression</span> and <span>visual storytelling</span> I can help daring <span>organisations</span>, ambitious <span>startups</span> and <span>creative individuals</span> craft their story, communicate their ideas and build their tribe.
        </Text>
        <CTAButton />
      </InfoSection>
      <ShowReel />
      <ProjectsEntice href="/works">
        <span>
          <BouncingArrow onClick={handleArrowClick} />
        </span>
        <ProjectsText onClick={handleArrowClick}>Handpicked projects</ProjectsText>
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
    padding-top: unset;
    margin-top: 2dvh;
    min-height: unset;

    &>h4 {
      max-width: 90%;
      margin-inline: auto;
    }
  }
`

const InfoSection = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  max-width: 100%;
  padding-left: var(--inner-padding);
  margin-right: calc(var(--inner-padding) * -1);

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
    padding-left: 0;
  }
`

const Text = styled.p`
  font-size: 1.35rem;
  line-height: 2rem;
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
    font-size: 1rem;
    line-height: 1.5625rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`

const ProjectsText = styled(TitleSecondary)`
  font-family: var(--font-family-wide);
  font-size: 1.25rem;
  font-weight: 200;
  font-style: unset;
  margin-block: 0;
`

const ProjectsEntice = styled(Link)`
  cursor: pointer;
  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.2vw;
  margin-block: 3.5dvh;
  width: 100%;
  transition: ease 200ms all;

  .bouncing-arrow {
    cursor: inherit;
  }

  &>span {
    transform-origin: center;
    transform: rotate(90deg) scale(0.5);

    &:first-of-type {
      transform: rotate(-90deg) scale(0.5);
    }

    &>div {
      display: flex;
        justify-content: center;
        align-items: center;
      cursor: unset;
      margin: 0;
      width: 4.4vw;
      height: max-content;
    }
  }

  &:hover {
    /* opacity: 0.8; */
    transform: scale(1.05);
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`
