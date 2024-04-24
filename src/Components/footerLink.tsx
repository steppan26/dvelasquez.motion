import Link from "next/link"
import styled from "styled-components"
import { Sizes, ArrowLong } from "../Assets"

export interface FooterLinkProps {
  text: string
  href: string
  direction?: "left" | "right"
}


export const FooterLink:React.FC<FooterLinkProps> = ({ text, href, direction }) => {
  return(
    <NextWrapper href={href} data-direction={direction} >
      {text}
      <BaseArrow>
        <ArrowLong />
      </BaseArrow>
      <ArrowWrapper>
        <ArrowLong />
      </ArrowWrapper>
    </NextWrapper>
  )
}


const ArrowWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  left: -1rem;
  width: 10rem;
  overflow: hidden;

  svg {
    transition: ease all 600ms;
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

export const InternalLink = styled(Link)`
  cursor: pointer;
  font-family: var(--font-family-wide);
  font-weight: 200;
  font-size: 1.6rem;
  line-height: 2rem;
  font-style: italic;
  color: var(--footer-color);

  &, * {
    transition: ease-out 350ms all ;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem; left: 0; right: 0;
    background-image: url('/arrow_long.png');
    background-repeat: no-repeat;
    background-position: bottom;
    width: 0;
    height: 35px;
    transition: ease-out 350ms width ;
  }

  &:hover {
    ${ArrowWrapper} svg {
      transform: translateX(0);
    }

    &::after {
      width: 100%;
    }

    &, * {
      fill: #FFD340;
      color: #FFD340;
    }
  }
`

const BaseArrow = styled.div`
  position: absolute;
  top: 0.65rem; left: 0;
  width: 15vw;
  opacity: 1;
  z-index: 5;

  @media (min-width: ${Sizes.small}) {
    opacity: 0.3;
    top: 1.5rem;
    left: -1rem;
    width: 10rem;
    z-index: unset;
  }
`


const NextWrapper = styled(InternalLink)`
  position: relative;
  grid-area: right;
  display: flex;
    flex-direction: column;
    align-items: center;
  width: max-content;

  &::after {
    content: unset;
  }

  ${BaseArrow}, ${ArrowWrapper} {
    transform-origin: center;
  }

  &[data-direction='left'] {
    grid-area: left !important;
    display: flex;
      flex-direction: column;
      align-items: center;

    ${BaseArrow}, ${ArrowWrapper} {
      align-self: flex-end;
      right: -1rem;
      left: unset;
      transform: rotateY(180deg);

      @media (max-width: ${Sizes.small}) {
        left: -1.5rem; right: 0rem;
      }
    }
}

  ${ArrowWrapper} svg {
    transform: translateX(-110%);
    animation-name: fadeIn;
    animation-duration: 100ms;
    animation-iteration-count: 1;
    animation-delay: 1200ms;
    animation-fill-mode: forwards;

    @media (max-width: ${Sizes.small}) {
      transform: translateY(0);
    }
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 0.75rem;
  }
`
