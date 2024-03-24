import styled from "styled-components"
import { Sizes } from "../Assets"
import { useScrollToTop } from "../utils/hooks"
import { FooterLink, FooterLinkProps } from "../Components/footerLink"
import { FooterContactSection } from "../Components"


interface Props {
  leftLink: FooterLinkProps
  rightLink: FooterLinkProps
}

export const Footer:React.FC<Props> = ({ leftLink, rightLink }) => {
  const { scrollToTop } = useScrollToTop()

  return(
    <Container>
      <BackToTop onClick={() => scrollToTop()} />
      <FooterLink href={leftLink.href} text={leftLink.text} direction="left" />
        <FooterContactSection />
      <FooterLink href={rightLink.href} text={rightLink.text} direction="right" />
    </Container>
  )
}

const Container = styled.footer`
  --footer-color: #F3E4D9;

  position: relative;
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5vw;
  padding: 10dvh 5.7vw;
  width: 100%;
  max-width: 100vw;
  background-color: var(--clr-bg-secondary);
  box-shadow: inset 0px 4px 20px ${p => p.theme.textPrimary}4c;
  font-family: var(--font-family-regular);

  @media (max-width: ${Sizes.small}) {
    flex-direction: column-reverse;
    gap: 10dvh;
  }
`

const BackToTop = styled.div`
  --size: clamp(55px, 4.8vw, 90px);

  cursor: pointer;
  position: absolute;
  top: 0; right: 11.5vw;
  width: var(--size);
    max-width: 120px;
  height: var(--size);
    max-height: 120px;
  background-image: url('yellow_arrow.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: translateY(-50%) rotate(45deg);
  box-shadow: 0 4px 14px 4px rgba(0, 0, 0, 0.1);

  transition: ease all 260ms;

  &:hover {
    box-shadow: 0 4px 14px 6px rgba(0, 0, 0, 0.15);
  }
`
