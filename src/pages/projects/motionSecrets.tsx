import { NextPage } from "next";
import { Footer, IntroSection, Navbar, PersonalProjectsList, ProjectDrawings } from "../../Containers";
import styled from "styled-components";
import { Sizes } from "../../Assets";
import { LoopingVideo } from "../../Components";
import MainHeaderImage from "/public/projects/follow_me.webp"
import IntroImage from '/public/projects/motion_secrets/Blue_dot.gif'
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useNavMode } from "../../utils/hooks";

const introData = {
  image: IntroImage,
  imageAlt: "Animation displaying shape animation transitions",
  projectText: "In my search to improve my skills as a motion designer, I enrolled in Emmanuele Colombo's online course, Motion Secrets. <br />Presented here are the first three personal projects I completed as part of this course.",
  howText: "I seized this opportunity to explore the stories I wanted to convey in each exercise. My goal was to move beyond mere technique and imagine a fully realised world within each project. <br />Incorporating music and building a universe around them to bring them to life proved to be a deeply personal and meaningful experience. I'm excited to see what stories I can create in the following lessons."
}

const Page:NextPage = () => {
  const landingSectionRef = useRef<HTMLDivElement>(null)
  const { addObserver, navMode } = useNavMode('dark')

  useEffect(() => { !!landingSectionRef.current && addObserver(landingSectionRef.current) }, [])

  return (
    <>
      <Head>
        <title>D.Velasquez | Motion Secrets</title>
      </Head>
      <Navbar type="projects" mode={navMode} />
      <Container >
        <ImageWrappper className="main-image" ref={landingSectionRef}>
          <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565982/motion%20secrets/motion-secrets_intro_xotqvo.webm" backupImage={MainHeaderImage} />
        </ImageWrappper>
        <IntroSection {...introData} />
        <PersonalProjectsList />
        <ProjectDrawings />
        <Footer
        leftLink={{ text: "Home", href: "/" }}
        rightLink={{ text: "Next", href: "/projects/mysteria" }}
        />
      </Container>
    </>
  )
}

export default Page


const Container = styled.div`
  --container-padding: 5.3vw;

  cursor: default;

  .intro-image {

    img {
      margin-bottom: 2.5rem;
      width: 120% !important;
    }

    @media (max-width: ${Sizes.small}) {
      margin-top: -5dvh;
      padding: unset;

      img {
        margin-bottom: unset;
        max-width: 80%;
      }
    }
  }
`

const ImageWrappper = styled.div`
  position: relative;
  width: 100%;
    max-width: 100vw;
  height: auto;

  img, video {
    width: 100%;
    height: auto;
  }
`
