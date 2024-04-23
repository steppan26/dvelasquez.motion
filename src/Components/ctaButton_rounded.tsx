import styled from "styled-components"
import Link from "next/link"
import { ArrowShort, PhoneIcon, Sizes } from "../Assets"
import { animated, useSpring } from "react-spring"
import { useState } from "react"

export const CTAButtonRounded:React.FC = () => {
  const [isHovering, setIsHovering] = useState(false)

  const arrowSpring = useSpring({
    from: { x: 0, opacity: 1 },
    to: { x: isHovering ? 50 : 0, opacity: isHovering ? 0 : 1 },
    config: {
      mass: 1,
      friction: 30,
      tension: 180,
    }
  })

  const slideSpring = useSpring({
    from: { x: -50 },
    to: { x: isHovering ? 0 : -25 },
    config: {
      mass: 1,
      tension: 380,
      friction: 50,
      restVelocity: 0.2
    }
  })

  return (
    <GPTButton
    href="/about"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      <ContentSlider style={slideSpring}>
        <span><PhoneIcon /></span>
        <span>Book a Call</span>
        <animated.span style={arrowSpring}>
          <ArrowShort />
          </animated.span>
      </ContentSlider>
    </GPTButton>
  )
}

const GPTButton = styled(Link)`
  flex: 1 0 26%;
  position: relative;
  display: flex;
    justify-content: center;
  width: 100%;
  color: #fff;
  font-family: var(--font-family-wide);
    font-size: 2rem;
    text-align: center;
    font-weight: 200;
    font-style: italic;
    word-break: normal;
    letter-spacing: -3%;
  border-radius: 2rem 0.5rem 2rem 0.5rem;
  margin-right: -5%;
  padding: 1rem;
  overflow: hidden;

  transition: ease-out 420ms all;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, var(--clr-green) 25%, var(--clr-green));
  }

  &::after {
    z-index: 0;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background: linear-gradient(to bottom, var(--clr-green) 25%, #556a53);
    transition: ease-in 220ms opacity;
  }

  &:hover {
    transform: scale(1.02);

    &::after {
      opacity: 1;
    }

    span {
      &:first-of-type {
        opacity: 1;
      }

      &:nth-of-type(2) svg {
        margin-left: auto;
      }
    }
  }

  @media (max-width: ${Sizes.small}) {
    margin-right: unset;
    font-size: 1.7rem;
    padding-inline: 2rem;
    width: auto;
  }
`

const ContentSlider = styled(animated.div)`
  z-index: 2;
  display: flex;
    justify-content: center;
  min-width: calc(100% + 55px);

  span {
    display: grid;
      place-items: center;

    &:first-of-type {
      width: 50px;
      opacity: 0;
      transition: ease-out opacity 220ms;

      svg {
        margin-left: auto;
      }
    }
    &:nth-of-type(2) {
      padding-inline: 0.8rem 1rem;
    }
  }
`
