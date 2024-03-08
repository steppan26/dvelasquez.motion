import Image from "next/image"
import styled from "styled-components"
import ProjectScreenImage00 from '/public/projects/cpms/project_screen_00.png'
import ProjectScreenImage01 from '/public/projects/cpms/project_screen_01.png'
import ProjectScreenImage02 from '/public/projects/cpms/project_screen_02.png'
import ProjectScreenImage03 from '/public/projects/cpms/project_screen_03.png'
import { Sizes } from "../../Assets"

export const ProjectScreens:React.FC = () => {
  return(
    <Container>
      <ImageWrapper id="videoPink" data-lazy="projectScreens_image">
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={ProjectScreenImage00.src}
        >
          <source src="cpms_scene00_pink.webm" type="video/webm" />
          <Image
          src={ProjectScreenImage00}
          alt="screenshot"
          layout="responsive"
          />
        </video>
      </ImageWrapper>
      <ImageWrapper id="videoBlueLight" data-lazy="projectScreens_image" >
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={ProjectScreenImage01.src}
        >
          <source src="cpms_scene01_light-blue.webm" type="video/webm" />
          <Image
          src={ProjectScreenImage01}
          alt="screenshot"
          layout="responsive"
          />
        </video>
      </ImageWrapper>
      <ImageWrapper id="videoGreen" data-lazy="projectScreens_image" >
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={ProjectScreenImage02.src}
        >
          <source src="cpms_scene02_green.webm" type="video/webm" />
          <Image
          src={ProjectScreenImage02}
          alt="screenshot"
          layout="responsive"
          />
        </video>
      </ImageWrapper>
      <ImageWrapper id="videoBlueDark" data-lazy="projectScreens_image" >
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={ProjectScreenImage03.src}
        >
          <source src="cpms_scene03_dark-blue.webm" type="video/webm" />
          <Image
          src={ProjectScreenImage03}
          alt="screenshot"
          layout="responsive"
          />
        </video>
      </ImageWrapper>
    </Container>
  )
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
  display: flex;
    justify-content: center;
    align-items: center;
  overflow: hidden;
  border-radius: 5px;
  height: 73dvh;

  @media (max-width: ${Sizes.small}) {
    height: 25dvh;
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
