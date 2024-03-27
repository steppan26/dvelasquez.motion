import Image from "next/image"
import styled from "styled-components"
import RocketShipImage from '/public/projects/jellysmack/rocket.gif'
import PositiveVibesImage from '/public/projects/jellysmack/positive_vibes.gif'
import StickersVideoStatic from '/public/projects/jellysmack/stickers_video.png'
import { Text } from "../../Components/styledComponents"
import { Sizes } from "../../Assets"
import { useIsMobileView } from "../../utils/hooks"
import { LoopingVideo } from "../../Components"

export const Stickers:React.FC = () => {
  const { isMobileView } = useIsMobileView()
  return (
    <Container>
      <InformationWrapper data-lazy>
        <Image
          className="rocketship"
          src={RocketShipImage}
          alt="rocketship sticker"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
        <Text>
          Through the use of animated assets,
          {!isMobileView && <br />} Jellysmack amplifies digital storytelling,
          {!isMobileView && <br />} enriching the viewer experience and fostering
          {!isMobileView && <br />} meaningful connections with the audience.
        </Text>
        <Image
          className="positive-vibes"
          src={PositiveVibesImage}
          alt="positive vibes sticker"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </InformationWrapper>
      <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566006/stickers_ttkpfq.mp4" backupImage={StickersVideoStatic} />
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

  img {
    max-width: 100%;
    height: auto;
    transform-origin: center;

    &:first-of-type {
      justify-self: end;
      transform: scale(1.5) translateY(10%) rotate(-19.5deg);
    }

    &:last-of-type {
      justify-self: start;
      transform: scale(1.2) translateY(-30%) rotate(-45.85deg);
    }
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

const Video = styled.video`
  width: 100%;
  height: auto;
`
