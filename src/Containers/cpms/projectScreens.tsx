import Image from "next/image"
import styled from "styled-components"
import ProjectScreenImage00 from '/public/projects/cpms/project_screen_00.webp'
import ProjectScreenImage01 from '/public/projects/cpms/project_screen_01.webp'
import ProjectScreenImage02 from '/public/projects/cpms/project_screen_02.webp'
import ProjectScreenImage03 from '/public/projects/cpms/project_screen_03.webp'
import { Sizes } from "../../Assets"
import { LoopingVideo } from "../../Components"

export const ProjectScreens:React.FC = () => {
  return (
    <Container>
      <ImageWrapper id="videoPink" data-lazy="projectScreens_image">
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565083/cpms/cpms_scene00_pink_qjvpt4.webm" backupImage={ProjectScreenImage00} />
      </ImageWrapper>
      <ImageWrapper id="videoBlueLight" data-lazy="projectScreens_image" >
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565086/cpms/cpms_scene01_light-blue_lwynvh.webm" backupImage={ProjectScreenImage01} />
      </ImageWrapper>
      <ImageWrapper id="videoGreen" data-lazy="projectScreens_image" >
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565087/cpms/cpms_scene02_green_ucxxn8.webm" backupImage={ProjectScreenImage02} />
      </ImageWrapper>
      <ImageWrapper id="videoBlueDark" data-lazy="projectScreens_image" >
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565087/cpms/cpms_scene03_dark-blue_sbbcqv.webm" backupImage={ProjectScreenImage03} />
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  margin-inline: var(--container-padding);

  @media (max-width: ${Sizes.small}) {
    gap: 0.35rem;
    margin-inline: 0;
  }
`

const ImageWrapper = styled.span`
  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
  overflow: hidden;
  border-radius: 5px;
  height: 73dvh;

  @media (max-width: ${Sizes.small}) {
    height: 25dvh;
  }

  &>div {
    display: flex;
      justify-content: center;
    height: 100%;
    max-height: 100%;
  }

  img, video {
    height: 100% !important;
    width: unset !important;
  }

  &#videoPink {
    flex: 0 0 65%;

    img, video {
      transform: translateX(20px);
    }

    @media (max-width: ${Sizes.small}) {
      order: 0;
      flex-basis: 100%;
      border-radius: 0;

      img, video {
        height: auto !important;
        width: 100% !important;
        transform-origin: center top;
        transform: scale(1.15);
      }
    }
  }

  &#videoBlueLight {
    flex: 1 0 20%;

    img, video {
      transform: scaleX(-100%);
    }

    @media (max-width: ${Sizes.small}) {
      order: 2;
      flex-basis: 40%;
      border-radius: var(--border-radius) 0 0 var(--border-radius);

      img, video {
        transform: unset;
        margin-right: 5rem;
      }
    }
  }

  &#videoGreen {
    flex: 1 0 30%;

    @media (max-width: ${Sizes.small}) {
      order: 1;
      flex-basis: 50%;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;

      img, video {
        margin-left: 2.5rem;
      }
    }
  }

  &#videoBlueDark {
    flex: 0 0 55%;

    @media (max-width: ${Sizes.small}) {
      order: 2;
      flex-basis: 100%;
      border-radius: 0;

      img, video {
        height: auto !important;
        width: 100% !important;
        margin-top: 1.5rem;
        transform-origin: center top;
        transform: scale(1.1);
      }
    }
  }
`
