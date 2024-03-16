import styled from "styled-components"
import { BouncingArrow, MouseMask } from "../Components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { LandingMobile, Navbar } from "."
import { MouseEventHandler, useRef } from "react"

export const Landing:React.FC = () => {
  const selectorRef = useRef<HTMLDivElement>(null)

  const handleArrowClick: MouseEventHandler = (e) => {
    const el = selectorRef.current?.nextSibling as HTMLElement
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  return(
    <Selector ref={selectorRef}>
      <span>
        <LandingMobile />
      </span>
      <Container data-desktop >
        <Navbar type='landing' />
        <MouseMask>
            <Wrapper>
            <TextWrapper onClick={handleArrowClick}>
              <span>Art Direction</span>
              <span>Brand Design</span>
              <span>Motion Design</span>
            </TextWrapper>
            <BouncingArrow onClick={handleArrowClick} />
          </Wrapper>
        </MouseMask>
      </Container>
    </Selector>
  )
}

const Selector = styled.div`
  &>* {
    display: none;
    &[data-desktop] { display: flex; }

    @media (max-width: ${Sizes.small}) {
      display: block;
      &[data-desktop] { display: none; }
    }
  }

`

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
  margin-block: 0;

  &>span {
    font-family: "neusa-next-std-wide" !important;
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 2.5rem;
  }
`
