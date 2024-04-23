import styled from "styled-components"
import { Sizes } from "../../Assets"
import { FooterLink, FooterLinkProps } from "../../Components/footerLink"
import { FooterContactSection } from "../../Components"
import { BackToTop } from "./backToTop"


interface Props {
  leftLink: FooterLinkProps
  rightLink: FooterLinkProps
}

export const Footer:React.FC<Props> = ({ leftLink, rightLink }) => {
  return(
    <Container>
      <Background />
      <BackToTop />
      <FooterLink href={leftLink.href} text={leftLink.text} direction="left" />
      <FooterContactSection />
      <FooterLink href={rightLink.href} text={rightLink.text} direction="right" />
    </Container>
  )
}

const Container = styled.footer`
  --footer-color: #F3E4D9;
  --padding-size: 9vw;

  position: relative;
  display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto auto;
      grid-template-areas: 'left image right'
      'left socials right';
    align-items: center;
    justify-items: center;
  padding: 5dvh 5.7vw;
  width: 100%;
  max-width: 100vw;
  background-color: var(--clr-bg-secondary);
  box-shadow: inset 0px 4px 20px ${p => p.theme.textPrimary}4c;
  font-family: var(--font-family-regular);

  @media (max-width: ${Sizes.small}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
      grid-template-areas: 'image image image'
      'left socials right';
    padding: var(--padding-size);
  }
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/footer_bg.webp');
  background-size: cover;
  background-position: center;
  opacity: 0.25;
`
