import Image from "next/image"
import styled from "styled-components"
import Screenshot00 from '/public/projects/cpms/data_screen_00.png'
import Screenshot01 from '/public/projects/cpms/data_screen_01.png'
import Screenshot02 from '/public/projects/cpms/data_screen_02.png'
import Screenshot03 from '/public/projects/cpms/data_screen_03.png'
import { Sizes } from "../../Assets"

export const DataScreenshots:React.FC = () => {
  return(
    <Container>
      <VideoWrapper>
        <Image
        src={Screenshot00.src}
        alt="screenshot of data"
        width={Screenshot00.width}
        height={Screenshot00.height}
        />
      </VideoWrapper>
      <VideoWrapper>
        <Image
        src={Screenshot01.src}
        alt="screenshot of data"
        width={Screenshot01.width}
        height={Screenshot01.height}
        />
      </VideoWrapper>
      <VideoWrapper>
        <Image
        src={Screenshot02.src}
        alt="screenshot of data"
        width={Screenshot02.width}
        height={Screenshot02.height}
        />
      </VideoWrapper>
      <VideoWrapper>
        <Image
        src={Screenshot03.src}
        alt="screenshot of data"
        width={Screenshot03.width}
        height={Screenshot03.height}
        />
      </VideoWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
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

  img {
    width: auto !important;
    height: 100% !important;
    transform: scale(1.05);
  }

  @media (max-width: ${Sizes.small}) {
    border-radius: 0;

    img {
      height: auto !important;
      width: 100% !important;
      transform: unset;
    }
  }
`
