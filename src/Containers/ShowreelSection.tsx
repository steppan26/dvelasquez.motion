import styled from "styled-components"
import { TitleSecondary } from "../Assets/UIComponents"
import { CTAButton, ShowReel } from "../Components"
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
    </Container>
  )
}

const Container = styled.article`
  max-width: 100vw;
  margin-top: 15dvh;
  padding-top: 15dvh;
  min-height: 100dvh;
  padding-inline: 10%;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
    padding-top: unset;
    margin-top: 5dvh;

    &>h4 {
      max-width: 90%;
      margin-inline: auto;
    }
  }
`


const Text = styled.p`
  font-size: 1.93rem;

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
    grid-template-columns: 58% 42%;
    grid-template-rows: 1fr;
    align-content: end;
  margin-top: 5dvh;

  @media (max-width: ${Sizes.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
    margin-top: 2dvh;
  }
`
