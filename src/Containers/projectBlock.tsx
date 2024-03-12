import { useRouter } from "next/router"
import { useEffect, useMemo, useRef, useState } from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import { useActiveProjects } from "../utils/hooks"

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
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const { activeSection } = useActiveProjects()

  const isSelected = useMemo(() => (activeSection === id), [activeSection, id])

  useEffect(() => {
    if(!containerRef.current) return

    containerRef.current.scrollTo({ top: 0, behavior: 'instant' })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const sectionWidth = useMemo(() => {
    if(isSelected) return "100%"

    if(activeSection !== 'reset') return '0'

    if(isHovering) return '33%'

    return '25%'
  }, [isSelected, activeSection, isHovering])

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

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return(
    <Container
    id={id+'_container'}
    className={isSelected ? 'active' : !isVisible ? 'hidden' : undefined}
    onClick={() => router.push('/works#' + id)}
    ref={containerRef}
    style={style}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      {children}
      <Overlay className='overlay' >
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
      transform: scaleY(0);
    }
  }
`
