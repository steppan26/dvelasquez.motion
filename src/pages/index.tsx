import styled from "styled-components"
import { Footer, Landing, Navbar, ShowReelSection } from "../Containers"
import { ScrollingContainer, TitleSecondary } from "../Assets/UIComponents"
import { ProjectsShowcase } from "../Containers/projectsShowcase"

export default function Home() {

  // add intersection observer so when the HorizontalContainer goes out of view, it scrolls back to the left

  return (
    <Main id='mainContainer'>
      <Landing />
      <Container>
        <Cutout />
        <Navbar />
        <MainTitle>Unique Design for Unique Ideas</MainTitle>
      </Container>
      <HorizontalContainer id="showcaseContainer">
        <ShowReelSection />
        <ProjectsShowcase  />
      </HorizontalContainer>
      <Footer />
    </Main>
  )
}

const Main = styled(ScrollingContainer)`
  --padding-main: 11.5vw;
`

const Container = styled.div`
  position: relative;
  height: max-content;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

const Cutout = styled.div`
  position: absolute;
  display: block;
  width: 6.25rem;
  height: 6.25rem;
  top: 10dvh;
  transform: rotate(45deg) translate3d(0, 70%, 0);
  background-color: var(--clr-bg-secondary);
`

const MainTitle = styled(TitleSecondary)`
  scroll-snap-stop: start;
  margin-top: 7.042254dvh;
  padding: 0 var(--padding-main);
  padding-bottom: 0;
  letter-spacing: -2px;
  font-size: 3.75rem;
`

const HorizontalContainer = styled.div`
  display: grid;
    grid-template-columns: 100dvw 1fr;
    grid-template-rows: 1fr;
  scroll-snap-align: end !important;
  width: 100dvw;
  height: max-content;
  /* height: 100dvh; */
    max-height: max-content;
  overflow: auto;
  scroll-snap-type: x mandatory;

  &>* {
    scroll-snap-align: end;
  }
`
