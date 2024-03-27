import styled from "styled-components"
import { Footer, Landing, Navbar, ShowReelSection } from "../Containers"
import { ScrollingContainer, TitleSecondary } from "../Assets/UIComponents"
import { Sizes } from "../Assets"
import Head from "next/head"
import { useEffect } from "react"

export default function Home() {

  // add intersection observer so when the HorizontalContainer goes out of view, it scrolls back to the left
  useEffect(() => {
    if(typeof window == 'undefined') return

    const containers = document.querySelectorAll('.scrolling-container')
    containers.forEach(container => container.addEventListener('onRouteChangeStart', scrollToTop))
  }, [])

  const scrollToTop = (e: any) => {
    console.info('e', e)
  }

  return (
    <>
    <Head>
      <title>D.Velasquez</title>
    </Head>
    <Main id='mainContainer' className='scrolling-container'>
      <Landing />
      <Container>
        <Cutout data-lazy />
        <Navbar type="showcase" mode="dark" />
        <MainTitle data-lazy>Unique Design for Unique Ideas</MainTitle>
        <ShowReelSection />
      </Container>
      <Footer
      leftLink={{
        text: "About",
        href: "/about"
      }}
      rightLink={{
        text: "Works",
        href: "/works"
      }}
      />
    </Main>
    </>
  )
}

const Main = styled(ScrollingContainer)`
  --padding-main: 11.5vw;
  width: max-content;
    max-width: 100vw;

  @media (max-width: ${Sizes.small}) {
    display: block;
    height: max-content;
    overflow: hidden;
  }
`

const Container = styled.div`
  position: relative;
  height: max-content;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  max-width: 100dvw;
`

const Cutout = styled.div`
  position: absolute;
  display: block;
  width: 6.25rem;
  height: 6.25rem;
  top: 10dvh;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--clr-bg-secondary);
    transform: rotate(45deg) translate3d(0, 70%, 0);
  }

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
  margin-bottom: 0;

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
