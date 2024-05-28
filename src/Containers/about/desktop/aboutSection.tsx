import Image from "next/image"
import styled from "styled-components"
import BrushLogo from '/public/logos/brush_wine.gif'
import DaniImageLeft from '/public/about/dani_main.webp'
import DaniFamily from '/public/about/gallery_2.webp'
import DaniSisDad from '/public/about/gallery_3.webp'
import { AboutText, GutterImagesWrapper, HeaderText, TextGroup, Wrapper } from "../desktop"
import { useTranslation } from "../../../utils/hooks"

export const AboutSection:React.FC = () => {
  const { t } = useTranslation()

  return(
    <Wrapper style={{ marginTop: '12dvh'}}>
        <GutterImagesWrapper>
          <Image src={DaniImageLeft} alt="portrait image of Daniela" id="daniMain" layout="responsive" />
        </GutterImagesWrapper>
        <TextGrid>
          <div>
            <HeaderText>{t('about.desktop.about.header')}</HeaderText>
            <TextGroup>
              {(t('about.desktop.about.block1')as string)
              .split('/n/')
              .map((text, index) => <AboutText key={index} dangerouslySetInnerHTML={{ "__html": text }} />)}
            </TextGroup>
          </div>
          <div>
            <TextGroup style={{ paddingTop: '1rem' }}>
              {(t('about.desktop.about.block2')as string)
              .split('/n/')
              .map((text, index) => <AboutText key={index} dangerouslySetInnerHTML={{ "__html": text }} />)}
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
