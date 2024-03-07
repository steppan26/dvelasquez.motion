import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"

interface Props {
  image: StaticImageData
  imageAlt: string
  projectText: string
  howText: string
}

export const IntroSection:React.FC<Props> = ({ image, imageAlt, projectText, howText }) => {
  return(
    <Container>
      <ImageWrapper className="intro-image">
        <Image
        src={image}
        alt={imageAlt}
        layout="responsive"
        loading="lazy"
        data-lazy
        />
      </ImageWrapper>
      <ProjectWrapper data-lazy>
        <Header>The Project</Header>
        <Text>{projectText}</Text>
      </ProjectWrapper>
      <WhyWrapper data-lazy>
        <Header>The Why and How</Header>
        <Text>{howText}</Text>
      </WhyWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 4fr 6fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'image project'
    'image why';
    grid-gap: 3vw 2.5vw;
    align-items: center;
    justify-items: start;
  padding-inline: var(--container-padding);
  margin-block: 15dvh;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    margin-block: 8dvh 6dvh;
  }
`

const ImageWrapper = styled.div`
  grid-area: image;
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: ${Sizes.small}) {
    order: 1;
    width: 100%;
  }
`

const ProjectWrapper = styled.div`
  grid-area: project;
  align-self: end;

  @media (max-width: ${Sizes.small}) {
    order: 0;
    width: 100%;
    text-align: center;
    white-space: break-spaces;
  }
`

const WhyWrapper = styled.div`
  grid-area: why;
  align-self: start;

  @media (max-width: ${Sizes.small}) {
    order: 2;
    width: 100%;
    text-align: center;
    white-space: break-spaces;
  }
`

const Header = styled.h4`
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -1px;
  color: var(--clr-text-main);
  margin-bottom: 1.25rem;

  @media (max-width: ${Sizes.small}) {
    font-size: 1.875rem;
    margin-bottom: 1.5rem;
  }
`

const Text = styled.p`
  font-family: var(--font-family-wide);
  font-weight: 300;
  font-size: 1.2rem;
  margin-block: 0;
  line-height: 2.06rem;

  @media (max-width: ${Sizes.small}) {
    font-size: 1rem;
    line-height: 1.56rem;
  }
`
