import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/jellysmack/main_header_static.jpg"
import { JellySmackLandingLower } from "../Components"

export const JellySmackPortfolio:React.FC = () => {
  return(
    <Container className='scroll-to'>
      <LandingSection>
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go larger' in big, duplicated over itself"
        width={1728}
        height={1126}
        layout="responsive"
        />
        <JellySmackLandingLower />
      </LandingSection>
    </Container>
  )
}

const Container = styled.div`
  cursor: default;
  width: 100vw;
  background-color: var(--clr-bg-main);
`

const LandingSection = styled.div`
  position: relative;
`
