import Image from "next/image"
import styled from "styled-components"
import RocketShipImage from '/public/projects/jellysmack/rocket.png'
import PositiveVibesImage from '/public/projects/jellysmack/positive_vibes.png'
import StickersVideo from '/public/projects/jellysmack/stickers_video.png'

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
      <Image
        src={StickersVideo.src}
        alt="video showcase various stickers and their animations"
        width={1440}
        height={758}
        layout="responsive"
      />
    </div>
  )
}

const InformationWrapper = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 2vw; */
  margin-block: 15dvh;

    img {
      transform-origin: center;

      &:first-of-type {
        transform: translateY(10%) scale(1.15) rotate(-19.5deg);
      }

      &:last-of-type {
        transform: translateY(-30%) scale(1.15) rotate(-45.85deg);
      }
    }
`

const Text = styled.p`
  font-family: "neusa-next-std-wide";
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.625rem;
  text-align: center;
  margin-right: 2.5rem;
`
