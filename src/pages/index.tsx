import styled from "styled-components"
import { Footer, Landing, Navbar, ShowReelSection } from "../Containers"

export default function Home() {

  return (
    <Main id='mainContainer'>
      <Landing />
      <div>
        <Navbar />
        <ShowReelSection />
      </div>
      <Footer />
    </Main>
  )
}

const Main = styled.main`
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

const DummyContainer = styled.div<{color?: string}>`
  display: flex;
    justify-content: center;
    align-items: center;
  height: 100dvh;
  background-color: ${p => p.color ?? p.theme.backgroundPrimary};
  outline: 3px double #7d7d7d9d;
  font-size: 5rem;
`
