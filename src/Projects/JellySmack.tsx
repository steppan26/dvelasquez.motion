import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/jellysmack/main_header_static.jpg"
import { JellySmackLandingLower } from "../Components"
import { IntroSection, PhoneScreenshots, Stickers } from "../Containers"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.png'

const introData = {
  image: JellyBoxImage,
  imageAlt: "Animated icon of the jellysmack logo jumping out of an open box",
  projectText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe.",
  howText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
}

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
      <IntroSection {...introData} />
      <PhoneScreenshots />
      <Stickers />
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
