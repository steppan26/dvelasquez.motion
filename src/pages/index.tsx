import styled from "styled-components"
import { Footer, Landing, Navbar, ShowReelSection } from "../Containers"
import { ScrollingContainer, TitleSecondary } from "../Assets/UIComponents"
import { Sizes } from "../Assets"

export default function Home() {

  // add intersection observer so when the HorizontalContainer goes out of view, it scrolls back to the left

  return (
    <Main id='mainContainer'>
      <Landing />
      <Container>
        <Cutout />
        <Navbar type='showcase' />
        <MainTitle>Unique Design for Unique Ideas</MainTitle>
      </Container>
      <ShowReelSection />
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

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const MainTitle = styled(TitleSecondary)`
  scroll-snap-stop: start;
  margin-top: 7.042254dvh;
  padding: 0 var(--padding-main);
  padding-bottom: 0;
  letter-spacing: -2px;
  font-size: 3.75rem;

  @media (max-width: ${Sizes.small}) {
    max-width: 14rem;
    text-align: center;
    font-size: 2rem;
    line-height: 2.8rem;
    padding-inline: 0;
    margin-inline: auto;
    margin-top: 5dvh;
  }
`
