import Image from "next/image"
import styled from "styled-components"
import Screen1 from '/public/projects/jellysmack/phone_screen_0.gif'
import Screen2 from '/public/projects/jellysmack/phone_screen_1.gif'
import Screen3 from '/public/projects/jellysmack/phone_screen_2.gif'
import Screen4 from '/public/projects/jellysmack/phone_screen_3.gif'
import { Sizes } from "../../Assets"

export const PhoneScreenshots:React.FC = () => {
  return(
    <Container>
      <Image
      id="screenOne"
      src={Screen1.src}
      alt="Screenshot of 'New Jellys on the block'"
      width={274}
      height={563}
      layout="responsive"
      />
      <Image
      id="screenTwo"
      src={Screen2.src}
      alt="Screenshot of This week's Creators"
      width={274}
      height={563}
      layout="responsive"
      className='shift-up'
      />
      <Image
      id="screenThree"
      src={Screen3.src}
      alt="Screenshot of 'Were thrilled to have you'"
      width={274}
      height={563}
      layout="responsive"
      />
      <Image
      id="screenFour"
      src={Screen4.src}
      alt="Screenshot of This week's Creators"
      width={274}
      height={563}
      layout="responsive"
      className='shift-up'
      />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 4rem;
  margin-inline: auto;
  overflow-x: auto;
  width: clamp(375px, 90vw, 1440px);

  &>img {
    filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.10));

    &.shift-up {
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
