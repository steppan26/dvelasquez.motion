import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import { useCallback, useMemo } from "react"

interface Props {
  image: StaticImageData
  imageAlt: string
  projectText: string
  howText: string
}

export const IntroSection:React.FC<Props> = ({ image, imageAlt, projectText, howText }) => {

  return (
    <Container>
      <ImageWrapper className="intro-image">
        <Image
          src={image}
          alt={imageAlt}
          loading="lazy"
          data-lazy="intro"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </ImageWrapper>
      <ProjectWrapper data-lazy="intro" >
        <Header>The Project</Header>
        {projectText.split('\\n').map( text => <Text key={text}>{text}</Text> )}
      </ProjectWrapper>
      <WhyWrapper data-lazy="intro" >
        <Header>The Why and How</Header>
        {howText.split('\\n').map( text => <Text key={text}>{text}</Text> )}
      </WhyWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 4.2fr 7fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'image project'
    'image why';
    grid-gap: 3vw 2.5vw;
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
  margin-bottom: 1.25rem;

  @media (max-width: ${Sizes.small}) {
    font-size: 1.875rem;
    margin-bottom: 1.5rem;
  }
`

const Text = styled.p`
  font-family: var(--font-family-wide);
  font-weight: 300;
  font-size: 1.125rem;
  margin-block: 1rem;
  line-height: 2.06rem;
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
