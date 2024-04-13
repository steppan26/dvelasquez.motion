import Image from "next/image"
import styled from "styled-components"
import { MobileAboutText, MobileHeaderText, TextGroup } from "."
import DaniPortraitImage from '/public/about/gallery_4.webp'

export const BioSection:React.FC = () => {
  return(
    <Wrapper>
      <LargeDiamond />
      <MobileHeaderText>Bio</MobileHeaderText>
      <MobileAboutText><b>Art Director and Motion Designer</b>, fluent in <b>English, French, and Spanish</b>, holding a <b>master&apos;s degree</b> from e-artsup school in Paris.</MobileAboutText>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={DaniPortraitImage} alt="Full portrait image of Daniela in Greece" layout="responsive" />
        </ImageWrapper>
        <TextGroup className='textGroup'>
          <MobileAboutText>I&apos;ve had the opportunity to work in various environments, from established design agencies like <b>TBWA</b> to radio stations such as <b>RFM</b>, and most recently, at <b>Jellysmack</b>—a startup that has expanded into a multinational corporation, collaborating with some of the most influential <b>content creators</b> and <b>brands</b>.</MobileAboutText>
          <MobileAboutText>Thriving in diverse and stimulating projects, I demonstrate solid leadership skills and exceptional adaptability. With excellent interdisciplinary communication skills and a deep understanding of social media dynamics.</MobileAboutText>
          <MobileAboutText>Outside of work, I am passionate about travel, music, animals and hiking.</MobileAboutText>
        </TextGroup>
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
