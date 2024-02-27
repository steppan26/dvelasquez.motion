import { ReactNode } from "react"
import { useTransition } from "react-spring"
import styled from "styled-components"
import goBiggerLogo from '../../public/projects/go_bigger.jpg'
import followMeLogo from '../../public/projects/follow_me.jpg'
import laraLogo from '../../public/projects/girl_called_sara.jpg'
import rokuLogo from '../../public/projects/jelly_Roku.jpg'
import { ScrollingSection } from "."
import { FollowProject, JellySmackPortfolio, LaraProject, RokuProject } from "../Projects"

const ProjectsListData: ProjectData[] = [
  {
    id: 'go-bigger',
    imageUrl: goBiggerLogo.src,
    childComponent: <JellySmackPortfolio />
  },
  {
    id: 'lara',
    imageUrl: laraLogo.src,
    childComponent: <LaraProject />
  },
  {
    id: 'follow-me',
    imageUrl: followMeLogo.src,
    childComponent: <FollowProject />
  },
  {
    id: 'roku',
    imageUrl: rokuLogo.src,
    childComponent: <RokuProject />
  },
]

interface ProjectData {
  imageUrl: string
  id: string
  childComponent?: ReactNode
}

export const ProjectsShowcase:React.FC = () => {

  const handleButtonClick = () => {
    window.dispatchEvent(new CustomEvent('selectProject', {detail: {id: 'reset'}}))
  }

  const transitions = useTransition(ProjectsListData, {
    from: {
      y: '-100vh'
    },
    enter: {
      y: '0vh'
    },
    delay: 200,
    trail: 100,
    config: {
      mass: 2.2,
      friction: 40,
      tension: 220,
      restVelocity: 2
    }
  })

  return(
    <Container id="showcaseContainer">
      <Button onClick={handleButtonClick} />
      {transitions((style, item) => (
        <ScrollingSection style={style} id={item.id} backgroundImageUrl={item.imageUrl}>
          {item.childComponent}
        </ScrollingSection>
      ))}
    </Container>
  )
}

const Button = styled.div`
  z-index: 20;
  position: fixed;
    top: 1rem;
    right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 6px;
  background-color: black;
  border: 2px solid black;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-left: 20px double var(--clr-bg-main);
    border-right: 20px double var(--clr-bg-main);
  }
`

const Container = styled.div`
  display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  height: 100dvh;
  width: 100dvw;
  overflow: auto;
  background-color: transparent;

  .overlay { --angle: to bottom; }

  #go-bigger_container {
    .overlay {
      --primary-color: rgba(122, 155, 118, 0.90);
      --secondary-color: rgba(255, 210, 64, 0.90);
    }
  }

  #follow-me_container {

    .overlay {
      --primary-color: rgba(206, 8, 81, 0.80);
      --secondary-color: rgba(255, 210, 64, 0.80);
    }
  }

  #lara_container {

    .overlay {
      --primary-color: rgba(206, 8, 81, 0.80);
      --secondary-color: rgba(243, 228, 217, 0.80);
    }
  }

  #roku_container {

    .overlay {
      --primary-color: rgba(206, 8, 81, 0.60);
      --secondary-color: rgba(55, 0, 49, 0.60);
    }
  }
  `
