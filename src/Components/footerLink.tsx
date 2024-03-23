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
  overflow: hidden;

  img {
    transition: ease all 1200ms;
  }
`

export const InternalLink = styled(Link)`
  cursor: pointer;
  font-family: var(--font-family-wide);
  font-weight: 100;
  font-style: italic;
  font-size: 2.5rem;
  line-height: 3rem;
  color: var(--footer-color);

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
    ${ArrowWrapper} img {
      transform: translateX(0);
    }

    &::after {
      width: 100%;
    }
  }
`

const BaseArrow = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  opacity: 1;
  z-index: 5;

  @media (min-width: ${Sizes.small}) {
    opacity: 0.3;
    z-index: unset;
  }
`


const NextWrapper = styled(InternalLink)`
  position: relative;
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
    display: flex;
      flex-direction: column;
      align-items: center;

    ${BaseArrow}, ${ArrowWrapper} {
      align-self: flex-end;
      transform: rotateY(180deg);
    }
}

  ${ArrowWrapper} img {
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

`
