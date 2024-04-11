import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../../Assets"
import BrushLogo from '/public/logos/brush_wine.gif'
import PrimaryImage from '/public/about/dani_main.png'
import GalleryImage00 from '/public/about/gallery_1.png'
import GalleryImage01 from '/public/about/gallery_2.png'
import GalleryImage02 from '/public/about/gallery_3.png'
import GalleryImage03 from '/public/about/gallery_4.png'
import GalleryImage04 from '/public/about/gallery_5.png'
import { Navbar } from "../NavBar"
import { Calendly } from "../../Components"
import { useRef } from "react"
import { useRouter } from "next/router"
import { Footer } from "../footer"
import { Text } from "../../Components/styledComponents"
import { AboutSection } from "./aboutSection"
import { BioSection } from "./bioSection"
import dynamic from "next/dynamic"

export const AboutDesktop:React.FC = () => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const CalendlyWidget = dynamic(() => import('../../Components/calendly').then(module => module.Calendly), { ssr: false })

  return(
    <Container>
      <Navbar type="showcase" mode="dark" />
      <AboutSection />
      <BioSection />
      <Wrapper ref={calendarWrapperRef} style={{gridTemplateColumns: 'calc(20vw - (var(--gap) / 2)) 1fr calc(20vw - (var(--gap) / 2))'}}>
        <span />
        <div>
          <HeaderText>Book a call</HeaderText>
          <CalendlyWidget />
        </div>
        <span />
      </Wrapper>
      <Footer
        leftLink={{ text: "Home", href: "/" }}
        rightLink={{ text: "Projects", href: "/projects" }}
        />
    </Container>
  )
}

const Container = styled.div`
`


export const HeaderText = styled.h2`
  position: relative;
  grid-area: header;
  font-family: var(--font-family-wide);
  font-size: 5rem;
  font-weight: 100;
  font-style: italic;
  margin-block: 0;
  color: var(--clr-green);

  &::after {
    --size: 0.85rem;

    content: '';
    position: absolute;
    top: calc(50% - var(--size));
    left: calc(-2rem - var(--size));
    width: var(--size);
    height: var(--size);
    background-color: var(--clr-bg-secondary);
    transform: rotate(45deg);
  }
`

export const Wrapper = styled.div`
  --text-padding: 3.3rem;
  --gap: 3rem;

  position: relative;
  display: grid;
    grid-template-columns: calc(20vw - (var(--gap) / 2)) calc(60vw - var(--gap) -  var(--text-padding)) calc(20vw - (var(--gap) / 2));
    grid-gap: var(--gap);
  width: 100%;
  padding-top: 12dvh;
`

export const AboutText = styled.p`
  font-family: var(--font-family-wide);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.875rem;
    color: var(--clr-text-main);
  margin-block: 0;
`


export const GutterImagesWrapper = styled.div``

export const TextGroup = styled.div`
  display: flex;
    flex-direction: column;
    gap: 0.81rem;
  margin-left: var(--text-padding);
`
