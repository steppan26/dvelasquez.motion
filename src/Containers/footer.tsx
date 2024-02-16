import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"

export const Footer:React.FC = () => {
  return(
    <Container>
      <Logo
      src="/public/Logo Animation text.gif"
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
      <Text>© {new Date().getFullYear()}</Text>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
    justify-content: space-around;
    align-items: center;
  padding: 7dvh 5vw;
  width: 100%;
  background-color: var(--clr-bg-secondary);

  @media (max-width: ${Sizes.small}) {
    flex-direction: column;
  }
`

const Logo = styled(Image)`
  height: 200px;
  width: 355px;
  border: 1px solid grey;
`

const TextWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 22px;
  margin-block: 0;
`
