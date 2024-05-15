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
import { useNavMode, useTranslation } from "../../utils/hooks";

const Page:NextPage = () => {
  const { t } = useTranslation()
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
        <IntroSection image={IntroImage} project="mysteria" />
        <ContentWrapper>
          <LoopingVideo id="helloInspoVideo" videoPath="mysteria/mysteria_hello_inspo.webm" dataLazy allowControls soundOption />
          <CenteredText>{t('projects.mysteria.text1')}</CenteredText>
          <VideosGallery
          videosList={[
            'mysteria/mysteria_gallery-cooking.webm',
            'mysteria/mysteria_gallery-realness.webm',
            'mysteria/mysteria_gallery-room-reveal.webm',
            'mysteria/mysteria_gallery-doll-house.webm'
          ]}
          />
          <LoopingVideo videoPath="mysteria/mysteria.webm" dataLazy allowControls soundOption backupImage={CaseUpdateImage} />
          <CenteredText data-lazy>{t('projects.mysteria.text2')}</CenteredText>
          <VideosGallery
          videosList={[
            'mysteria/mysteria_criminal-psyche.webm',
            'mysteria/mysteria_killer-bites.webm',
            'mysteria/mysteria_cravings.webm',
            'mysteria/mysteria_motives.webm'
          ]}
          />
          <LoopingVideo videoPath="mysteria/mysteria_stories.webm" dataLazy allowControls soundOption />
        </ContentWrapper>
        <Footer
        leftLink={{ text: "home", href: "/" }}
        rightLink={{ text: "about", href: "/about" }}
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
    height: 100%;
    overflow: hidden;

    img {
      width: auto !important;
        max-width: 100vw !important;
      height: 100% !important;
      transform: translateX(-3rem);

    }

    @media (max-width: ${Sizes.small}) {
      height: 53vw !important;
      width: 56vw !important;

      img {
        transform: unset;
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
    --container-padding: 5vw;

    margin-bottom: 5dvh;

    &>div:first-child, &>div:nth-child(4) {
      width: 100vw;
      max-width: unset;
      margin-left: calc(var(--container-padding) * -1);
      border: unset;
    }

    &>div:last-child {
      display: none;
    }

    #helloInspoVideo {
      height: 100%;
    }
  }
`

const CenteredText = styled(Text)`
  margin: 10dvh 10vw;

  @media (max-width: ${Sizes.small}) {
    margin: 5dvh 5vw;
  }
`
