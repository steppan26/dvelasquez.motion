import styled from "styled-components"
import { AboutText, GutterImagesWrapper, HeaderText, TextGroup, Wrapper } from "../desktop"
import DaniPortrait from '/public/about/gallery_4.webp'
import PetsImage from '/public/about/gallery_5.webp'
import Image from "next/image"

export const BioSection:React.FC = () => {
  return(
    <Wrapper>
      <GutterImagesWrapper data-lazy>
        <Image src={DaniPortrait} alt="Portrait image of Daniela in Greece" id="daniPortrait" layout="responsive" />
      </GutterImagesWrapper>
      <MainContent data-lazy>
        <HeaderText style={{paddingBottom: '1rem'}}>Bio</HeaderText>
        <TextGroup>
          <AboutText><b>Art Director and Motion Designer</b>, fluent in <b>English, French, and Spanish,</b> holding a <b>master&apos;s degree</b> from e-artsup school in Paris.</AboutText>
          <AboutText>I&apos;ve had the opportunity to work in various environments, from established design agencies like <b>TBWA</b> to radio stations such as <b>RFM</b>, and most recently, at <b>Jellysmack</b>—a startup that has expanded into a multinational corporation, collaborating with some of the most influential <b>content creators</b> and <b>brands</b>.</AboutText>
          <AboutText>Thriving in diverse and stimulating projects, I demonstrate solid leadership skills and exceptional adaptability. With excellent interdisciplinary communication skills and a deep understanding of social media dynamics. </AboutText>
          <AboutText>Outside of work, I am passionate about travel, music, animals and hiking.</AboutText>
        </TextGroup>
        <KeywordsWrapper>
          <RedDiamond /> Art Direction <RedDiamond /> Motion Design <RedDiamond /> Brand Design <RedDiamond />
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
