import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import { useCallback } from "react"
import { LoopingVideo } from "../Components"
import { useTranslation } from "../utils/hooks"

type ProjectType = "jellysmack" | "motionSecrets" | "cpms" | "mysteria"

interface Props {
  image: StaticImageData | string
  project: ProjectType
}

export const IntroSection:React.FC<Props> = ({ image, project }) => {
  const { t } = useTranslation()
  const getText = useCallback((key: string): string => {
    return t('projects.'+project+'.intro.'+key)as string
  }, [t, project])

  const GraphicElement = useCallback(() => {
    if(typeof image === 'string'){
      return <LoopingVideo videoPath={image} />
    }
    return (
      <Image
      src={image}
      alt={getText('imageAlt')}
      loading="eager"
      layout="responsive"
      />
    )
  }, [image, getText])

  const FormattedProjectText: React.FC = useCallback(() => (
    <>
    {getText('projectText')
      .split('<br />')
      .map(text =>
        <Text key={text} dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </>
  ), [getText])

  const FormattedHowText: React.FC = useCallback(() => (
      <>
      {getText('howText')
        .split('<br />')
        .map(text =>
          <Text key={text} dangerouslySetInnerHTML={{ __html: text }} />
        )}
      </>
    ), [getText])

  return (
    <Container>
      <ImageWrapper className="intro-image" data-lazy="intro-image">
        <GraphicElement />
      </ImageWrapper>
      <ProjectWrapper data-lazy="intro" >
        <Header>{t('generic.project')}</Header>
        <FormattedProjectText />
      </ProjectWrapper>
      <WhyWrapper data-lazy="intro" >
        <Header>{t('generic.whyHow')}</Header>
        <FormattedHowText />
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
    grid-gap: 1.5vw 3.5vw;
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
  min-width: 100%;

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
  min-width: 100%;

  @media (max-width: ${Sizes.small}) {
    order: 2;
    width: 100%;
    text-align: center;
    white-space: break-spaces;
  }
`

const Header = styled.h4`
  font-size: 2.1875rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -1px;
  color: var(--clr-text-main);
  margin-block: 0 0.5rem;

  @media (max-width: ${Sizes.small}) {
    font-size: 1.875rem;
    margin-block: 0 1.5rem;
  }
`

const Text = styled.p`
  font-family: var(--font-family-wide);
  font-weight: 200;
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

    b {
      font-weight: 400;
    }
  }
`
