import styled from "styled-components"
import { AboutSection } from "./aboutSection"
import { BioSection } from "./bioSection"
import { Navbar } from "../../NavBar"
import { Footer } from "../../footer/footer"
import { CTAButtonRounded } from "../../../Components"

export const AboutMobile:React.FC = () => {

  return(
    <Container>
      <Navbar type="mobile" mode="dark" />
      <AboutSection />
      <BioSection />
      <ButtonWrapper>
        <CTAButtonRounded />
      </ButtonWrapper>
      <Footer
      leftLink={{ text: "home", href: "/" }}
      rightLink={{ text: "projects", href: "/projects" }}
      />
    </Container>
  )
}

const Container = styled.div`
  --main-padding-inline: 2.75rem;

`

export const MobileHeaderText = styled.h2`
  position: relative;
  grid-area: header;
  min-width: max-content;
  margin-block: 0;
  font-family: var(--font-family-wide);
    font-size: 1.8rem;
    font-weight: 100;
    font-style: italic;
    color: var(--clr-green);
  margin-bottom: 1rem;
  transform: translateX(-1rem);
`

export const MobileAboutText = styled.p`
  margin-block: 0;
  font-family: var(--font-family-wide);
    font-style: italic;
    font-size: 0.75rem;
    line-height: 0.94rem;
    color: var(--clr-text-main);

  &>b {
    font-weight: 600;
  }
`


export const TextGroupMobile = styled.div`
  display: flex;
    flex-direction: column;
    gap: var(--gap-size);
`

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-block: 5rem;

  &>* {
    max-width: 300px;
  }
`
