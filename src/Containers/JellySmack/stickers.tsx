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
        <LoopingVideo id="rocketShip" videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711979953/jellysmack/_Rocket_fjoyiv.webm" />
        <CustomText>
          Through the use of animated assets,
          {!isMobileView && <br />} Jellysmack amplifies digital storytelling,
          {!isMobileView && <br />} enriching the viewer experience and fostering
          {!isMobileView && <br />} meaningful connections with the audience.
        </CustomText>
        <LoopingVideo id="spinningFace" videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711979955/jellysmack/_positive_vibes_1_ieysmd.webm" />
      </InformationWrapper>
      <LoopingVideo id="stickers" videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566006/jellysmack/stickers_ttkpfq.mp4" backupImage={StickersVideoStatic} />
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

  @media (max-width: ${Sizes.small}) {
    margin-block: 2.5rem 5rem;

    #stickers video {
      transform-origin: center;
      transform: scale(1.15);
    }
  }
`

const InformationWrapper = styled.div`
  display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
  margin: 25dvh 10vw;

  &>div {
    overflow: visible;
  }

  &>div:first-of-type {
    justify-self: end;

    video {
      transform: translate(-3rem, 40%) rotate(-19.5deg) scale(1.25);
    }
  }

  &>div:last-of-type {
    justify-self: start;

    video {
      transform: scale(1.2) translate(2rem, -30%) rotate(-19.5deg);
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

    #rocketShip video {
      transform-origin: center;
      width: 30vw;
      height: calc(30vw * 0.9);
      transform: rotate(-19.5deg);
    }

    #spinningFace video {
      transform-origin: center;
      width: 30vw;
      height: calc(30vw * 0.9);
      transform: rotate(15.85deg);
    }

    p {
      font-size: 1rem;
      margin-right: 0;
    }
  }
`

const CustomText = styled(Text)`
  z-index: 10;
`
