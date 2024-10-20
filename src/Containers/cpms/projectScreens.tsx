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
        <LoopingVideo videoPath="cpms/project_screen_00.webm" backupImage={ProjectScreenImage00} />
      </ImageWrapper>
      <ImageWrapper id="videoBlueLight" data-lazy="projectScreens_image" >
        <LoopingVideo videoPath="cpms/project_screen_01.webm" backupImage={ProjectScreenImage01} />
      </ImageWrapper>
      <ImageWrapper id="videoGreen" data-lazy="projectScreens_image" >
        <LoopingVideo videoPath="cpms/project_screen_02.webm" backupImage={ProjectScreenImage02} />
      </ImageWrapper>
      <ImageWrapper id="videoBlueDark" data-lazy="projectScreens_image" >
        <LoopingVideo videoPath="cpms/project_screen_03.webm" backupImage={ProjectScreenImage03} />
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
    gap: 0;
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
    width: auto !important;
  }

  &#videoPink {
    flex: 0 0 65%;

    img, video {
      transform: translateX(-30px);
    }

    @media (max-width: ${Sizes.small}) {
      order: 0;
      flex-basis: 100%;
      height: max-content;
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
      margin-left: 10%;
      transform: scaleX(-100%);
    }

    @media (max-width: ${Sizes.small}) {
      order: 2;
      flex-basis: 40%;
      border-radius: var(--border-radius) 0 0 var(--border-radius);

      img, video {
        transform: unset;
        margin-right: 2rem;
      }
    }
  }

  &#videoGreen {
    flex: 1 0 35%;

    img, video {
      margin-left: -10%;
    }

    @media (max-width: ${Sizes.small}) {
      order: 1;
      flex-basis: 50%;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;

      img, video {
        margin-left: 1.5rem;
      }
    }
  }

  &#videoBlueDark {
    flex: 0 0 50%;

    img, video {}

    @media (max-width: ${Sizes.small}) {
      order: 2;
      flex-basis: 100%;
      height: max-content;
      border-radius: 0;

      img, video {
        height: auto !important;
        width: 100% !important;
        transform-origin: center top;
        transform: scale(1.2);
      }
    }
  }
`
