import styled from "styled-components"
import { AboutText, GutterImagesWrapper, HeaderText, TextGroup, Wrapper } from "../desktop"
import DaniPortrait from '/public/about/gallery_4.webp'
import PetsImage from '/public/about/gallery_5.webp'
import Image from "next/image"
import { useTranslation } from "../../../utils/hooks"

export const BioSection:React.FC = () => {
  const { t } = useTranslation()

  return(
    <Wrapper>
      <GutterImagesWrapper data-lazy>
        <Image src={DaniPortrait} alt="Portrait image of Daniela in Greece" id="daniPortrait" layout="responsive" />
      </GutterImagesWrapper>
      <MainContent data-lazy>
        <HeaderText style={{paddingBottom: '1rem'}}>{t('about.desktop.bio.header')}</HeaderText>
        <TextGroup>
          {(t('about.desktop.bio.text')as string)
            .split('/n/')
            .map((text, index) => <AboutText key={index} dangerouslySetInnerHTML={{ "__html": text }} />)}
        </TextGroup>
        <KeywordsWrapper>
          <RedDiamond /> {t('about.desktop.bio.keyword1')} <RedDiamond /> {t('about.desktop.bio.keyword2')} <RedDiamond /> {t('about.desktop.bio.keyword3')} <RedDiamond />
        </KeywordsWrapper>
      </MainContent>
      <GutterImagesWrapper data-lazy>
        <Image src={PetsImage} alt="Image of Daniela's dog and cat" id="pets" layout="responsive" />
      </GutterImagesWrapper>
    </Wrapper>
  )
}

const MainContent = styled.div`
`

const KeywordsWrapper = styled.div`
  display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  margin-top: 3rem;
  padding-left: var(--text-padding);
  font-family: var(--font-family-wide);
  font-style: italic;
  font-size: 1.5625rem;
  line-height: 1.7rem;
  font-weight: 600;
`

const RedDiamond = styled.span`
  --size: 6px;

  width: var(--size);
  height: var(--size);
  transform: rotate(45deg);
  background-color: var(--clr-bg-secondary);
`
