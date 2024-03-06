import Image from "next/image"
import styled from "styled-components"
import Drawing00 from '/public/projects/cpms/drawing_00.png'
import Drawing01 from '/public/projects/cpms/drawing_01.png'
import { Text } from "../../Components/styledComponents"

export const DrawingsSection:React.FC = () => {
  return(
    <Container>
      <Image
      src={Drawing01.src}
      alt="hand drawing of a refuge tent"
      width={Drawing01.width}
      height={Drawing01.height}
      layout="responsive"
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
      <Image
      src={Drawing00.src}
      alt="hand drawing of a little girl"
      width={Drawing00.width}
      height={Drawing00.height}
      layout="responsive"
      />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  margin-block: 14.5dvh;

  p {
    align-self: center;
    padding-block: 0 6rem;
  }
`
