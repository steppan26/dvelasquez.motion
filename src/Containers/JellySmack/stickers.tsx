import Image from "next/image"
import styled from "styled-components"
import RocketShipImage from '/public/projects/jellysmack/rocket.gif'
import PositiveVibesImage from '/public/projects/jellysmack/positive_vibes.gif'
import StickersVideoStatic from '/public/projects/jellysmack/stickers_video.png'
import { Text } from "../../Components/styledComponents"

export const Stickers:React.FC = () => {
  return(
    <div>
      <InformationWrapper>
        <Image
          className="rocketship"
          src={RocketShipImage.src}
          alt="rocketship sticker"
          width={350}
          height={350}
          layout="resoponsive"
        />
        <Text>
          <span>Through the use of animated assets,</span>
          <br />
          <span>Jellysmack amplifies digital storytelling,</span>
          <br />
          <span>enriching the viewer experience and fostering</span>
          <br />
          <span>meaningful connections with the audience.</span>
        </Text>
        <Image
        className="positive-vibes"
        src={PositiveVibesImage.src}
        alt="positive vibes sticker"
        width={283}
        height={256}
        layout="resoponsive"
        />
      </InformationWrapper>
      <Video
      autoPlay
      playsInline
      muted
      loop
      controls={false}
      controlsList="nodownload"
      poster={StickersVideoStatic.src}
      preload="metadata">
        <source src="/stickers.mp4" type="video/mp4" />
      </Video>
    </div>
  )
}

const InformationWrapper = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  margin-block: 15dvh;

  img {
    transform-origin: center;

    &:first-of-type {
      transform: translateY(10%) rotate(-19.5deg);
    }

    &:last-of-type {
      transform: translateY(-30%) rotate(-45.85deg);
    }
  }

  p {
    margin-right: 2.5rem;
  }
`

const Video = styled.video`
  width: 101%;
`
