import { MouseEventHandler, useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Sizes } from "../Assets";
import { useTranslation } from "../utils/hooks";

interface Props {
  scrollToSelector: string
}

export const ScrollDown:React.FC<Props> = ({ scrollToSelector }) => {
  const arrowRef = useRef<HTMLParagraphElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    if(!arrowRef.current) return

    setTimeout(() => {
      if(arrowRef.current)
        arrowRef.current.style.display = 'block'
    }, 2800)
  }, [])

  const bounceSpring = useSpring({
    from: { translateY: 0 },
    to: async (next) => {
      while (true) {
        await next({ translateY: 10 })
        await next({ translateY: 0 })
        await new Promise((resolve) => setTimeout(resolve, 3200))
      }
    },
    config: {
      tension: 200,
      friction: 15,
      velocity: 0.3,
      duration: 200
    },
  })

  const onClick: MouseEventHandler = (e) => {
    const elementToScrollTo = document.querySelector(scrollToSelector)
    elementToScrollTo?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  return (
    <ArrowWrapper ref={arrowRef} style={bounceSpring} onClick={onClick} className="bouncing-arrow">
      {t('home.landing.scrollDown')}
    </ArrowWrapper>
  );
}

const ArrowWrapper = styled(animated.p)`
  display: none;
  position: relative;
  cursor: s-resize;
  z-index: 10;
  align-self: end;
  margin-bottom: 5rem;
  padding-inline: 1.5rem;
  max-height: clamp(50px, 5.9vw, 85px);
  width: max-content;
  color: var(--clr-bg-main);
  font-family: var(--font-family-wide);
  font-style: italic;
  font-size: 1rem;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    top: 2.25rem;
    left: 50%;
    background-color: var(--clr-bg-main);
    width: 0.5rem;
    height: 0.5rem;
    transform: translate(-50%) rotate(45deg);
  }

  @media (max-width: ${Sizes.small}) {
    align-self: unset;
    position: absolute;
      bottom: 3rem;
    height: 30px;
    margin-bottom: 0.5rem;
    width: 15vw;
  }
`
