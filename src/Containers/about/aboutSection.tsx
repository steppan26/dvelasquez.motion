import Image from "next/image"
import styled from "styled-components"
import BrushLogo from '/public/logos/brush_wine.gif'
import DaniImageLeft from '/public/about/dani_main.webp'
import DaniDamily from '/public/about/gallery_2.webp'
import DaniSisDad from '/public/about/gallery_3.webp'
import { AboutText, GutterImagesWrapper, HeaderText, TextGroup, Wrapper } from "./desktop"

export const AboutSection:React.FC = () => {
  return(
    <Wrapper style={{ marginTop: '12dvh'}}>
        <GutterImagesWrapper>
          <Image src={DaniImageLeft} alt="portrait image of Daniela" id="daniMain" />
        </GutterImagesWrapper>
        <TextGrid>
          <div>
            <HeaderText>About me</HeaderText>
            <TextGroup>
              <AboutText>Ah. The eternal journey of self-discovery. It feels like an enchanted maze. Right when I find the answers, life changes the questions.</AboutText>
              <AboutText>I was born in Colombia in 1993. Raised by a strong, passionate mother, and a creative and diluted father. It was a world ruled by extreme contrasts of virtue and vice, sin and redemption.</AboutText>
              <AboutText>I grew up alone, surrounded by freedom, art, politics, uncertainty, and religion. As a child, my happy place was a Disney movie, a riddles book, makeup, and clothes.</AboutText>
              <AboutText>I could lose myself for hours playing on my mom’s computer drawing on Paint and PowerPoint. I remember how fun it was creating slides, adding transitions, and animating the text.</AboutText>
              <AboutText>Little did I know that my curiosity and passion in visual storytelling would only grow and become my north star.</AboutText>
            </TextGroup>
          </div>
          <div>
            <TextGroup style={{ paddingTop: '1.5rem' }}>
              <AboutText>Now, with an ocean and a decade in between, I find myself with a Pinot Noir in my hand and the Eiffel Tower as my company, surrounded by art, fashion, and beauty. So much has changed that I feel I’m just now catching my breath.</AboutText>
                <AboutText>I’ve always had that fire and curiosity to understand how humans communicate and tell their stories using the most basic but powerful elements such as colors, shapes, and textures.</AboutText>
                <AboutText>With a master&apos;s degree in design & communication and ten years of professional experience, after exploring countless books, movies, and works of art, I specialize in brand strategy, art direction, and animation.</AboutText>
                <AboutText>I would love to help you tell your story, bring your ideas to life, and together build a universe as unique as you are.</AboutText>
                <AboutText>Don’t be a stranger, let’s talk :)</AboutText>
            </TextGroup>
            <LogoWrapper>
              <Image src={BrushLogo} alt="animated logo" layout="responsive" />
            </LogoWrapper>
          </div>
        </TextGrid>
        <GutterImagesWrapper>
          <Image src={DaniDamily} alt="Image of a young Daniela with her mum, dad and sister" id='daniFamily' />
          <Image src={DaniSisDad} alt="Image of a young Daniela with her sister and dad" id="daniSisDad" />
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
