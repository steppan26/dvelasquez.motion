import { ReactNode, useMemo, useRef } from "react"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"
import goBiggerLogo from '../../public/projects/go_bigger.jpg'
import motionSecretsLogo from '../../public/projects/follow_me.jpg'
import laraLogo from '../../public/projects/girl_called_sara.jpg'
import rokuLogo from '../../public/projects/jelly_Roku.jpg'
import { Footer, Navbar, ProjectBlock } from "."
import { MotionSecretsProject, JellySmackPortfolio, CPMSProject, MysteriaProject } from "../Projects"
import { useActiveProjects, useHideNavBarOnScroll, useIsMobileView } from "../utils/hooks"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { NavMobile } from "./NavBar/mobile"
import { ProjectsNavbar } from "./NavBar/projects"

const ProjectsListData: ProjectData[] = [
  {
    id: 'jellysmack',
    name: "Jellysmack",
    imageUrl: goBiggerLogo.src,
    childComponent: <JellySmackPortfolio />,
    isLightNavBar: true
  },
  {
    id: 'cpms',
    name: "CPMS",
    imageUrl: laraLogo.src,
    childComponent: <CPMSProject />
  },
  {
    id: 'motionSecrets',
    name: "Motion Secrets",
    imageUrl: motionSecretsLogo.src,
    childComponent: <MotionSecretsProject />
  },
  {
    id: 'mysteria',
    name: "Roku",
    imageUrl: rokuLogo.src,
    childComponent: <MysteriaProject />,
    isLightNavBar: true
  },
]

export type projectName = 'jellysmack' | 'cpms' | 'motionSecrets' | 'mysteria'

export interface ProjectData {
  imageUrl: string
  id: projectName
  name: string
  childComponent?: ReactNode
  isLightNavBar?: boolean
}

export const ProjectsShowcaseBlocks:React.FC = () => {
  const { activeSection } = useActiveProjects()
  const { isMobileView } = useIsMobileView()

  const transitions = useTransition(ProjectsListData, {
    from: { y:  activeSection === 'reset' ? '200px' : '0',  opacity:  activeSection === 'reset' ? 0 : 1  },
    enter: { y: '0', opacity: 1 },
    delay: 100,
    trail: 20,
    config: {
      mass: 1,
      friction: 50,
      tension: 520,
    }
  })

  const isFullScreen = useMemo(() => (activeSection !== 'reset'), [activeSection])

  return(
    <>
      <Wrapper>
        <NavSelector >
          <NavMobile />
          <ProjectsNavbar navData={ProjectsListData} />
        </NavSelector>
        <Title data-isfullscreen={isFullScreen}>Handpicked Projects</Title>
        <Container id="showcaseContainer" data-isfullscreen={isFullScreen}>
          {transitions((style, item) => (
            <ProjectBlock style={{ ...style }} name={item.name} backgroundImageUrl={item.imageUrl} id={item.id}>
              {item.childComponent}
            </ProjectBlock>
          ))}
        </Container>
      </Wrapper>
      { !isFullScreen && !isMobileView && <Footer /> }
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

const Container = styled(animated.div)`
  --spacing: 7vw;
  --spacing: 10vw;

  position: relative;
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 22vw);
    grid-template-areas: 'jellysmack cpms' 'motion mysteria';
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    align-items: center;
    justify-content: center;
    gap: 3vw;
  margin-bottom: 3dvh;
  width: 100dvw;
    max-width: 100%;
  max-height: 80dvh;
  padding-inline: var(--spacing);
  overflow: hidden;
  background-color: inherit;

  .overlay { --angle: to right; }

  #jellysmack_container {
    grid-area: jellysmack;
    .overlay {
      --primary-color: rgba(122, 155, 118, 1);
      --secondary-color: rgba(255, 210, 64, 1);
    }
  }

  #motionSecrets_container {
    grid-area: motion;

    .overlay {
      --primary-color: rgba(206, 8, 81, 1);
      --secondary-color: rgba(255, 210, 64, 1);
    }
  }

  #cpms_container {
    grid-area: cpms;

    .overlay {
      --primary-color: rgba(206, 8, 81, 1);
      --secondary-color: rgba(243, 228, 217, 1);
    }
  }

  #mysteria_container {
    grid-area: mysteria;

    .overlay {
      --primary-color: rgba(206, 8, 81, 1);
      --secondary-color: rgba(55, 0, 49, 1);
    }
  }

  &[data-isfullscreen='true'] {
    grid-template-columns: 100vw 0;
    grid-template-rows: auto;
    grid-template-areas: 'viewport hidden';
    justify-content: unset;
    padding: 0;
    grid-gap: 0;
    overflow: visible;

    &>div{
      cursor: unset;
      grid-area: hidden !important;

      &.active {
        grid-area: viewport !important;
      }
    }
  }

  @media (max-width: ${Sizes.small}) {
    --spacing: 0;

    display: flex;
      flex-direction: column;
    max-height: unset;
    gap: 0;
    margin-bottom: 0;

    &>div {
      overflow: hidden;
      border-radius: 0;
      height: 25dvh;
    }

    &[data-isfullscreen='true'] {
      &>div {
        overflow: unset;
      }
    }
  }
`

const Title = styled(PrimaryTitle)`
  padding-block: var(--nav-height) 2dvh;
  margin-block: 0;
  margin-left: 10vw;
  grid-area: header;
  font-family: var(--font-family-regular);
    font-size: 5rem;
    font-weight: 100;
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
  margin-bottom: 10dvh;

  @media (max-width: ${Sizes.small}) {
    margin-bottom: 0;
  }
`
