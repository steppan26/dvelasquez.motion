import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import LogoImage from '/public/logos/text_and_brush.png'
import Link from "next/link"

export const Footer:React.FC = () => {
  return(
    <Container>
      <Logo
      src={LogoImage.src}
      alt="Main Logo"
      width={300}
      height={185}
      />
      <TextWrapper>
        <InternalLink href="/">Home</InternalLink>
        <InternalLink href="/works">Works</InternalLink>
        <InternalLink href="/about">About</InternalLink>
        <InternalLink href="/">Contact</InternalLink>
      </TextWrapper>
      <TextWrapper>
        <ExternalLink>Instagram</ExternalLink>
        <ExternalLink>LinkedIn</ExternalLink>
        <ExternalLink>Dribble</ExternalLink>
        <ExternalLink>Click me</ExternalLink>
      </TextWrapper>
      <ExternalLink href="mailto:dvelasquez.motion@gmail.com">dvelasquez.motion@gmail.com</ExternalLink>
      <Text>© {new Date().getFullYear()}</Text>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 3.125dvh 3.472222vw;
  width: 100%;
  background-color: var(--clr-bg-secondary);
  box-shadow: inset 0px 4px 20px ${p => p.theme.textPrimary}4c;
  font-family: var(--font-family-regular);

  @media (max-width: ${Sizes.small}) {
    flex-direction: column;
  }
`

const Logo = styled(Image)`
  width: 15.833333vw;
  height: 200px;
  height: auto;
  opacity: 0.5;
`

const TextWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Text = styled.p`
  cursor: text;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8125rem;
  margin-block: 0;
`

const InternalLink = styled(Link)`
  cursor: pointer;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8125rem;
  margin-block: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background-color: var(--clr-text-main);
    width: 0;
    height: 1px;
    transition: ease-out 350ms width ;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

const ExternalLink = styled.a`
  cursor: pointer;
  appearance: none;
  color: ${p => p.theme.textPrimary};
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8125rem;
  margin-block: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background-color: var(--clr-text-main);
    width: 0;
    height: 1px;
    transition: ease-out 350ms width ;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`
