import styled from "styled-components"
import { Sizes } from "../../Assets"
import { useIsMobileView } from "../../utils/hooks"
import { LoopingVideo } from "../../Components"

export const JellyMessage:React.FC = () => {
  const { isMobileView } = useIsMobileView()

  return (
    <Container data-lazy="jelly-message">
      <LoopingVideo videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711979941/jellysmack/_jelly_dega25.webm" />
      <TextWrapper>
        <Text>
          The social media stickers accumulated over 30 million views, with a continuously rising engagement rate.
        </Text>
        <Text>
          Additionally, the brand identity created a sense of unity and belonging, resonating both internally and within the online community. Through the use of animated assets,
        </Text>
      </TextWrapper>
        {/* {!isMobileView && <br />} Jellysmack amplifies digital storytelling,
        {!isMobileView && <br />} enriching the viewer experience and fostering
        {!isMobileView && <br />} meaningful connections with the audience. */}
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

  &>div:first-child {
    flex: unset;
    min-width: 15vw;
    height: auto;

    video { height: 105% !important; }
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

const TextWrapper = styled.div`
  display: flex;
    flex-direction: column;
    gap: 4dvh;
`

const Text = styled.p`
  justify-self: start;
  font-family: var(--font-family-wide);
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.625rem;
  /* padding-block: 4dvh 0; */
  margin-block: 0;

  @media (max-width: ${Sizes.small}) {
    font-size: 1rem;
    line-height: 1.56rem;
    text-align: center;
    padding-top: 2dvh;
  }
`
