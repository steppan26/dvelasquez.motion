import styled from "styled-components"
import { BouncingArrow, MouseMask } from "../Components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { useIsMobileView } from "../utils/hooks"
import { LandingMobile, Navbar } from "."
import { MouseEventHandler } from "react"

export const Landing:React.FC = () => {
  const { isMobileView } = useIsMobileView()

  const handleArrowClick: MouseEventHandler = (e) => {
    const main = document.querySelector('#mainContainer') as HTMLElement
    main.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  if(isMobileView) return <LandingMobile />

  return(
    <>
    <Container>
      <Navbar type='landing' />
      <MouseMask>
          <Wrapper>
          <TextWrapper>
            <span>Art Direction</span>
            <span>Brand Design</span>
            <span>Motion Design</span>
          </TextWrapper>
          <BouncingArrow onClick={handleArrowClick} />
        </Wrapper>
      </MouseMask>
    </Container>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 6;
  display: flex;
    justify-content: center;
    align-items: center;
  height: 100%;
`


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
  z-index: 8;
  cursor: default;
  position: absolute;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100%;
  color: ${p => p.theme.textPrimary};
  font-size: 4.375rem;
  line-height: 6.75rem;
  font-family: "neusa-next-std-wide" !important;
  font-weight: 300;
  font-style: italic;

  &>span {
    font-family: "neusa-next-std-wide" !important;
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 2.5rem;
  }
`
