import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useActiveProjects } from "../utils/hooks"
import { Sizes } from "../Assets"
import { projectName } from "."

interface Props {
  backgroundImageUrl: string
  id: string
  name: string
  children?: any
  style: any
}

export const ProjectBlock: React.FC<Props> = (props) => {
  const { children, id, style, name } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [isVisible, setVisible] = useState(true)
  const { activeSection } = useActiveProjects()

  const isSelected = useMemo(() => (activeSection === id), [activeSection, id])

  useEffect(() => {
    if(!containerRef.current) return

    containerRef.current?.scrollTo({ top : 0, behavior: 'instant' })
  }, [router])

  useEffect(() => {
    if(!containerRef.current) return

    containerRef.current.scrollTo({ top: 0, behavior: 'instant' })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    setVisible([id, 'reset'].includes(activeSection))
  }, [activeSection, id])

  useEffect(() => {
    let displayNavBar = true
    if(isVisible && !isSelected && containerRef.current){
      containerRef.current.scrollTo({top: 0})
      displayNavBar = false
    }
    window.dispatchEvent(new CustomEvent('shouldDisplayNavBar', {detail: { displayNavBar }}))
  }, [isSelected, isVisible])

  return(
    <Container
    id={id+'_container'}
    className={isSelected ? 'active' : !isVisible ? 'hidden' : undefined}
    onClick={() => router.push('/works?project=' + id, 'works')}
    ref={containerRef}
    style={style}
    >
      {children}
      <Overlay className={`overlay ${id}`}  >
        {name}
      </Overlay>
    </Container>
  )
}


const Overlay = styled(animated.div)`
  z-index: 15;
  pointer-events: none;
  position: absolute;
  left: -1rem; top: -1rem;
  height: calc(100% + 2rem);
  width: calc(100% + 2rem);
  display: flex;
    justify-content: center;
    align-items: center;
  background: linear-gradient(var(--angle), var(--primary-color), var(--secondary-color));
  color: var(--clr-bg-main) !important;
  opacity: 1;
  overflow: hidden;
  font-family: var(--font-family-wide);
  font-size: 3rem;
  transform-origin: bottom;
  transition: ease-in-out transform 360ms;

  @media (max-width: ${Sizes.small}) {
    font-size: 2rem;
    color: transparent !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    inset: 0;

    &:hover, &:active {
      filter: brightness(1.3);
    }

    &.jellysmack {
      background-image: url('projects/mobile_backgrounds/jellysmack.png');
    }
    &.cpms {
      background-image: url('projects/mobile_backgrounds/cpms.png');
    }
    &.motionSecrets {
      background-image: url('projects/mobile_backgrounds/motion_secrets.png');
    }
    &.mysteria {
      background-image: url('projects/mobile_backgrounds/mysteria.png');
    }

  }
`

const Container = styled(animated.div)`
  cursor: pointer;
  position: relative;
  width: 100%;
    max-width: 100%;
  height: 100%;
    max-height: 100dvh;
  background-color: var(--clr-bg-projects);
  overflow: hidden;
  border-radius: var(--border-radius);

  &>*:first-child {
    width: 100%;
  }

  &>.snap-to {
    scroll-snap-align: start;
  }

  &.active {
    cursor: default;
    border: none;
    height: max-content;
    max-height: unset;
  }

  &.hidden {
    max-height: 100dvh;
    border: none;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  &.hidden,
  &.active,
  &:hover {
    ${Overlay} {
      transform: translateY(100%);
    }
  }

  @media (max-width: ${Sizes.small}) {
    width: 100%;
    height: 300px;

    &.hidden,
    &.active,
    &:hover {
      ${Overlay} {
        display: none;
      }
    }
  }
`
