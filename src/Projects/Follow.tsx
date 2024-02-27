import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/follow_me.jpg"

export const FollowProject:React.FC = () => {
  return(
    <Container className='scroll-to'>
      <ImageWrappper className="main-image">
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go larger' in big, duplicated over itself"
        layout="fill"
        />
      </ImageWrappper>
      <Buffer />
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
`

const Buffer = styled.div`
  height: 200vh;
  background: linear-gradient(to top, transparent, black);
`
