import Link from "next/link"
import { useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

interface Props {
  isOpen: boolean
}

export const MobileMenu:React.FC<Props> = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false)

  const opacitySpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: isOpen ? 1 : 0 },
    onRest: () => !isOpen && setIsVisible(false),
    onStart: () => isOpen && setIsVisible(true),
    config: {
      mass: 1,
      tension: 180,
      friction: 20
    }
  })
  return(
    <Container style={{...opacitySpring, display: isVisible ? 'grid' : 'none'}} id="mobileMenuBlock">
      <MenuButton data-area="home" href="/">Home</MenuButton>
      <Line data-position="top" />
      <MenuButton data-area="works" href="/projects">Works</MenuButton>
      <Line data-position="left" />
      <Line data-position="right" />
      <MenuButton data-area="about" href="/about">About</MenuButton>
      <Line data-position="bottom" />
      <MenuButton data-area="contact" href="/about#book">Book</MenuButton>
    </Container>
  )
}

const Container = styled(animated.div)`
  position: fixed;
    inset: 0;
  display: grid;
    grid-template-columns: 1fr 2px 1fr;
    grid-template-rows: 1fr 2px 1fr;
    grid-template-areas: 'home line-top works'
    'line-left . line-right'
    'about line-bottom contact';
    align-items: center;
    justify-items: center;
  padding: 8dvh 0;
  background-color: var(--clr-bg-main);
  height: 100dvh;
`

const MenuButton = styled(Link)`
  font-family: var(--font-family-wide);
  font-size: 1.5625rem;
  line-height: 3rem;

  &[data-area = 'home'] {
    grid-area: home;
  }
  &[data-area = 'works'] {
    grid-area: works;
  }
  &[data-area = 'about'] {
    grid-area: about;
  }
  &[data-area = 'contact'] {
    grid-area: contact;
  }
`

const Line = styled.span`
  position: relative;
  height: 100%;
  width: 2px;
  background-color: var(--clr-text-main);
  transform: bottom;

  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: 0;
    left: 50%;
    background-color: var(--clr-text-main);
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &[data-position = 'top'] {
    grid-area: line-top;
  }

  &[data-position = 'left'] {
    justify-self: end;
    grid-area: line-left;
    width: 80%;
    height: 2px;

    &::after {
      top: 50%;
      left: 0;
    }
  }

  &[data-position = 'right'] {
    justify-self: start;
    grid-area: line-right;
    width: 80%;
    height: 2px;

    &::after {
      top: 50%;
      left: unset;
      right: 0;
      transform: translate(50%, -50%) rotate(45deg);
    }
  }

  &[data-position = 'bottom'] {
    grid-area: line-bottom;
    transform: rotate(180deg)
  }
`
