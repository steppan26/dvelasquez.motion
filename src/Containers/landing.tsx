import styled from "styled-components"
import { BouncingArrow, MouseMask } from "../Components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { useIsMobileView } from "../utils/hooks"
import { LandingMobile } from "."
import { useEffect, useState } from "react"
import Image from "next/image"
import { useSpring } from "react-spring"

export const Landing:React.FC = () => {
  const { isMobileView } = useIsMobileView()

  if(isMobileView) return <LandingMobile />

  return(
    <Container>
      <MouseMask>
          <Container>
          <TextWrapper>
            <span>Art Direction</span>
            <span>Brand Design</span>
            <span>Motion Design</span>
          </TextWrapper>
          <BouncingArrow />
        </Container>
      </MouseMask>
    </Container>
  )
}



const Container = styled.article`
  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
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
  width: 100%;
  height: 100%;
  padding: 0 40px;

  @media (max-width: ${Sizes.small}) {
    font-size: 2.5rem;
  }
`
