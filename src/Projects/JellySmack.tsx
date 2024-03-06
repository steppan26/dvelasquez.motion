import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/jellysmack/main_header.gif"
import { JellySmackLandingLower } from "../Components"
import { Footer, IntroSection, JellyMessage, PhoneScreenshots, Stickers } from "../Containers"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.gif'
import BannerImage from '/public/projects/jellysmack/jelly_thank-you.png'
import { SocialMediaAssets } from "."

const introData = {
  image: JellyBoxImage,
  imageAlt: "Animated icon of the jellysmack logo jumping out of an open box",
  projectText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe.",
  howText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
}

export const JellySmackPortfolio:React.FC = () => {
  return(
    <Container>
      <LandingSection>
        <HeaderWrapper>
          <Image
          src={MainHeaderImage.src}
          alt="The words 'go larger' in big, duplicated over itself"
          width={1728}
          height={1126}
          layout="responsive"
          />
        </HeaderWrapper>
        <JellySmackLandingLower />
      </LandingSection>
      <IntroSection {...introData} />
      <PhoneScreenshots />
      <Stickers />
      <SocialMediaAssets />
      <JellyMessage />
      <VideoWrapper>
        <video
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        controlsList="nodownload"
        poster={BannerImage.src}
        preload="metadata">
          <source src="/jelly_thank_you_for_watching.webm" type="video/webm" />
        </video>
      </VideoWrapper>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  --container-padding: 5.3vw;

  cursor: default;
  width: 100vw;
  background-color: var(--clr-bg-main);

  .intro-image {
    width: 75%;
    justify-self: center;
  }
`

const LandingSection = styled.div`
  position: relative;
  max-height: 135dvh;
  margin-bottom: 25dvh;
`

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;

  img {
    height: 111% !important;
    width: unset !important;
  }
`

const VideoWrapper = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  height: max-content;
  max-height: 33vw;
  width: 100%;
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
  }
`
