import { useRef } from "react"
import styled from "styled-components"
import { PrimaryTitle } from "@/Components/styledComponents"
import { MouseMask } from "@/Components"

export const Landing:React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return(
    <Container ref={containerRef} >
      <MouseMask containerRef={containerRef}>
        <TextWrapper>
          <PrimaryTitle>Art Direction</PrimaryTitle>
          <PrimaryTitle>Brand Design</PrimaryTitle>
          <PrimaryTitle>Motion Design</PrimaryTitle>
        </TextWrapper>
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

const TextWrapper = styled.div`
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
`
