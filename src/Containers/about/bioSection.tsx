import styled from "styled-components"
import { AboutText, GutterImagesWrapper, HeaderText, TextGroup, Wrapper } from "./desktop"

export const BioSection:React.FC = () => {
  return(
    <Wrapper style={{ paddingTop: 0, marginTop: '15dvh'}}>
      <GutterImagesWrapper></GutterImagesWrapper>
      <MainContent>
        <HeaderText>Bio</HeaderText>
        <TextGroup>
          <AboutText><b>Art Director and Motion Designer</b>, fluent in <b>English, French, and Spanish,</b> holding a <b>master&apos;s degree</b> from e-artsup school in Paris.</AboutText>
          <AboutText>I&apos;ve had the opportunity to work in various environments, from established design agencies like <b>TBWA</b> to radio stations such as <b>RFM</b>, and most recently, at <b>Jellysmack</b>—a startup that has expanded into a multinational corporation, collaborating with some of the most influential <b>content creators</b> and <b>brands</b>.</AboutText>
          <AboutText>Thriving in diverse and stimulating projects, I demonstrate solid leadership skills and exceptional adaptability. With excellent interdisciplinary communication skills and a deep understanding of social media dynamics. </AboutText>
          <AboutText>Outside of work, I am passionate about travel, music, animals and hiking.</AboutText>
        </TextGroup>
      </MainContent>
      <GutterImagesWrapper></GutterImagesWrapper>
    </Wrapper>
  )
}

const MainContent = styled.div``
