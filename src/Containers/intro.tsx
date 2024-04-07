import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import { useCallback } from "react"
import { LoopingVideo } from "../Components"

interface Props {
  image: StaticImageData | string
  imageAlt: string
  projectText: string
  howText: string
}

export const IntroSection:React.FC<Props> = ({ image, imageAlt, projectText, howText }) => {
  const GraphicElement = useCallback(() => {
    if(typeof image === 'string'){
      return <LoopingVideo videoPath={image} />
    }

    return (
      <Image
      src={image}
      alt={imageAlt}
      loading="eager"
      layout="responsive"
      />
    )
  }, [image, imageAlt])

  return (
    <Container>
      <ImageWrapper className="intro-image" data-lazy="intro-image">
        <GraphicElement />
      </ImageWrapper>
      <ProjectWrapper data-lazy="intro" >
        <Header>The Project</Header>
        {projectText.split('<br />').map( text => <Text key={text} dangerouslySetInnerHTML={{ __html: text }} /> )}
      </ProjectWrapper>
      <WhyWrapper data-lazy="intro" >
        <Header>The Why and How</Header>
        {howText.split('<br />').map( text => <Text key={text} dangerouslySetInnerHTML={{ __html: text }} /> )}
      </WhyWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 4.2fr 7fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image project'
    'image why';
    grid-gap: 3vw 5vw;
    align-items: center;
    justify-items: start;
  padding-inline: var(--container-padding) calc(var(--container-padding) + 5vw);
  margin-block: 10dvh;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    margin-block: 8dvh 6dvh;
    padding-inline: var(--container-padding)
  }
`

const ImageWrapper = styled.div`
  position: relative;
  grid-area: image;
  text-align: center;
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
  margin-block: 0 1.25rem;

  @media (max-width: ${Sizes.small}) {
    font-size: 1.875rem;
    margin-block: 0 1.5rem;
  }
`

const Text = styled.p`
  font-family: var(--font-family-wide);
  font-weight: 400;
  font-size: 1.125rem;
  font-style: italic;
  margin-block: 1rem;
  line-height: 1.875rem;
  padding-left: 2rem;

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 1rem;
    line-height: 1.56rem;
    padding-left: 0;
  }
`
