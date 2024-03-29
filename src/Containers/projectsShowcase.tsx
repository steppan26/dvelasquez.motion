import { ReactNode } from "react"
import { animated, useSpring, useTransition } from "react-spring"
import styled from "styled-components"
import goBiggerLogo from '../../public/projects/go_bigger.jpg'
import followMeLogo from '../../public/projects/follow_me.jpg'
import laraLogo from '../../public/projects/girl_called_sara.jpg'
import rokuLogo from '../../public/projects/jelly_Roku.jpg'
import { Navbar, ScrollingSection } from "."
import { FollowProject, JellySmackPortfolio, CPMSProject, RokuProject } from "../Projects"

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
    imageUrl: followMeLogo.src,
    childComponent: <FollowProject />
  },
  {
    id: 'mysteria',
    imageUrl: rokuLogo.src,
    childComponent: <RokuProject />,
    isLightNavBar: true
  },
]

export interface ProjectData {
  imageUrl: string
  id: string
  childComponent?: ReactNode
  isLightNavBar?: boolean
}

export const ProjectsShowcase:React.FC = () => {
  const transitions = useTransition(ProjectsListData, {
    from: {x: '200vw' },
    enter: { x: '0vw' },
    delay: 100,
    trail: 120,
    config: {
      mass: 1.4,
      friction: 50,
      tension: 320,
      restVelocity: 6
    }
  })

  const scaleTransform = useSpring({
    from: { paddingRight: '200vw' },
    to: { paddingRight: '0' },
    config: {
      mass: 2,
      friction: 50,
      tension: 80,
      delay: 100
    }
  })

  return(
    <Container id="showcaseContainer">
      <Navbar type='projects' navData={ProjectsListData} />
      {transitions((style, item) => (
        <ScrollingSection style={{...style, ...scaleTransform}} id={item.id} backgroundImageUrl={item.imageUrl}>
          {item.childComponent}
        </ScrollingSection>
      ))}
    </Container>
  )
}


const Container = styled(animated.div)`
  position: relative;
  display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  height: 100dvh;
  width: 100dvw;
  overflow: auto;
  background-color: var(--clr-bg-secondary);

  .overlay { --angle: to bottom; }

  #jellysmack_container {
    .overlay {
      --primary-color: rgba(122, 155, 118, 0.90);
      --secondary-color: rgba(255, 210, 64, 0.90);
    }
  }

  #motionSecrets_container {

    .overlay {
      --primary-color: rgba(206, 8, 81, 0.80);
      --secondary-color: rgba(255, 210, 64, 0.80);
    }
  }

  #cpms_container {

    .overlay {
      --primary-color: rgba(206, 8, 81, 0.80);
      --secondary-color: rgba(243, 228, 217, 0.80);
    }
  }

  #mysteria_container {

    .overlay {
      --primary-color: rgba(206, 8, 81, 0.60);
      --secondary-color: rgba(55, 0, 49, 0.60);
    }
  }
`
