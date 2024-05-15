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
          <LoopingVideo videoPath="motion_secrets/motion-secrets_intro.webm" backupImage={MainHeaderImage} />
        </ImageWrappper>
        <IntroSection image={IntroImage} project="motionSecrets" />
        <PersonalProjectsList />
        <ProjectDrawings />
        <Footer
        leftLink={{ text: "home", href: "/" }}
        rightLink={{ text: "next", href: "/projects/mysteria" }}
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
