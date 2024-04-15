import styled from "styled-components"
import { CTAButton, ShowReel } from "../Components"
import { Sizes } from "../Assets"
import { MouseEventHandler } from "react"

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
      <Spacer />
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
  font-size: 1.5rem;
  line-height: 2.4375rem;
  flex: 0 1 100%;
  margin-block: 0;
  font-family: var(--font-family-wide);
  font-weight: 400;
  font-style: italic;
  color: var(--clr-text-main);

  span {
    font-weight: 600;
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 1rem;
    line-height: 1.5625rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`

const Spacer = styled.div`
  height: 15dvh;

  @media (max-width: ${Sizes.small}) {
    height: 2dvh;
  }
`
