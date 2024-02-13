import styled from "styled-components"
import { MouseMask } from "../Components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"

export const LandingMobile:React.FC = () => {
  return(
    <Container>
      <TextWrapper>
        <span>Art Direction</span>
        <span>Brand Design</span>
        <span>Motion Design</span>
      </TextWrapper>
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
`

const TextWrapper = styled(PrimaryTitle)`
  cursor: default;
  z-index: 9;
  position: absolute;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  z-index: 20;
  z-index: 8;
  width: 90dvw;
  height: 90dvw;
  padding: 0 40px;
  font-size: 32px;
  line-height: 52px;
  background-color: ${p => p.theme.backgroundSecondary};
  border-radius: 50%;
`
