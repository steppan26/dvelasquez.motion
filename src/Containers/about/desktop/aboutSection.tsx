import Image from "next/image"
import styled from "styled-components"
import BrushLogo from '/public/logos/brush_wine.gif'
import DaniImageLeft from '/public/about/dani_main.webp'
import DaniFamily from '/public/about/gallery_2.webp'
import DaniSisDad from '/public/about/gallery_3.webp'
import { AboutText, GutterImagesWrapper, HeaderText, TextGroup, Wrapper } from "../desktop"

export const AboutSection:React.FC = () => {
  return(
    <Wrapper style={{ marginTop: '12dvh'}}>
        <GutterImagesWrapper>
          <Image src={DaniImageLeft} alt="portrait image of Daniela" id="daniMain" layout="responsive" />
        </GutterImagesWrapper>
        <TextGrid>
          <div>
            <HeaderText>About me</HeaderText>
            <TextGroup>
              <AboutText>I’m Daniela, a visual storyteller, and I firmly believe that <b>effective communication is the catalyst for realising the extraordinary.</b></AboutText>
              <AboutText>With a master’s degree and ten years of professional experience, I specialise in brand strategy, art direction, and animation.</AboutText>
              <AboutText>I’ve always had that fire to understand how humans communicate and tell their stories. I love when a whole story filled with emotions can be told by using the most basic but powerful elements such as colours, shapes, and textures.</AboutText>
              <AboutText>I was born in Colombia in 1993. Raised by a strong, passionate mother, and a creative but absent father. It was a world ruled by extreme contrasts of virtue and vice, sin and redemption. I grew up alone, surrounded by freedom, art, politics, uncertainty, and religion.</AboutText>
            </TextGroup>
          </div>
          <div>
            <TextGroup style={{ paddingTop: '1rem' }}>
              <AboutText>As a child, my happy place was a Disney movie, a riddles book, makeup, and clothes. I could lose myself for hours playing on my mom’s computer drawing on Paint and PowerPoint. I remember how fun it was creating slides, adding transitions, and animating the text. Little did I know that my curiosity and passion in visual storytelling would only grow and become my north star.</AboutText>
              <AboutText>Now, with an ocean and a decade in between, I find myself with a Pinot Noir in my hand and the Eiffel Tower as my company, surrounded by art, fashion, and beauty. So much has changed that I feel I’m just now catching my breath. The eternal journey of self-discovery. It feels like a magic maze. Right when I find the answers, life changes the questions.</AboutText>
              <AboutText><b>I would love to help you tell your story, bring your ideas to life, and together build a universe as unique as you are.</b></AboutText>
              <AboutText>Don’t be a stranger, </AboutText>
              <AboutText>let’s talk :)</AboutText>
            </TextGroup>
            <LogoWrapper>
              <Image src={BrushLogo} alt="animated logo" layout="responsive" />
            </LogoWrapper>
          </div>
        </TextGrid>
        <GutterImagesWrapper>
          <Image src={DaniFamily} alt="Image of a young Daniela with her mum, dad and sister" id='daniFamily' layout="responsive" />
          <Image src={DaniSisDad} alt="Image of a young Daniela with her sister and dad" id="daniSisDad" layout="responsive" />
        </GutterImagesWrapper>
      </Wrapper>
  )
}


const LogoWrapper = styled.div`
  position: relative;
  grid-area: logo;
  width: 34vw;
  max-width: 100%;
  height: auto;
  transform: translateX(20%) rotate(-15deg);
`

const TextGrid = styled.div`
  display: flex;
    justify-content: center;

  &>div {
    flex: 0 0 50%;
    display: flex;
      flex-direction: column;
      gap: 2rem;
    max-width: 50%;
  }
`
