import styled from "styled-components"
import { Text } from "../../Components/styledComponents"
import Image from "next/image"
import Drawing1 from '/public/projects/motion_secrets/drawing_1.webp'
import Drawing2 from '/public/projects/motion_secrets/drawing_2.webp'
import Drawing3 from '/public/projects/motion_secrets/drawing_3.webp'
import Drawing4 from '/public/projects/motion_secrets/drawing_4.webp'
import { Sizes } from "../../Assets"

export const ProjectDrawings:React.FC = () => {
  return (
    <Container>
      <Image
        src={Drawing1}
        alt="sketches of ideas during design stages"
        id="drawingOne"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        src={Drawing2}
        alt="sketches of ideas during design stages"
        id="drawingTwo"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        src={Drawing3}
        alt="sketches of ideas during design stages"
        id="drawingThree"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        src={Drawing4}
        alt="sketches of ideas during design stages"
        id="drawingFour"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Text data-lazy="motion-secrets_drawing" >
        There&apos;s always a lot of thinking and planning involved in each of these short exercises, and I believe that the process of getting there is half of the story.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 20% 30% 45%;
    grid-template-areas: 'drawing1 . drawing2'
    '. text .'
    'drawing3 . drawing4';
  margin-top: 20dvh;

  #drawingOne {
    grid-area: drawing1;
    align-self: start;
    justify-self: center;
    transform: rotate(25deg) translateX(-20%) scale(0.9);
  }
  #drawingTwo {
    grid-area: drawing2;
    align-self: end;
    justify-self: center;
    transform: rotate(28deg) scale(1.2);
  }
  #drawingThree {
    grid-area: drawing3;
    align-self: start;
    justify-self: start;
    padding-top: 2rem;
    transform: rotate(-3.5deg) scale(1.2) translateX(50%);
  }
  #drawingFour {
    grid-area: drawing4;
    align-self: start;
    justify-self: start;
    transform: translateX(-35%) rotate(-16deg) scale(1.4);
  }

  p {
    grid-area: text;
    align-self: start;
    justify-self: center;
    margin-bottom: 10dvh;
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`
