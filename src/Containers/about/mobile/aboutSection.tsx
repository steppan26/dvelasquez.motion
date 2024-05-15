import Image from "next/image"
import styled from "styled-components"
import { MobileAboutText, MobileHeaderText, TextGroupMobile } from "."
import DaniImageLeft from '/public/about/dani_main.webp'
import DaniFamily from '/public/about/gallery_2.webp'
import DaniSisDad from '/public/about/gallery_3.webp'
import PetsImage from '/public/about/gallery_5.webp'
import BrushLogo from '/public/logos/brush_wine.gif'
import { useNavMode, useTranslation } from "../../../utils/hooks"
import { useEffect } from "react"

export const AboutSection:React.FC = () => {
  const { t } = useTranslation()
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
      <MobileHeaderText>{t('about.mobile.about.header')}</MobileHeaderText>
      <TextGrid>
        <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block1')}} />
        <FamilyImageWrapper>
          <Image src={DaniFamily} alt="Image of a young Daniela with her mum, dad and sister" id='daniFamily' />
        </FamilyImageWrapper>
        <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block2')}} />
        <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block3')}} />
        <DaniImageMainWrapper>
          <Image src={DaniImageLeft} alt="portrait image of Daniela" layout="responsive" />
        </DaniImageMainWrapper>
        <TextGroupMobile>
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block4')}} />
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block5')}} />
        </TextGroupMobile>
        <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block6')}} />
        <DaniDadImageWrapper>
          <Image src={DaniSisDad} alt="Image of a young Daniela with her mum, dad and sister" layout="responsive" />
        </DaniDadImageWrapper>
        <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block7')}} />
        <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block8')}} />
        <PetsImageWrapper>
          <Image src={PetsImage} alt="Image of Daniela's dog and cat" layout="responsive" />
        </PetsImageWrapper>
        <TextGroupMobile>
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block9')}} />
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.about.block10')}} />
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
    transform: translate(1rem, -6rem) rotate(14.28deg);
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
