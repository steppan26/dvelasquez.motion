import { NextPage } from "next";
import { Navbar } from "../../Containers";
import Image from "next/image"
import styled from "styled-components"
import { Footer, IntroSection } from "../../Containers"
import { LoopingVideo } from "../../Components"
import MainHeaderImage from "/public/projects/mysteria/jellysmack_roku_intro.webp"
import CaseUpdateImage from '/public/projects/mysteria/case_update_static.webp'
import IntroImage from '/public/projects/mysteria/intro_image.webp'
import { Sizes } from "../../Assets"
import { Text } from "../../Components/styledComponents"
import { VideosGallery } from "../../Containers/mysteria"
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useNavMode } from "../../utils/hooks";

const introData = {
  image: IntroImage,
  imageAlt: "image displaying multiple projects",
  projectText: "Empower digital creators to expand their audience reach and monetize their content on streaming television. <br />Jellysmack partnered with the streaming giant Roku to introduce groundbreaking creator-led FAST channels.",
  howText: "Jellysmack and Roku collaborated to hand-select creators and assist them in launching their own shows. Mysteria and Hello Inspo mark just the beginning of many more shows we will be launching. <br />We developed intros and outros for both the main channels and the individual creators to be featured. Our primary objective was to visually translate the personality of each channel."
}

const Page:NextPage = () => {
  const landingSectionRef = useRef<HTMLDivElement>(null)
  const { addObserver, navMode } = useNavMode('light')

  useEffect(() => { !!landingSectionRef.current && addObserver(landingSectionRef.current) }, [])

  return (
    <>
      <Head>
        <title>D.Velasquez | Mysteria & Roku</title>
      </Head>
      <Navbar type="projects" mode={navMode} />
      <Container>
        <ImageWrappper className="main-image" ref={landingSectionRef}>
          <Image
            src={MainHeaderImage}
            alt="The words 'go larger' in big, duplicated over itself"
            layout="responsive"
            />
        </ImageWrappper>
        <IntroSection {...introData} />
        <ContentWrapper>
          <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565999/mysteria/mysteria_hello_inspo_mzhn52.webm" dataLazy allowControls soundOption />
          <CenteredText>Top creators offer inspiration covering a wide range of topics, from beauty and style to home makeovers, recipes, DIYs, and more.</CenteredText>
          <VideosGallery
          videosList={[
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565991/mysteria/mysteria_gallery-cooking_ntugo1.webm',
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565995/mysteria/mysteria_gallery-realness_oz6wnl.webm',
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565996/mysteria/mysteria_gallery-room-reveal_zclouu.webm',
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565993/mysteria/mysteria_gallery-doll-house_ku7vhq.webm'
          ]}
          />
          <LoopingVideo videoPath="" dataLazy allowControls soundOption backupImage={CaseUpdateImage} />
          <CenteredText data-lazy>
            Mysteria shines a spotlight on the experiences of the victims. With its unique storytelling methods, this channel serves as the ultimate destination for true crime enthusiasts.
          </CenteredText>
          <VideosGallery
          videosList={[
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565990/mysteria/mysteria_criminal-psyche_foievu.webm',
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566000/mysteria/mysteria_killer-bites_xxgvtc.webm',
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565988/mysteria/mysteria_cravings_fnaxfv.webm',
            'https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566002/mysteria/mysteria_motives_kluk6u.webm'
          ]}
          />
          <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566008/mysteria/mysteria_stories_ks55iv.webm" dataLazy allowControls soundOption />
        </ContentWrapper>
        <Footer
        leftLink={{ text: "Home", href: "/" }}
        rightLink={{ text: "Next", href: "/works/jellysmack" }}
        />
    </Container>
    </>
  )
}

export default Page


const Container = styled.div`
  --container-padding: 5.3vw;

  @media (max-width: ${Sizes.small}) {
    --container-padding: 11.8vw;
  }

  cursor: default;
  width: 100%;
    max-width: 100vw;
  max-height: 100%;

  & .intro-image {
    height: 60%;
    overflow: hidden;

    img {
      width: auto !important;
        max-width: 100vw !important;
      height: 100% !important;
      transform: translateX(-3rem);

      @media (max-width: ${Sizes.small}) {
        img {
          height: auto !important;
          width: 100% !important;
          transform: unset;
        }
      }
    }
  }
`

const ImageWrappper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  height: calc(100vw * 0.56228571);
  height: 100%;
    max-height: 100%;
  width: 100%;
`

const ContentWrapper = styled.div`
  padding-inline: var(--container-padding);
  margin-bottom: 10dvh;

  .looping-video {
    border: 1px solid var(--clr-text-main);
  }

  @media (max-width: ${Sizes.small}) {
    margin-bottom: 5dvh;
  }
`

const CenteredText = styled(Text)`
  margin: 10dvh 10vw;

  @media (max-width: ${Sizes.small}) {
    margin: 5dvh 5vw;
  }
`
