import styled from "styled-components"
import Screenshot00 from '/public/projects/cpms/data_screen_00.png'
import Screenshot01 from '/public/projects/cpms/data_screen_01.png'
import Screenshot02 from '/public/projects/cpms/data_screen_02.png'
import Screenshot03 from '/public/projects/cpms/data_screen_03.png'
import { Sizes } from "../../Assets"
import { LoopingVideo } from "../../Components"

export const DataScreenshots:React.FC = () => {
  return (
    <Container>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565081/cpms_data-screen00_owh4qz.webm" backupImage={Screenshot00} />
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565082/cpms_data-screen01_cxsbo2.webm" backupImage={Screenshot01} />
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565082/cpms_data-screen02_jqa1od.webm" backupImage={Screenshot02} />
      </VideoWrapper>
      <VideoWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711565083/cpms_data-screen03_vmuujm.webm" backupImage={Screenshot03} />
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

  &>div {
    height: 100%;
    max-height: 100%;
  }

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
