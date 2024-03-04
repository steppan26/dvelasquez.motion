import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import LogoImage from '/public/logos/text_and_brush_wine.gif'

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
        <Text>Home</Text>
        <Text>Works</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Instagram</Text>
        <Text>LinkedIn</Text>
        <Text>Dribble</Text>
        <Text>Click me</Text>
      </TextWrapper>
      <Link href="mailto:dvelasquez.motion@gmail.com">dvelasquez.motion@gmail.com</Link>
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
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8125rem;
  margin-block: 0;
`

const Link = styled.a`
  appearance: none;
  color: ${p => p.theme.textPrimary};
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8125rem;
  margin-block: 0;
`
