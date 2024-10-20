import styled from "styled-components"
import Screenshot00 from '/public/projects/cpms/data_screen_00.webp'
import Screenshot01 from '/public/projects/cpms/data_screen_01.webp'
import Screenshot02 from '/public/projects/cpms/data_screen_02.webp'
import Screenshot03 from '/public/projects/cpms/data_screen_03.webp'
import { Sizes } from "../../Assets"
import { LoopingVideo } from "../../Components"

export const DataScreenshots:React.FC = () => {
  return (
    <Container>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="cpms/cpms_data-screen00.webm" backupImage={Screenshot00} />
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="cpms/cpms_data-screen01.webm" backupImage={Screenshot01} />
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="cpms/cpms_data-screen02.webm" backupImage={Screenshot02} />
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="cpms/cpms_data-screen03.webm" backupImage={Screenshot03} />
      </VideoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 28vw 28vw;
    grid-gap: 1rem;
  margin-inline: var(--container-padding);
  margin-bottom: 5rem;

  @media (max-width: ${Sizes.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    grid-gap: 0.25rem;
    margin-inline: 0;
    margin-bottom: 1rem;
  }
`

const VideoWrapper = styled.span`
  overflow: hidden;
  border-radius: var(--border-radius);

  &>div {
    display: flex;
    justify-content: center;
    height: 100%;
    max-height: 100%;
  }

  img, video {
    width: auto !important;
    height: 100% !important;
    transform-origin: center;
    transform: scale(1.05);
  }

  @media (max-width: ${Sizes.small}) {
    border-radius: 0;
    height: max-content;

    img, video {
      height: auto !important;
      width: 100% !important;
      transform: unset;
    }
  }
`
