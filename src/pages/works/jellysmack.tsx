import { NextPage } from "next";
import styled from "styled-components"
import { Navbar, Footer, IntroSection, JellyMessage, PhoneScreenshots, Stickers, SocialMediaAssets } from "../../Containers";
import { Sizes } from "../../Assets"
import { LoopingVideo } from "../../Components"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.gif'
import BannerImage from '/public/projects/jellysmack/jelly_thank-you.webp'
import LandingBackupImage from '/public/projects/jellysmack/landing_banner_static.webp'

const introData = {
  image: JellyBoxImage,
  imageAlt: "Animated icon of the jellysmack logo jumping out of an open box",
  projectText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe.",
  howText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
}

const Page:NextPage = () => {
  return (
    <>
      <Navbar type="projects" mode="light" />
      <Container>
      <LandingSection>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711564535/jellysmack/go-bigger_header_nvnesk.webm" backupImage={LandingBackupImage} />
      </LandingSection>
      <IntroSection {...introData} />
      <PhoneScreenshots />
      <Stickers />
      <SocialMediaAssets />
      <JellyMessage />
      <VideoWrapper  data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565980/jellysmack/jelly_thank_you_for_watching_xy0jzh.webm" backupImage={BannerImage} />
      </VideoWrapper>
      <Footer
      leftLink={{ text: "Home", href: "/" }}
      rightLink={{ text: "Next", href: "/works/cpms" }}
      />
    </Container>
    </>
  )
}

export default Page


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
  width: 100%;

  background-color: black;
  background-image: url('/projects/jellysmack/landing_banner_static.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

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
