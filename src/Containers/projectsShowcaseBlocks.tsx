import { ReactNode } from "react"
import { animated, useSpring, useTransition } from "react-spring"
import styled from "styled-components"
import goBiggerLogo from '../../public/projects/go_bigger.jpg'
import motionSecretsLogo from '../../public/projects/follow_me.jpg'
import laraLogo from '../../public/projects/girl_called_sara.jpg'
import rokuLogo from '../../public/projects/jelly_Roku.jpg'
import { Navbar, ProjectBlock, ScrollingSection } from "."
import { MotionSecretsProject, JellySmackPortfolio, CPMSProject, MysteriaProject } from "../Projects"
import { useActiveProjects } from "../utils/hooks"

const ProjectsListData: ProjectData[] = [
  {
    id: 'jellysmack',
    imageUrl: goBiggerLogo.src,
    childComponent: <JellySmackPortfolio />,
    isLightNavBar: true
  },
  {
    id: 'cpms',
    imageUrl: laraLogo.src,
    childComponent: <CPMSProject />
  },
  {
    id: 'motionSecrets',
    imageUrl: motionSecretsLogo.src,
    childComponent: <MotionSecretsProject />
  },
  {
    id: 'mysteria',
    imageUrl: rokuLogo.src,
    childComponent: <MysteriaProject />,
    isLightNavBar: true
  },
]

export type projectName = 'jellysmack' | 'cpms' | 'motionSecrets' | 'mysteria'

export interface ProjectData {
  imageUrl: string
  id: projectName
  childComponent?: ReactNode
  isLightNavBar?: boolean
}

export const ProjectsShowcaseBlocks:React.FC = () => {
  const { activeSection } = useActiveProjects()

  const transitions = useTransition(ProjectsListData, {
    from: {x:  activeSection === 'reset' ? '100vw' : '0vw' },
    enter: { x: '0vw' },
    delay: 100,
    trail: 20,
    config: {
      mass: 1,
      friction: 50,
      tension: 520,
    }
  })

  // const scaleTransform = useSpring({
  //   from: {
  //     width: activeSection === 'reset' ? '30vw' : '100vw'
  //   },
  //   to: {
  //     width: activeSection === 'reset' ? '30vw' : '100vw',
  //     padding: activeSection === 'reset' ? '30vw' : '100vw',
  //   },
  //   config: {
  //     mass: 1,
  //     friction: 65,
  //     tension: 180,
  //     delay: 100
  //   }
  // })

  return(
    <Container id="showcaseContainer" data-isfullscreen={activeSection !== 'reset'}>
      <Navbar type='projects' navData={ProjectsListData} />
      {transitions((style, item) => (
        <ProjectBlock style={{ ...style }} id={item.id} backgroundImageUrl={item.imageUrl}>
          {item.childComponent}
        </ProjectBlock>
      ))}
    </Container>
  )
}


const Container = styled(animated.div)`
  --spacing: 10vw;

  position: relative;
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'jellysmack motion' 'cpms mysteria';
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    align-items: center;
    justify-content: center;
    gap: var(--spacing);
  width: 100dvw;
    max-width: 100dvw;
  max-height: 100dvh;
  padding: var(--spacing);
  overflow: hidden;
  background-color: var(--clr-bg-projects);

  .overlay { --angle: to bottom; }

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
    padding: 0;
    grid-gap: 0;
    overflow: auto;

    &>div{
      cursor: unset;
      grid-area: hidden !important;

      &.active {
        grid-area: viewport !important;
      }
    }
  }
`
