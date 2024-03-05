import Image, { StaticImageData } from "next/image"
import styled from "styled-components"

interface Props {
  image: StaticImageData
  imageAlt: string
  projectText: string
  howText: string
}

export const IntroSection:React.FC<Props> = ({ image, imageAlt, projectText, howText }) => {
  return(
    <Container>
      <ImageWrapper>
        <Image
        src={image.src}
        alt={imageAlt}
        width={image.width}
        height={image.height}
        layout="responsive"
        />
      </ImageWrapper>
      <ProjectWrapper>
        <Header>The project</Header>
        <Text>{projectText}</Text>
      </ProjectWrapper>
      <WhyWrapper>
        <Header>The Why and How</Header>
        <Text>{howText}</Text>
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
  margin-block: 15dvh;
`

const ImageWrapper = styled.div`
  grid-area: image;
  justify-self: center;
`

const ProjectWrapper = styled.div`
  width: clamp(375px, 40vw, 650px);
  grid-area: project;
  `

const WhyWrapper = styled.div`
  width: clamp(375px, 40vw, 650px);
  grid-area: why;
`

const Header = styled.h4`
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -1px;
  color: var(--clr-text-main);
  margin-bottom: 1.25rem;
`

const Text = styled.p`
  font-family: var(--font-family-regular);
  font-size: 1.25rem;
`
