import { useRouter } from "next/router"
import { useEffect, useMemo, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { useActiveProjects } from "../utils/hooks"

interface Props {
  backgroundImageUrl: string
  id: string
  children?: any
  style: any
}

export const ScrollingSection: React.FC<Props> = (props) => {
  const { children, id, style } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const { activeSection } = useActiveProjects()

  const isSelected = useMemo(() => (activeSection === id), [activeSection, id])

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

  const animationConfig = {
    mass: isSelected ? 1.2 : isHovering ? 1.4 : 1.2,
    friction: isSelected ? 40 : isHovering ? 30 : 40,
    tension: isSelected ? 300 : isHovering ? 200 : 300,
  }

  const containerSpring = useSpring({
    from: { width: activeSection === 'reset' ? '25%' : '100%' },
    to: { width: sectionWidth },
    onRest: (v) => { setTimeout(() => setVisible(v.value.width !== '0%'), 0) },
    config: animationConfig
  })

  const overlaySpring = useSpring({
    from: { opacity: 1 },
    to: { opacity: isSelected ? 0 : isHovering ? 0.65 : 1 },
    config: animationConfig
  })

  useEffect(() => console.info("AA", id, isVisible), [isVisible, id])

  return(
    <Container
    id={id+'_container'}
    className={isSelected ? 'active' : !isVisible ? 'hidden' : undefined}
    onClick={() => router.push('/works#' + id)}
    ref={containerRef}
    style={{...style, ...containerSpring}}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      {children}
      <Overlay className='overlay' style={{...overlaySpring}} />
    </Container>
  )
}

const Container = styled(animated.div)`
  cursor: pointer;
  position: relative;
  width: 100%;
    max-width: 100%;
  height: 100%;
    max-height: 100dvh;
  background-color: var(--clr-bg-projects);
  overflow: hidden;

  &>.snap-to {
    scroll-snap-align: start;
  }

  &.active {
    cursor: default;
    height: max-content;
    max-height: unset;
  }

  &.hidden {
    max-height: 100dvh;
    overflow: hidden;
  }
`

const Overlay = styled(animated.div)`
  pointer-events: none;
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(var(--angle), var(--primary-color), var(--secondary-color));
`
