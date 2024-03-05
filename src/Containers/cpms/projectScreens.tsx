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
      <ImageWrapper id="videoPink">
        <Image
        src={ProjectScreenImage00.src}
        alt=""
        width={ProjectScreenImage00.width}
        height={ProjectScreenImage00.height}
        layout="responsive"
        />
      </ImageWrapper>
      <ImageWrapper id="videoBlueLight">
        <Image
        src={ProjectScreenImage01.src}
        alt=""
        width={ProjectScreenImage01.width}
        height={ProjectScreenImage01.height}
        layout="responsive"
        />
      </ImageWrapper>
      <ImageWrapper id="videoGreen">
        <Image
        src={ProjectScreenImage02.src}
        alt=""
        width={ProjectScreenImage02.width}
        height={ProjectScreenImage02.height}
        layout="responsive"
        />
      </ImageWrapper>
      <ImageWrapper id="videoBlueDark">
        <Image
        src={ProjectScreenImage03.src}
        alt=""
        width={ProjectScreenImage03.width}
        height={ProjectScreenImage03.height}
        layout="responsive"
        />
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

  img {
    height: 100% !important;
    width: unset !important;
  }

  &#videoPink {
    flex: 0 0 65%;

    img {
      transform: translateX(20px);
    }

    @media (max-width: ${Sizes.small}) {
      order: 0;
      flex-basis: 100%;
      border-radius: 0;

      img {
        height: auto !important;
        width: 100% !important;
        transform-origin: center top;
        transform: scale(1.15);
      }
    }
  }

  &#videoBlueLight {
    flex: 1 0 20%;

    img {
      transform: translateX(-110px);
    }

    @media (max-width: ${Sizes.small}) {
      order: 2;
      flex-basis: 40%;
      border-radius: var(--border-radius) 0 0 var(--border-radius);

      img {
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

      img {
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

      img {
        height: auto !important;
        width: 100% !important;
        margin-top: 1.5rem;
        transform-origin: center top;
        transform: scale(1.1);
      }
    }
  }
`
