import Image from "next/image"
import styled from "styled-components"
import Screen1 from '/public/projects/jellysmack/phone_screen_0.png'
import Screen2 from '/public/projects/jellysmack/phone_screen_1.png'
import Screen3 from '/public/projects/jellysmack/phone_screen_2.png'
import { Sizes } from "../../Assets"

export const PhoneScreenshots:React.FC = () => {
  return(
    <Container>
      <Image
      src={Screen1.src}
      alt="Screenshot of 'New Jellys on the block'"
      width={274}
      height={563}
      layout="responsive"
      />
      <Image
      src={Screen2.src}
      alt="Screenshot of This week's Creators"
      width={274}
      height={563}
      layout="responsive"
      className='shift-up'
      />
      <Image
      src={Screen3.src}
      alt="Screenshot of 'Were thrilled to have you'"
      width={274}
      height={563}
      layout="responsive"
      />
      <Image
      src={Screen2.src}
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
  margin-top: 15dvh;
  margin-inline: auto;
  overflow-x: auto;
  width: clamp(375px, 90vw, 1440px);

  &>img {
    filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.10));

    &.shift-up {
      margin-top: 8dvh;
    }
  }
`
