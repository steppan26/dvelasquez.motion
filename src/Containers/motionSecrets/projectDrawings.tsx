import styled from "styled-components"
import { Text } from "../../Components/styledComponents"
import Image from "next/image"
import Drawing1 from '/public/projects/motion_secrets/drawing_1.png'
import Drawing2 from '/public/projects/motion_secrets/drawing_2.png'
import Drawing3 from '/public/projects/motion_secrets/drawing_3.png'
import Drawing4 from '/public/projects/motion_secrets/drawing_4.png'

export const ProjectDrawings:React.FC = () => {
  return (
    <Container>
      <Image
        src={Drawing1}
        alt=""
        id="drawingOne"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        src={Drawing2}
        alt=""
        id="drawingTwo"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        src={Drawing3}
        alt=""
        id="drawingThree"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        src={Drawing4}
        alt=""
        id="drawingFour"
        data-lazy="motion-secrets_drawing"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Text data-lazy="motion-secrets_drawing" >
        There&apos;s always a lot of thinking and planning involved in each of these short exercises, and I believe that the process of getting there is half of the story. Here&apos;s a tiny sneak peek of what my notebook looks like.
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
    transform: rotate(25deg);
  }
  #drawingTwo {
    grid-area: drawing2;
    align-self: start;
    justify-self: center;
    transform: rotate(28deg);
  }
  #drawingThree {
    grid-area: drawing3;
    align-self: start;
    justify-self: start;
    transform: rotate(-3.5deg);
  }
  #drawingFour {
    grid-area: drawing4;
    align-self: start;
    justify-self: end;
    transform: rotate(-16deg);
  }

  p {
    grid-area: text;
    align-self: start;
    justify-self: center;
    margin-bottom: 10dvh;
  }
`
