import styled from "styled-components"
import { Footer, Landing, Navbar, ShowReelSection } from "../Containers"
import { TitleSecondary } from "../Assets/UIComponents"

export default function Home() {

  return (
    <Main id='mainContainer'>
      <Landing />
      <Container>
        <Navbar />
        <MainTitle>Unique Design for Unique Ideas</MainTitle>
      </Container>
      <ShowReelSection />
      <Footer />
    </Main>
  )
}

const Main = styled.main`
  --padding-main: 0 12.615741vw 7dvh;

  position: relative;
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  scroll-snap-type: y mandatory;
  height: 100dvh;
  overflow: auto;
  transition: scroll-behavior 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  &>* {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
  }
`

const Container = styled.div`
  height: max-content;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

const DummyContainer = styled.div<{color?: string}>`
  display: flex;
    justify-content: center;
    align-items: center;
  height: 100dvh;
  background-color: ${p => p.color ?? p.theme.backgroundPrimary};
  outline: 3px double #7d7d7d9d;
  font-size: 5rem;
`

const MainTitle = styled(TitleSecondary)`
  scroll-snap-stop: start;
  margin-top: 7.042254dvh;
  padding: var(--padding-main);
  letter-spacing: -2px;
  margin-top: calc(var(--nav-height) + 7.042254dvh);
`
