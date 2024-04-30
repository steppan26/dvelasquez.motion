import styled from "styled-components"
import { Navbar } from "../../NavBar"
import { Footer } from "../../footer/footer"
import { AboutSection } from "./aboutSection"
import { BioSection } from "./bioSection"
import { BookSection } from "./bookSection"
import { CTAButtonRounded } from "../../../Components"

export const AboutDesktop:React.FC = () => {
  return(
    <Container>
      <Navbar type="showcase" mode="dark" />
      <AboutSection />
      <BioSection />
      <ButtonWrapper>
        <CTAButtonRounded />
      </ButtonWrapper>
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
  min-width: max-content;
  color: var(--clr-green);
`

export const Wrapper = styled.div`
  --text-padding: 3.3rem;
  --gap: 3rem;
  --gutter-base-size: 20vw;

  position: relative;
  display: grid;
    grid-template-columns: calc(var(--gutter-base-size) - (var(--gap) / 2)) calc(calc(100vw - (2 * var(--gutter-base-size))) - var(--gap) -  var(--text-padding)) calc(var(--gutter-base-size) - (var(--gap) / 2));
    grid-gap: var(--gap);
  width: 100%;
  margin-top: 15dvh;
`

export const AboutText = styled.p`
  font-family: var(--font-family-wide);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.875rem;
    color: var(--clr-text-main);
  margin-block: 0;
`


export const GutterImagesWrapper = styled.div`
  #daniMain {
    transform: translateY(50%) rotate(-13.5deg);
  }
  #daniFamily {
    transform: rotate(14.28deg);
  }
  #daniSisDad {
    transform: translateY(20px) rotate(-10.6deg);
  }
  #daniPortrait {
    transform: scale(0.8) translate(25%, 4.5rem);
  }
  #pets {
    transform: translate(20%, -50%) rotate(-30deg);
  }
`

export const TextGroup = styled.div`
  display: flex;
    flex-direction: column;
    gap: 0.81rem;
  margin-left: var(--text-padding);
`

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-block: 10rem;

  &>* {
    width: max-content;
  }
`
