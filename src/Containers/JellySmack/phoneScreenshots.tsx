import styled from "styled-components"
import { Sizes } from "../../Assets"
import { LoopingVideo } from "../../Components"

export const PhoneScreenshots:React.FC = () => {
  return (
    <Container>
      <LoopingVideo dataLazy videoPath="Instagram_story_1.webm" />
      <LoopingVideo dataLazy videoPath="Instagram_story_2.webm" />
      <LoopingVideo dataLazy videoPath="Instagram_story_3.webm" />
      <LoopingVideo dataLazy videoPath="Instagram_story_4.webm" />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 4rem;
  margin-inline: auto;
  width: clamp(375px, 90vw, 1440px);

  &>* {
    &:nth-child(2),
    &:nth-child(4) {
      margin-top: 8dvh;
    }
  }

  @media (max-width: ${Sizes.small}) {
    grid-template-columns: 1fr 1fr;
      grid-gap: 0 1rem;
    padding-inline: 1rem;

    img#screenThree {
      order: 4;
      margin-top: 8dvh;
    }
    img#screenFour {
      order: 3;
      margin-top: 0;
    }
  }
`
