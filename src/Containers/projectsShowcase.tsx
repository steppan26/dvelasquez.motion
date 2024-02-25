import styled from "styled-components"
import { ScrollingSection } from "../Components"
import goBiggerLogo from '../../public/projects/go_bigger.jpg'
import followMeLogo from '../../public/projects/follow_me.jpg'
import laraLogo from '../../public/projects/girl_called_sara.jpg'
import rokuLogo from '../../public/projects/jelly_Roku.jpg'

export const ProjectsShowcase:React.FC = () => {
  const handleButtonClick = () => {
    window.dispatchEvent(new CustomEvent('selectProject', {detail: {id: ''}}))
  }

  return(
    <Container id="showcaseContainer">
      <Button onClick={handleButtonClick} />
      <ScrollingSection id="go-bigger" backgroundImageUrl={goBiggerLogo.src} />
      <ScrollingSection id="lara" backgroundImageUrl={laraLogo.src} />
      <ScrollingSection id="follow-me" backgroundImageUrl={followMeLogo.src} />
      <ScrollingSection id="roku" backgroundImageUrl={rokuLogo.src} />
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
    .background {
      background-position: left;
    }

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
