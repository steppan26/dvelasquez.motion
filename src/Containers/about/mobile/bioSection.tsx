import Image from "next/image"
import styled from "styled-components"
import { MobileAboutText, MobileHeaderText, TextGroupMobile } from "."
import DaniPortraitImage from '/public/about/gallery_4.webp'
import { useTranslation } from "../../../utils/hooks"

export const BioSection:React.FC = () => {
  const { t } = useTranslation()

  return(
    <Wrapper>
      <LargeDiamond />
      <MobileHeaderText>{t('about.mobile.bio.header')}</MobileHeaderText>
      <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.bio.block1')}} />
      <ContentWrapper>
        <ImageWrapper>
          <Image src={DaniPortraitImage} alt="Full portrait image of Daniela in Greece" layout="responsive" />
        </ImageWrapper>
        <TextGroupMobile className='textGroup'>
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.bio.block2')}} />
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.bio.block3')}} />
          <MobileAboutText dangerouslySetInnerHTML={{'__html': t('about.mobile.bio.block4')}} />
        </TextGroupMobile>
      </ContentWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding-inline: var(--main-padding-inline);

  display: flex;
    flex-direction: column;
    gap: 1rem;

  position: relative;
  margin-block: 4rem 5dvh;
  padding-top: 2.7rem;

  h2 {
    transform: unset;
  }
`

const LargeDiamond = styled.div`
  position: absolute;
  left: 0; top: 0;
  width: 2.7rem;
  height: 2.7rem;
  background-color: var(--clr-bg-secondary);
  transform: translateX(-50%) rotate(45deg);
`

const ContentWrapper = styled.div`
  --gap-size: 1rem;

  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--gap-size) 1.25rem;

  .textGroup {
    width: calc(100% + (var(--main-padding-inline) / 2));
  }
`

const ImageWrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    right: 0; top: 0;
    height: 100% !important;
    width: auto !important;
  }
`
