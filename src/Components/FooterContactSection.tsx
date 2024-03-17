import styled from "styled-components"
import LogoImage from '/public/lets_talk.png'
import Image from "next/image"
import { useState } from "react"
import { BouncingArrow } from "."
import { Sizes } from "../Assets"


export const FooterContactSection:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <Container>
      <Switcher data-isopen={isOpen}>
        <Logo onClick={() => setIsOpen(true)} src={LogoImage} alt="Main Logo" />
        <Form>
          <ArrowWrapper>
            <BouncingArrow onClick={() => setIsOpen(false)} />
          </ArrowWrapper>
          <a href="mailto:dvelasquez-motion@gmail.com"><b>email:</b> dvelasquez-motion@gmail.com</a>
          <a href="tel:0033666265371"><b>phone:</b> (+33) 06.66.66.66.66</a>
        </Form>
      </Switcher>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`


const Logo = styled(Image)`
  cursor: pointer;
  width: 33vw;
  height: auto;
  transform: scale(0.95);
  transition: ease all 200ms;

  &:hover {
    transform: scale(1);
  }

  @media (max-width: ${Sizes.small}) {
    width: 100%;
  }
`

const Switcher = styled.div`
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 27dvh 27dvh;
    align-items: center;
  height: 27dvh;

  transform: translateY(0);
  transition: ease transform 300ms;

  &[data-isopen='true'] {
    transform: translateY(-100%);
  }
`

const Form = styled.div`
  position: relative;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  height: 100%;
  font-family: var(--font-family-wide);
  font-weight: 100;
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: var(--footer-color);

  * {
    color: inherit;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: ${Sizes.small}) {
    a {
      display: flex;
        flex-direction: column;
        align-items: stretch;
      width: 100%;
      font-size: 1rem;
      text-align: center;

      b {
        font-size: 1.5rem;
      }
    }
  }
`

const ArrowWrapper = styled.div`
  margin-inline: auto;
  transform-origin: center;
  height: 5dvh;
  transform: rotate(180deg);

  &>div {
    cursor: n-resize;
    filter: brightness(200%) invert(1);

    img {
      height: auto;
      width: 50%;
    }
  }

  @media (max-width: ${Sizes.small}) {
    height: 10dvh;
    width: 12px;

    .bouncing-arrow {
      bottom: 0;
      width: 100%;
      height: 100%;
      padding-inline: 0;
      margin-bottom: 0;
    }
  }
`
