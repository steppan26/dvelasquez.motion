import Image from "next/legacy/image"
import styled from "styled-components"
import Screenshot00 from '/public/projects/cpms/data_screen_00.png'
import Screenshot01 from '/public/projects/cpms/data_screen_01.png'
import Screenshot02 from '/public/projects/cpms/data_screen_02.png'
import Screenshot03 from '/public/projects/cpms/data_screen_03.png'
import { Sizes } from "../../Assets"

export const DataScreenshots:React.FC = () => {
  return(
    <Container>
      <VideoWrapper data-lazy>
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={Screenshot00.src}
        >
          <source src="cpms_data-screen00.webm" type="video/webm" />
          <Image src={Screenshot00} alt="screenshot of data" />
        </video>
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={Screenshot01.src}
        >
          <source src="cpms_data-screen01.webm" type="video/webm" />
          <Image src={Screenshot01} alt="screenshot of data" />
        </video>
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={Screenshot02.src}
        >
          <source src="cpms_data-screen02.webm" type="video/webm" />
          <Image src={Screenshot02} alt="screenshot of data" />
        </video>
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <video
        muted
        playsInline
        autoPlay
        loop
        controls={false}
        poster={Screenshot03.src}
        >
          <source src="cpms_data-screen03.webm" type="video/webm" />
          <Image src={Screenshot03} alt="screenshot of data" />
        </video>
      </VideoWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 28vw 28vw;
    grid-gap: 1rem;
  margin-inline: var(--container-padding);
  margin-bottom: 3rem;

  @media (max-width: ${Sizes.small}) {
    grid-template-columns: 1fr;
    margin-inline: 0;
    margin-bottom: 1rem;
  }
`

const VideoWrapper = styled.span`
  overflow: hidden;
  border-radius: var(--border-radius);

  img, video {
    width: auto !important;
    height: 100% !important;
    transform: scale(1.05);
  }

  @media (max-width: ${Sizes.small}) {
    border-radius: 0;

    img, video {
      height: auto !important;
      width: 100% !important;
      transform: unset;
    }
  }
`
