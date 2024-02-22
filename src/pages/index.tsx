import styled from "styled-components"
import { Footer, Landing, Navbar, ShowReelSection } from "../Containers"
import { TitleSecondary } from "../Assets/UIComponents"

export default function Home() {

  return (
    <Main id='mainContainer'>
      <Landing />
      <Container>
        <Cutout />
        <Navbar />
        <MainTitle>Unique Design for Unique Ideas</MainTitle>
      </Container>
      <ShowReelSection />
      <Footer />
    </Main>
  )
}

const Main = styled.main`
  --padding-main: 0 12.615741vw;

  position: relative;
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  scroll-snap-type: y mandatory;
  height: 100dvh;
  width: 100%;
  overflow: auto;
  transition: scroll-behavior 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  &>* {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
  }
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
  padding: var(--padding-main);
  padding-bottom: 0;
  letter-spacing: -2px;
  font-size: 3.75rem;
`
