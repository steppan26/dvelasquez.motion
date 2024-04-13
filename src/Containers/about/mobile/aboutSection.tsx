import Image from "next/image"
import styled from "styled-components"
import { MobileAboutText, MobileHeaderText, TextGroupMobile } from "."
import DaniImageLeft from '/public/about/dani_main.webp'
import DaniFamily from '/public/about/gallery_2.webp'
import DaniSisDad from '/public/about/gallery_3.webp'
import PetsImage from '/public/about/gallery_5.webp'
import BrushLogo from '/public/logos/brush_wine.gif'
import { useNavMode } from "../../../utils/hooks"
import { useEffect } from "react"

export const AboutSection:React.FC = () => {
  const { setDisplayBg } = useNavMode()

  useEffect(() => {
    if(typeof window == 'undefined') return

    const body = document.querySelector('body')
    body?.addEventListener('scroll', updateNavOnScroll)

    return () => body?.removeEventListener('scroll', updateNavOnScroll)
  }, [])

  const updateNavOnScroll = (e: Event) => {
    // @ts-ignore
    setDisplayBg(e?.target?.scrollTop >= 10)
  }

  return(
    <Container>
      <MobileHeaderText>About me</MobileHeaderText>
      <TextGrid>
        <MobileAboutText>Ah. The eternal journey of self-discovery. It feels like an enchanted maze. Right when I find the answers, life changes the questions.</MobileAboutText>
        <FamilyImageWrapper>
          <Image src={DaniFamily} alt="Image of a young Daniela with her mum, dad and sister" id='daniFamily' />
        </FamilyImageWrapper>
        <MobileAboutText>I was born in Colombia in 1993. Raised by a strong, passionate mother, and a creative and diluted father. It was a world ruled by extreme contrasts of virtue and vice, sin and redemption.</MobileAboutText>
        <MobileAboutText>I grew up alone, surrounded by freedom, art, politics, uncertainty, and religion. As a child, my happy place was a Disney movie, a riddles book, makeup, and clothes. </MobileAboutText>
        <DaniImageMainWrapper>
          <Image src={DaniImageLeft} alt="portrait image of Daniela" layout="responsive" />
        </DaniImageMainWrapper>
        <TextGroupMobile>
          <MobileAboutText>I could lose myself for hours playing on my mom’s computer drawing on Paint and PowerPoint. I remember how fun it was creating slides, adding transitions, and animating the text.</MobileAboutText>
          <MobileAboutText>Little did I know that my curiosity and passion in visual storytelling would only grow and become my north star.</MobileAboutText>
        </TextGroupMobile>
        <MobileAboutText>Now, with an ocean and a decade in between, I find myself with a Pinot Noir in my hand and the Eiffel Tower as my company, surrounded by art, fashion, and beauty. So much has changed that I feel I’m just now catching my breath.</MobileAboutText>
        <DaniDadImageWrapper>
          <Image src={DaniSisDad} alt="Image of a young Daniela with her mum, dad and sister" layout="responsive" />
        </DaniDadImageWrapper>
        <MobileAboutText>I’ve always had that fire and curiosity to understand how humans communicate and tell their stories using the most basic but powerful elements such as colors, shapes, and textures.</MobileAboutText>
        <MobileAboutText>With a master&apos;s degree in design & communication and ten years of professional experience, after exploring countless books, movies, and works of art, I specialize in brand strategy, art direction, and animation.</MobileAboutText>
        <PetsImageWrapper>
          <Image src={PetsImage} alt="Image of Daniela's dog and cat" layout="responsive" />
        </PetsImageWrapper>
        <TextGroupMobile>
          <MobileAboutText><b>I would love to help you tell your story, bring your ideas to life, and together build a universe as unique as you are.</b></MobileAboutText>
          <MobileAboutText><b>Don’t be a stranger, let’s talk :)</b></MobileAboutText>
          <LogoWrapper>
            <Image src={BrushLogo} alt="animated gif of dvelasquez logo" layout="responsive" />
          </LogoWrapper>
        </TextGroupMobile>
      </TextGrid>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 13.5dvh;
  padding-inline: var(--main-padding-inline);
`

const TextGrid = styled.div`
  --gap-size: 1rem;

  display: grid;
    grid-template-columns: repeat(2, 37.5vw);
    grid-gap: var(--gap-size) 1.25rem;
`

const FamilyImageWrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    inset: 0;
    width: auto;
      max-width: 40vw;
    height: auto;
      max-height: calc(40vw * 0.93);
    transform: translate(1rem, -4rem) rotate(14.28deg);
  }
`


const DaniImageMainWrapper = styled.div`
  position: relative;
  margin-left: calc(var(--main-padding-inline) * -1);

  img {
    position: absolute;
    inset: 0;
    height: auto;
    width: 100%;
    transform-origin: top right;
    transform: scale(1.1);
  }
`

const PetsImageWrapper = styled.div`
  position: relative;
  margin-left: calc(var(--main-padding-inline) * -1);

  img {
    position: absolute;
    inset: 0;
    height: auto;
    width: 100%;
    transform-origin: top right;
  }
`

const LogoWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;

  img {
    transform: scale(1.8) translateX(0.5rem) rotate(-15deg);
  }
`

const DaniDadImageWrapper = styled.div`
  position: relative;
  margin-right: calc(var(--main-padding-inline) * -1);

  img {
    position: absolute;
    inset: 0;
    height: auto;
    width: 100%;
    transform-origin: top left;
  }
`
