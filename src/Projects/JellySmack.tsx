import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/goBigger/main_header_static.jpg"

export const JellySmackPortfolio:React.FC = () => {
  return(
    <Container className='scroll-to'>
      {/* <ImageWrappper className="main-image"> */}
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go larger' in big, duplicated over itself"
        width={1728}
        height={1126}
        layout="responsive"
        />
      {/* </ImageWrappper> */}
      <Buffer />
    </Container>
  )
}

const Container = styled.div`
  cursor: default;
  width: 100vw;
`

const ImageWrappper = styled.div`
  position: relative;
`

const Buffer = styled.div`
  height: 200vh;
  background: linear-gradient(to top, transparent, black);
`