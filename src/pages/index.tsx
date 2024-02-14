import styled from "styled-components"
import { Landing } from "../Containers"

export default function Home() {

  return (
    <Main id='mainContainer'>
      <Landing />
      <DummyContainer color="#c4bc1d66">HELLO WORLD</DummyContainer>
      <DummyContainer color="#2f75cb66">HELLO AGAIN</DummyContainer>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  scroll-snap-type: y mandatory;
  height: 100dvh;
  overflow: auto;

  &>* {
    scroll-snap-align: start;
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
