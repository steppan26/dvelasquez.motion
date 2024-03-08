import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/follow_me.jpg"
import { Footer, IntroSection, PersonalProjectsList } from "../Containers"
import IntroImage from '/public/projects/motion_secrets/Blue_dot.gif'
import { Sizes } from "../Assets"
import { LoopingVideo } from "../Components"

export const MotionSecretsProject:React.FC = () => {
  return(
    <Container>
      <ImageWrappper className="main-image">
        <LoopingVideo
        videoPath="motion-secrets_intro.webm"
        backupImage={MainHeaderImage}
        imageAlt="The words 'go larger' in big, duplicated over itself"
        />
      </ImageWrappper>
      <IntroSection
      image={IntroImage}
      imageAlt="Animation displaying shape animation transitions"
      projectText="Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
      howText="Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
      />
      <PersonalProjectsList />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  --container-padding: 5.3vw;

  cursor: default;

  .intro-image {
    padding: 5vw 0 5vw 10vw;

    @media (max-width: ${Sizes.small}) {
      margin-top: -5vh;
      padding: unset;
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
