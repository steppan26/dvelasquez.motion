import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/goBigger/main_header_static.jpg"

export const JellySmackPortfolio:React.FC = () => {
  return(
    <Container className='scroll-to'>
      <ImageWrappper>
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go larger' in big, duplicated over itself"
        layout="fill"
        />
        <Buffer />
      </ImageWrappper>
    </Container>
  )
}

const Container = styled.div`
  cursor: default;
`

const ImageWrappper = styled.div`
  position: relative;
  display: flex;

  height: calc(100vw * 0.56228571);
  width: 100vw;
  height: 1
`

const Buffer = styled.div`
  background: linear-gradient(to bottom, transparent, black);
`
