import { NextPage } from "next";
import styled from "styled-components"
import { Navbar, Footer, IntroSection, JellyMessage, PhoneScreenshots, Stickers, SocialMediaAssets } from "../../Containers";
import { Sizes } from "../../Assets"
import { LoopingVideo } from "../../Components"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.gif'
import BannerImage from '/public/projects/jellysmack/jelly_thank-you.webp'
import LandingBackupImage from '/public/projects/jellysmack/landing_banner_static.webp'
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useNavMode } from "../../utils/hooks";

const Page:NextPage = () => {
  const landingSectionRef = useRef<HTMLDivElement>(null)
  const { addObserver, navMode } = useNavMode('light')

  useEffect(() => { !!landingSectionRef.current && addObserver(landingSectionRef.current) }, [])

  return (
    <>
      <Head>
        <title>D.Velasquez | Jellysmack portfolio</title>
      </Head>
      <Navbar type="projects" mode={navMode} isProjects />
      <Container>
      <LandingSection ref={landingSectionRef}>
        <LoopingVideo videoPath="jellysmack/go-bigger_header.webm" backupImage={LandingBackupImage} />
      </LandingSection>
      <IntroSection image={JellyBoxImage} project="jellysmack" />
      <PhoneScreenshots />
      <Stickers />
      <SocialMediaAssets />
      <JellyMessage />
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="jellysmack/jelly_thank_you_for_watching.webm" backupImage={BannerImage} />
      </VideoWrapper>
      <Footer leftLink={{ text: 'home', href: "/" }} rightLink={{ text: 'next', href: "/projects/cpms" }} />
    </Container>
    </>
  )
}

export default Page


const Container = styled.div`
  --container-padding: 5.3vw;
  --clr-bg-main: var(--clr-bg-projects);

  max-width: 100vw;
  overflow: hidden;

  cursor: default;
  width: 100%;
  background-color: var(--clr-bg-projects);

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
  background-image: url('/projects/jellysmack/landing_banner_static.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  video {
    width: 110%;
  }

  @media (max-width: ${Sizes.small}) {
    &>* {
      transform: scale(1.18);
    }
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
