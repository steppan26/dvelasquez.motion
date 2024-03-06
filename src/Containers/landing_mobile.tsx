import styled from "styled-components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Navbar } from "."

export const LandingMobile:React.FC = () => {
  return(
    <Container>
      <Navbar type='mobile' />
      <ContentWrapper>
        <TextWrapper>
          <span>Art Direction</span>
          <span>Brand Design</span>
          <span>Motion Design</span>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.article`
  z-index: 100;
  position: relative;
  display: flex;
    justify-content: center;
    align-items: flex-start;
  width: 100dvw;
  height: max-content;
  padding-top: 7dvh;
`

const TextWrapper = styled(PrimaryTitle)`
  cursor: default;
  z-index: 8;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  font-family: var(--font-family-wide);
  font-size: 32px;
  line-height: 52px;
  width: 100%;
`


const ContentWrapper = styled.div`
  position: relative;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 90dvw;
  height: 90dvw;
  padding: 0 40px;
  border-radius: 50%;
  background-color: ${p => p.theme.backgroundSecondary};
`
