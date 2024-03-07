import styled from "styled-components"
import { Footer, IntroSection, JellyMessage, PhoneScreenshots, Stickers } from "../Containers"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.gif'
import BannerImage from '/public/projects/jellysmack/jelly_thank-you.png'
import { SocialMediaAssets } from "."
import { Sizes } from "../Assets"

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
        <video
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        >
          <source src="/go-bigger_header.webm" type="video/webm" />
        </video>
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
  max-width: 100vw;
  overflow: hidden;

  cursor: default;
  width: 100vw;
  background-color: var(--clr-bg-main);

  .intro-image {
    width: 75%;
    justify-self: center;
  }

  @media (max-width: ${Sizes.small}) {
    --container-padding: 10vw;

  }
`

const LandingSection = styled.div`
  position: relative;
  display: flex;
    justify-content: center;
  width: 100vw;

  video {
    width: 110%;
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

  @media (max-width: ${Sizes.small}) {
    height: auto;
    max-height: 53vw;

    video {
      width: 150%;
    }
  }
`
