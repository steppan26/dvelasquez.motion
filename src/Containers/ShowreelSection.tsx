import styled from "styled-components"
import { TitleSecondary } from "../Assets/UIComponents"
import { CTAButton } from "../Components"

export const ShowReelSection:React.FC = () => {
  return (
    <Container>
      <Title>Unique Design for Unique Ideas</Title>
      <InfoSection>
        <Text>
          Through <span>brand expression</span> and <span>visual storytelling</span> I can help daring <span>organisations</span>, ambitious <span>startups</span> and <span>creative individuals</span> craft their story, communicate their ideas and build their tribe.
        </Text>
        <CTAButton />
      </InfoSection>
    </Container>
  )
}

const Container = styled.article`
  margin-top: 15dvh;
  padding-top: 15dvh;
  min-height: 100dvh;
  padding-inline: 10%;
`

const Title = styled(TitleSecondary)`
  text-align: left;
  font-size: 74px;
  font-style: italic;
  font-weight: 400;
`

const Text = styled.p`
  font-size: 1.93rem;

  span {
    color: ${p => p.theme.textSecondary};
  }

`

const InfoSection = styled.div`
  display: grid;
    grid-template-columns: 58% 42%;
    grid-template-rows: 1fr;
    align-content: end;
  margin-top: 5dvh;
`
