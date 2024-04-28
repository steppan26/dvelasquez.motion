import { NextPage } from "next";
import MainHeaderImage from "/public/projects/cpms/girl_called_sara.webp"
import { Navbar, DataScreenshots, DrawingsSection, Footer, IntroSection } from "../../Containers"
import { ProjectScreens } from "../../Containers"
import styled from "styled-components";
import { Sizes } from "../../Assets";
import { LoopingVideo } from "../../Components";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useNavMode } from "../../utils/hooks";

const introData = {
  image: "cpms/cpms-clara-profile.webm",
  imageAlt: "illustration of a portrait of a little girl",
  projectText: "Develop a video to <b>offer guidance</b> to child protection officers on identifying and <b>safeguarding children from abuse</b> in high-risk environments.",
  howText: "Child protection officers need training to recognise signs of abuse in children and to follow appropriate procedures. Utilising <b>storytelling allows us to establish an emotional connection</b>, thereby enhancing the effectiveness of learning. <br />Taking into account their branding and previous content, my aim was to create a <b>beautiful yet simple universe</b> that conveys hope and clarity."
}

const Page:NextPage = () => {
  const landingSectionRef = useRef<HTMLDivElement>(null)
  const { addObserver, navMode } = useNavMode('dark')

  useEffect(() => { !!landingSectionRef.current && addObserver(landingSectionRef.current) }, [])

  return (
    <>
      <Head>
        <title>D.Velasquez | CPMS portfolio</title>
      </Head>
      <Navbar type="projects" mode={navMode} />
      <Container>
      <ImageWrappper className="main-image" ref={landingSectionRef}>
        <LoopingVideo videoPath="cpms/cpms-main-header.webm" backupImage={MainHeaderImage} />
      </ImageWrappper>
      <IntroSection {...introData} />
      <ProjectScreens />
      <DrawingsSection />
      <DataScreenshots />
      <Footer
      leftLink={{ text: "Home", href: "/" }}
      rightLink={{ text: "Next", href: "/projects/motionSecrets" }}
      />
    </Container>
    </>
  )
}

export default Page


const Container = styled.div`
  --container-padding: 3.5vw;

  cursor: default;
  width: 100%;
    max-width: 100vw;
  background-color: var(--clr-bg-main);

  .intro-image {
    height: 30vw;
    border-radius: 5px;

    &>div {
      height: 100%;
    }

    video {
      height: 100%;
      width: auto;
      transform: scale(1.1) translateX(-20%);
    }
  }

  @media (max-width: ${Sizes.small}) {
    --container-padding: 11.8vw;

    .intro-image {
      width: 69vw;
      height: 58.2vw;

      video {
        transform: scale(1.1) translateX(-15%)
      }
    }
  }

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
