import Image from "next/image"
import styled from "styled-components"
import JellyDotPinImage from '/public/projects/jellysmack/jellydotcom_pin.gif'
import WatchPinImage from '/public/projects/jellysmack/watch_pin.gif'
import { Sizes } from "../Assets"

export const JellySmackLandingLower:React.FC = () => {
  return(
    <Container>
      <WatchPin>
        <Image
        src={WatchPinImage.src}
        alt="badge announcing to watch until the end"
        height={300}
        width={332}
        layout="responsive"
        />
      </WatchPin>
      <Text>
        Jellysmack helps creators grow their communities and maximise their earnings across multiple social media platforms.
      </Text>
      <JellyPin>
        <Image
        src={JellyDotPinImage.src}
        alt="badge announcing to watch until the end"
        height={300}
        width={300}
        layout="responsive"
        />
      </JellyPin>
    </Container>
  )
}

const Container = styled.div`
  --pin-size: 20vw;

  display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0 20%, black 20%);
  transform: translateY(-20%);
  padding-bottom: 5dvh;

  @media (max-width: ${Sizes.small}) {
    max-width: 100%;
    transform: unset;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0 , black);
    padding-bottom: 2dvh;
  }
`

const WatchPin = styled.div`
  position: relative;
  align-self: start;
  width: var(--pin-size);
  height: var(--pin-size);
`

const Text = styled.h3`
  @font-face {
    font-family: 'Jellysmack';
    src: url('/fonts/jellysmack.ttf');
  }

  align-self: center;
  text-align: center;
  color: #fff;
  font-family: 'Jellysmack';
  font-size: 1.75rem;
  line-height: 2.5625rem;
  letter-spacing: 1px;
  font-weight: 400;
  padding: 8rem 5.25rem;

  @media (max-width: ${Sizes.small}) {
    font-size: 0.5625rem;
    line-height: 0.95rem;
    letter-spacing: 1px;
    font-weight: 400;
    padding: 1rem 0;

  }
`

const JellyPin = styled.div`
  position: relative;
  align-self: end;
  width: var(--pin-size);
  height: var(--pin-size);
`
