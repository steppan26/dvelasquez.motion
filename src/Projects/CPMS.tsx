import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/girl_called_sara.jpg"
import ClaraImage from '/public/projects/cpms/clara_profile_illustration.png'
import { IntroSection } from "../Containers"
import { ProjectScreens } from "../Containers"
import { Sizes } from "../Assets"

export const CPMSProject:React.FC = () => {
  return(
    <Container>
      <ImageWrappper className="main-image">
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go bigger' in big, duplicated over itself"
        width={MainHeaderImage.width}
        height={MainHeaderImage.height}
        layout="responsive"
        />
      </ImageWrappper>
      <IntroSection
      image={ClaraImage}
      imageAlt="illustration of a portrait of a little girl"
      projectText="Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
      howText="Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
      />
      <ProjectScreens />
    </Container>
  )
}

const Container = styled.div`
  --container-padding: 3.5vw;

  @media (max-width: ${Sizes.small}) {
    --container-padding: 11.8vw;
  }

  cursor: default;
  background-color: var(--clr-bg-main);
`

const ImageWrappper = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;

  img {
    height: 100dvh !important;
    width: auto !important;

    @media (max-width: ${Sizes.small}) {
      width: 100% !important;
      height: auto !important;
      padding-block: 1.5rem;
      transform-origin: center;
      transform: scale(1.2);
    }
  }
`
