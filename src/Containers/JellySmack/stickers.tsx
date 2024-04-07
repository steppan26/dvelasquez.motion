import styled from "styled-components"
import StickersVideoStatic from '/public/projects/jellysmack/stickers_video.webp'
import { Text } from "../../Components/styledComponents"
import { Sizes } from "../../Assets"
import { useIsMobileView } from "../../utils/hooks"
import { LoopingVideo } from "../../Components"

export const Stickers:React.FC = () => {
  const { isMobileView } = useIsMobileView()
  return (
    <Container>
      <InformationWrapper data-lazy>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711979953/jellysmack/_Rocket_fjoyiv.webm" />
        <Text>
          Through the use of animated assets,
          {!isMobileView && <br />} Jellysmack amplifies digital storytelling,
          {!isMobileView && <br />} enriching the viewer experience and fostering
          {!isMobileView && <br />} meaningful connections with the audience.
        </Text>
        <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711979955/jellysmack/_positive_vibes_1_ieysmd.webm" />
      </InformationWrapper>
      <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566006/jellysmack/stickers_ttkpfq.mp4" backupImage={StickersVideoStatic} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  max-width: 100vw;
  overflow: hidden;
`

const InformationWrapper = styled.div`
  display: grid;
    grid-template-columns: 1fr 3.5fr 1fr;
    justify-items: center;
  margin: 15dvh 10vw;

  &>div {
    overflow: visible;
  }

  &>div:first-of-type {
    justify-self: end;

    video {
      transform: scale(0.85) translateY(40%) rotate(-19.5deg);
    }
  }

  &>div:last-of-type {
    justify-self: start;

    video {
      transform: scale(1) translateY(-30%) rotate(-19.5deg);
    }
  }

  video {
    max-width: 100%;
    height: auto;
    transform-origin: center;
  }

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    gap: 1rem;
    margin-block: 7dvh;

    img {
      transform-origin: center;
      width: 30vw;
      height: calc(30vw * 0.9);

      &:first-of-type {
        transform: rotate(-19.5deg);
      }

      &:last-of-type {
        transform: rotate(45.85deg);
      }
    }

    p {
      font-size: 1rem;
      margin-right: 0;
    }
  }
`
