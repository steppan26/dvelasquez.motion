import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/follow_me.jpg"
import { Footer, IntroSection, PersonalProjectsList, ProjectDrawings } from "../Containers"
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
      projectText="In my search to improve my skills as a motion designer, I enrolled in Emmanuele Colombo's online course, Motion Secrets.\nPresented here are the first three personal projects I completed as part of this course."
      howText="I seized this opportunity to explore the stories I wanted to convey in each exercise. My goal was to move beyond mere technique and imagine a fully realised world within each project.\nIncorporating music and building a universe around them to bring them to life proved to be a deeply personal and meaningful experience. I'm excited to see what stories I can create in the following lessons."
      />
      <PersonalProjectsList />
      <ProjectDrawings />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  --container-padding: 5.3vw;

  cursor: default;

  .intro-image {
    padding-top: 10vh;

    img {
      width: 120% !important;
    }

    @media (max-width: ${Sizes.small}) {
      margin-top: -5vh;
      width: 100%;
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
