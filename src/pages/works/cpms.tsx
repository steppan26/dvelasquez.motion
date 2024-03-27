import { NextPage } from "next";
import MainHeaderImage from "/public/projects/girl_called_sara.jpg"
import ClaraImage from '/public/projects/cpms/clara_profile_illustration.png'
import MainVideoImage from '/public/projects/cpms/main_video.png'
import { Navbar, DataScreenshots, DrawingsSection, Footer, IntroSection } from "../../Containers"
import { ProjectScreens } from "../../Containers"
import styled from "styled-components";
import { Sizes } from "../../Assets";
import Image from "next/image";
import { LoopingVideo } from "../../Components";

const Page:NextPage = () => {
  return (
    <>
      <Navbar type="projects" mode="dark" />
      <Container>
      <ImageWrappper className="main-image">
        <LoopingVideo videoPath="/cpms-main-header.webm" backupImage={MainHeaderImage} />
      </ImageWrappper>
      <IntroSection
      image={ClaraImage}
      imageAlt="illustration of a portrait of a little girl"
      projectText="Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
      howText="Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
      />
      <ProjectScreens />
      <DrawingsSection />
      <DataScreenshots />
      <VideoWrapper data-lazy>
        <video
        autoPlay
        muted
        playsInline
        controls
        loop
        poster={MainVideoImage.src}
        controlsList="nodownload"
        preload="metadata"
        >
          <source src="cpms-main-video.webm" type="video/webm" />
          <Image
            src={MainVideoImage}
            alt="screenshot of the video for the CPMS project"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
        </video>
      </VideoWrapper>
      <Footer
      leftLink={{
        text: "Home",
        href: "/"
      }}
      rightLink={{
        text: "Next",
        href: "/works/motionSecrets"
      }}
      />
    </Container>
    </>
  )
}

export default Page


const Container = styled.div`
  --container-padding: 3.5vw;

  @media (max-width: ${Sizes.small}) {
    --container-padding: 11.8vw;
  }

  cursor: default;
  width: 100%;
    max-width: 100vw;
  background-color: var(--clr-bg-main);
`

const ImageWrappper = styled.div`
  position: relative;
  width: 100%;
    max-width: 100vw;
  overflow: hidden;

  img, video {
    width: 100% !important;
      max-width: 100vw !important;
    height: 100% !important;
      max-height: 100dvh !important;
    border-radius: unset !important;

    @media (max-width: ${Sizes.small}) {
      width: 100% !important;
      height: auto !important;
      padding-block: 1.3rem;
      transform-origin: center;
      transform: scale(1.2);
    }
  }
`

const VideoWrapper = styled.div`
  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
  margin-inline: var(--container-padding);
  margin-block: 3rem;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: ${Sizes.small}) {
    margin-inline: 0;
    border-radius: 0;
  }
`
