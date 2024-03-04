import Image from "next/image"
import styled from "styled-components"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.png'

export const IntroSection:React.FC = () => {
  return(
    <Container>
      <ImageWrapper>
        <Image
        src={JellyBoxImage.src}
        alt="Animated icon of the jellysmack logo jumping out of an open box"
        width={389}
        height={419}
        />
      </ImageWrapper>
      <ProjectWrapper>
        <Header>The project</Header>
        <Text>Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe.</Text>
      </ProjectWrapper>
      <WhyWrapper>
        <Header>The Why and How</Header>
        <Text>Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe.</Text>
      </WhyWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'image project'
    'image why';
    align-items: center;
    justify-items: start;
  padding-inline: 5vw;
`

const ImageWrapper = styled.div`
  grid-area: image;
  justify-self: center;
`

const ProjectWrapper = styled.div`
  width: clamp(375px, 34vw, 650px);
  grid-area: project;
  `

const WhyWrapper = styled.div`
  width: clamp(375px, 34vw, 650px);
  grid-area: why;
`

const Header = styled.h4`
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 300;
  letter-spacing: -2px;
`

const Text = styled.p`
  font-size: 1.25rem;
`
