import Image from "next/image"
import styled from "styled-components"
import AnimatedLogo from '/public/projects/jellysmack/jelly_logo.gif'
import { Sizes } from "../../Assets"

export const JellyMessage:React.FC = () => {
  return(
    <Container>
      <Image
      src={AnimatedLogo.src}
      alt="Jellysmack logo"
      width={AnimatedLogo.width / 2.5}
      height={AnimatedLogo.height / 2.5}
      />
      <Text>
        Through the use of animated assets,
        <br />
        Jellysmack amplifies digital storytelling,
        <br />
        enriching the viewer experience and fostering
        <br />
        meaningful connections with the audience.
      </Text>
    </Container>
  )
}

const Container = styled.div`
  --base-spacing: 8vh;

  display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3vw;
  width: 70%;
  margin-inline: auto;
  margin-block: calc(9rem + var(--base-spacing)) var(--base-spacing);
`

const Text = styled.p`
  justify-self: start;
  font-family: var(--font-family-wide);
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.625rem;
  padding-block: 4dvh 0;
`
