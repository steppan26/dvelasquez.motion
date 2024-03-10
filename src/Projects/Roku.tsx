import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/jelly_Roku.jpg"
import { IntroSection } from "../Containers"
import IntroImage from '/public/projects/mysteria/intro_image.png'
import { Sizes } from "../Assets"

export const MysteriaProject:React.FC = () => {
  return(
    <Container>
      <ImageWrappper className="main-image">
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go larger' in big, duplicated over itself"
        layout="fill"
        />
      </ImageWrappper>
      <IntroSection
      image={IntroImage}
      imageAlt="image displaying multiple projects"
      projectText="Empower digital creators to expand their audience reach and monetize their content on streaming television.\nJellysmack partnered with the streaming giant Roku to introduce groundbreaking creator-led FAST channels."
      howText="Jellysmack and Roku collaborated to hand-select creators and assist them in launching their own shows. Mysteria and Hello Inspo mark just the beginning of many more shows we will be launching.\nWe developed intros and outros for both the main channels and the individual creators to be featured. Our primary objective was to visually translate the personality of each channel."
      />
    </Container>
  )
}

const Container = styled.div`
  --container-padding: 5.3vw;

  cursor: default;

  .intro-image {

    justify-self: end;
    height: 60%;
    overflow: hidden;

    img {
      height: 100% !important;
      width: auto !important;
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

const ImageWrappper = styled.div`
  position: relative;
  display: flex;
    justify-content: center;

  height: calc(100vw * 0.56228571);
  width: 100vw;
`
