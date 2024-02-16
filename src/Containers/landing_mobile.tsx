import styled from "styled-components"
import { BouncingArrow, MouseMask } from "../Components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"

export const LandingMobile:React.FC = () => {
  return(
    <Container>
      <ContentWrapper>
        <TextWrapper>
          <span>Art Direction</span>
          <span>Brand Design</span>
          <span>Motion Design</span>
        </TextWrapper>
        <BouncingArrow />
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.article`
  position: relative;
  display: flex;
    justify-content: center;
    align-items: flex-start;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  padding-top: 7dvh;

  @media (max-width: ${Sizes.small}) {
    height: max-content;
  }
`

const TextWrapper = styled(PrimaryTitle)`
  cursor: default;
  z-index: 8;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
