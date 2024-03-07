import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

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
  const [isSelected, setIsSelected] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setVisible] = useState(true)

  const getActivePage = useCallback(() => {
    const pathList = router.asPath.split('#')

    return pathList.length > 1 ? pathList[1] : 'reset'
  }, [router])

  useEffect(() => {
    const selectedPage = getActivePage()
    setVisible(selectedPage === id || selectedPage === 'reset')
    setIsSelected(selectedPage === id)
  }, [id, getActivePage])

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
    from: { flexBasis: '25%', flexShrink: 1 },
    to: {
      flexBasis: isSelected ? '100%' : isHovering ? '33%' : '25%',
      flexShrink: isSelected || isHovering ? 0 : 1,
    },
    config: animationConfig
  })

  const overlaySpring = useSpring({
    from: { opacity: 1 },
    to: { opacity: isSelected ? 0 : isHovering ? 0.65 : 1 },
    config: animationConfig
  })

  return(
    <Container
    id={id+'_container'}
    className={isVisible && !isSelected ? 'active' : undefined}
    onClick={() => router.push('/works#' + id)}
    data-projectid
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
  cursor: default;
  flex-shrink: 1;
  flex-grow: 0;
  flex-basis: 25%;
  position: relative;
  /* height: 100vh; */
  width: max-content;
    max-width: 100vw;
  /* overflow: auto; */
  background-color: var(--clr-bg-main);

  &>.snap-to {
    scroll-snap-align: start;
  }

  &.active {
    cursor: pointer;
    height: 100vh;
    /* overflow: hidden; */
    height: max-height;
  }
`

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0; left: 0;
  height: 100%; width: 100%;
  background: linear-gradient(var(--angle), var(--primary-color), var(--secondary-color));
`
