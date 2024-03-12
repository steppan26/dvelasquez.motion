import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/mysteria/Jellysmack_roku_intro.png"
import { Footer, IntroSection } from "../Containers"
import IntroImage from '/public/projects/mysteria/intro_image.png'
import { Sizes } from "../Assets"
import { LoopingVideo } from "../Components"
import { Text } from "../Components/styledComponents"
import { VideosGallery } from "../Containers/mysteria"

export const MysteriaProject:React.FC = () => {
  return (
    <Container>
      <ImageWrappper className="main-image">
        <Image
          src={MainHeaderImage}
          alt="The words 'go larger' in big, duplicated over itself"
          layout="responsive"
           />
      </ImageWrappper>
      <IntroSection
      image={IntroImage}
      imageAlt="image displaying multiple projects"
      projectText="Empower digital creators to expand their audience reach and monetize their content on streaming television.\nJellysmack partnered with the streaming giant Roku to introduce groundbreaking creator-led FAST channels."
      howText="Jellysmack and Roku collaborated to hand-select creators and assist them in launching their own shows. Mysteria and Hello Inspo mark just the beginning of many more shows we will be launching.\nWe developed intros and outros for both the main channels and the individual creators to be featured. Our primary objective was to visually translate the personality of each channel."
      />
      <ContentWrapper>
        <LoopingVideo videoPath="mysteria_hello_inspo.webm" dataLazy allowControls soundOption />
        <CenteredText>Top creators offer inspiration covering a wide range of topics, from beauty and style to home makeovers, recipes, DIYs, and more.</CenteredText>
        <VideosGallery
        videosList={[
          'mysteria_gallery-cooking.webm',
          'mysteria_gallery-realness.webm',
          'mysteria_gallery-room-reveal.webm',
          'mysteria_gallery-doll-house.webm'
        ]}
        />
        <LoopingVideo videoPath="" dataLazy allowControls soundOption />
        <CenteredText data-lazy>
          Mysteria shines a spotlight on the experiences of the victims. With its unique storytelling methods, this channel serves as the ultimate destination for true crime enthusiasts.
        </CenteredText>
        <VideosGallery
        videosList={[
          'mysteria_criminal-psyche.webm',
          'mysteria_killer-bites.webm',
          'mysteria_cravings.webm',
          'mysteria_motives.webm'
        ]}
        />
        <LoopingVideo videoPath="mysteria_stories.webm" dataLazy allowControls soundOption />
      </ContentWrapper>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  --container-padding: 5.3vw;

  @media (max-width: ${Sizes.small}) {
    --container-padding: 11.8vw;
  }

  cursor: default;
  width: 100%;
    max-width: 100vw;
  max-height: 100%;
`

const ImageWrappper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  height: calc(100vw * 0.56228571);
  height: 100%;
    max-height: 100%;
  width: 100%;

  .intro-image {
    justify-self: end;
    height: 60%;
    overflow: hidden;

    img {
      width: 100% !important;
        max-width: 100vw !important;
      height: 100% !important;
      transform: translateX(-3rem);
    }
  }

  @media (max-width: ${Sizes.small}) {
    .intro-image img {
      height: auto !important;
      width: 100% !important;
      transform: unset;
    }
  }
`

const ContentWrapper = styled.div`
  padding-inline: var(--container-padding);
  margin-bottom: 10dvh;

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
