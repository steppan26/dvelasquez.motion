import Image from "next/image"
import styled from "styled-components"
import AnimatedLogo from '/public/projects/jellysmack/jelly_logo.gif'
import StaticLogo from '/public/projects/jellysmack/jellysmack_logo.png'
import { Sizes } from "../../Assets"
import { useIsMobileView } from "../../utils/hooks"
import { useMemo } from "react"

export const JellyMessage:React.FC = () => {
  const { isMobileView } = useIsMobileView()

  const activeImage = useMemo(() => isMobileView ? StaticLogo : AnimatedLogo, [isMobileView])

  return (
    <Container data-lazy="jelly-message">
      <Image
        src={activeImage}
        alt="Jellysmack logo"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Text>
        Through the use of animated assets,
        {!isMobileView && <br />} Jellysmack amplifies digital storytelling,
        {!isMobileView && <br />} enriching the viewer experience and fostering
        {!isMobileView && <br />} meaningful connections with the audience.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  --base-spacing: 8vh;

  position: relative;
  display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3vw;
  width: 70%;
  margin-inline: auto;
  margin-block: calc(9rem + var(--base-spacing)) var(--base-spacing);

  img {
    width: 15vw;
    height: auto;
  }

  @media (max-width: ${Sizes.small}) {
    display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      justify-items: center;
    margin-block: 10vh 8vh;
    width: 70vw;

    img {
      max-width: 15vw;
      height: auto;
    }
  }
`

const Text = styled.p`
  justify-self: start;
  font-family: var(--font-family-wide);
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.625rem;
  padding-block: 4dvh 0;

  @media (max-width: ${Sizes.small}) {
    font-size: 1rem;
    line-height: 1.56rem;
    text-align: center;
    padding-top: 2dvh;
  }
`
