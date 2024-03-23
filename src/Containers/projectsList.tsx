import styled from "styled-components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { animated, useTransition } from "react-spring"
import goBiggerLogo from '../../public/projects/go_bigger.jpg'
import motionSecretsLogo from '../../public/projects/follow_me.jpg'
import laraLogo from '../../public/projects/girl_called_sara.jpg'
import rokuLogo from '../../public/projects/jelly_Roku.jpg'
import { Footer } from "."
import { NavMobile } from "./NavBar/mobile"
import { ProjectsNavbar } from "./NavBar/projects"
import { ProjectPeak, ProjectPeakProps } from "../Components"
import React from "react"


const ProjectsListData: ProjectPeakProps[] = [
  {
    id: 'jellysmack',
    text: "Jellysmack",
    backgroundContent: goBiggerLogo,
  },
  {
    id: 'cpms',
    text: "CPMS",
    backgroundContent: laraLogo,
  },
  {
    id: 'motionSecrets',
    text: "Motion Secrets",
    backgroundContent: motionSecretsLogo,
  },
  {
    id: 'mysteria',
    text: "Roku",
    backgroundContent: rokuLogo,
  },
]

export const ProjectsList:React.FC = () => {


  const transitions = useTransition(ProjectsListData, {
    from: { y:  200, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    delay: 100,
    trail: 20,
    config: {
      mass: 1,
      friction: 50,
      tension: 520,
    }
  })

  return(
    <>
      <Wrapper>
        <NavSelector >
          <NavMobile mode="light" />
          <ProjectsNavbar />
        </NavSelector>
        <Title>Handpicked Projects</Title>
        <Container id="showcaseContainer">
          {transitions((style, item, _, index) => (
            <React.Fragment key={index}>
              <ProjectPeak style={{ ...style }} {...item} />
            </React.Fragment>
          ))}
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}


const NavSelector = styled.div`
  z-index: 999;

  #navbarProjects{
    position: absolute;
    display: flex;

    @media (max-width: ${Sizes.small}) {
      display: none;
    }
  }

  #navbarMobile{
    display: none;

    @media (max-width: ${Sizes.small}) {
      display: flex;
    }
  }
`

const Container = styled(animated.ul)`
  position: relative;
  display: flex;
    flex-flow: wrap row;
    gap: 3vw;
    justify-content: center;
    align-items: flex-start;

  margin-bottom: 3dvh;
  width: 100dvw;
    max-width: 100%;
  max-height: 80dvh;
  padding-inline: 5vw;
  overflow: hidden;
  background-color: inherit;

  #jellysmack_container {
    grid-area: jellysmack;
    .overlay {
      --primary-color: rgba(122, 155, 118, 1);
      --secondary-color: rgba(255, 210, 64, 1);
      --angle: to bottom right;
    }
  }

  #motionSecrets_container {
    grid-area: motion;

    .overlay {
      --primary-color: rgba(206, 8, 82, 1);
      --secondary-color: rgba(255, 210, 64, 1);
      --angle: to top right;
    }
  }

  #cpms_container {
    grid-area: cpms;

    .overlay {
      --primary-color: rgba(206, 8, 82, 1);
      --secondary-color: rgba(55, 0, 49, 1);
      --angle: to top right;
    }
  }

  #mysteria_container {
    grid-area: mysteria;

    .overlay {
      --primary-color: rgba(243, 228, 217, 1);
      --secondary-color: rgba(206, 8, 82, 1);
      --angle: to bottom right;
    }
  }

  @media (max-width: ${Sizes.small}) {
    --spacing: 0;

    display: flex;
    max-height: unset;
    gap: 0;
    margin-bottom: 0;
    padding: 0;
    margin: 0;
    max-width: 100vw;
    height: 100dvh;
  }
`

const Title = styled(PrimaryTitle)`
  padding-block: var(--nav-height) 2dvh;
  margin-block: 0;
  margin-left: 10vw;
  grid-area: header;
  font-family: var(--font-family-regular);
    font-size: 5rem;
    font-weight: 200;
    font-style: italic;
    line-height: calc(5rem * 1.2);
  color: ${p => p.theme.btnPrimaryBg};
  max-width: 100%;

  &[data-isfullscreen='true']{
    display: none;
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
    font-size: 3.5rem;
    line-height: calc(3.5rem * 1.2);
    margin-block: 0;

    white-space: inherit;
  }
`

const Wrapper = styled.div`
  min-height: 100dvh;
  margin-bottom: 3dvh;

  @media (max-width: ${Sizes.small}) {
    margin-bottom: 0;

    --nav-main-color: var(--clr-bg-main);
  }
`
