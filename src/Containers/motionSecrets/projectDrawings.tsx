import styled from "styled-components"
import { Text } from "../../Components/styledComponents"
import Image from "next/image"
import Drawing1 from '/public/projects/motion_secrets/drawing_1.webp'
import Drawing2 from '/public/projects/motion_secrets/drawing_2.webp'
import Drawing3 from '/public/projects/motion_secrets/drawing_3.webp'
import Drawing4 from '/public/projects/motion_secrets/drawing_4.webp'
import { Sizes } from "../../Assets"
import { isSafari } from "../../utils/helpers"

export const ProjectDrawings:React.FC = () => {

  return (
    <Container data-issafari={isSafari()}>
      <Image
        src={Drawing1}
        alt="sketches of ideas during design stages"
        id="drawingOne"
        data-lazy="motion-secrets_drawing"
        data-issafari={isSafari()}
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

  #drawingOne {
    grid-area: drawing1;
    align-self: start;
    justify-self: center;
    -ms-transform: translateX(15%) translateY(32%) rotate(25deg) scale(0.9);
    -webkit-transform: translateX(15%) translateY(32%) rotate(25deg) scale(0.9);
    -moz-transform: translateX(15%) translateY(32%) rotate(25deg) scale(0.9);
    -o-transform: translateX(15%) translateY(32%) rotate(25deg) scale(0.9);
    transform: translateX(15%) translateY(32%) rotate(25deg) scale(0.9);
    transform: translateX(0) translateY(-4rem) rotate(25deg) scale(0.9);

    /* &[data-issafari='true'] {
    } */
  }
  #drawingTwo {
    grid-area: drawing2;
    align-self: end;
    justify-self: center;
    -ms-transform: rotate(28deg) scale(1.2);
    -webkit-transform: rotate(28deg) scale(1.2);
    -moz-transform: rotate(28deg) scale(1.2);
    -o-transform: rotate(28deg) scale(1.2);
    transform: rotate(28deg) scale(1.2);
  }
  #drawingThree {
    grid-area: drawing3;
    align-self: start;
    justify-self: start;
    padding-top: 2rem;
    -ms-transform: translateX(50%) rotate(-3.5deg) scale(1.2);
    -webkit-transform: translateX(50%) rotate(-3.5deg) scale(1.2);
    -moz-transform: translateX(50%) rotate(-3.5deg) scale(1.2);
    -o-transform: translateX(50%) rotate(-3.5deg) scale(1.2);
    transform: translateX(50%) rotate(-3.5deg) scale(1.2);
  }
  #drawingFour {
    grid-area: drawing4;
    align-self: start;
    justify-self: start;
    -ms-transform: translateX(-35%) rotate(-16deg) scale(1.4);
    -webkit-transform: translateX(-35%) rotate(-16deg) scale(1.4);
    -moz-transform: translateX(-35%) rotate(-16deg) scale(1.4);
    -o-transform: translateX(-35%) rotate(-16deg) scale(1.4);
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
