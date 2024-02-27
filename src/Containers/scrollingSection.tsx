import { CSSProperties, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

interface Props {
  backgroundImageUrl: string
  id: string
  children?: any
  style: any
}

export const ScrollingSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, id, style } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSelected, setIsSelected] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    if(!window) return

    window.addEventListener('selectProject', _handleSelect)

    return () => window.removeEventListener('selectProject', _handleSelect)
  }, [])

  useEffect(() => console.info('isVisible', isVisible), [isVisible])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  const notifyListeners = useCallback(() => {
    const event = new CustomEvent('selectProject', {
      bubbles: true,
      detail: { id }
    })
    window.dispatchEvent(event)
  }, [id])

  useEffect(() => {
    if(!isSelected) return

    notifyListeners()
  }, [isSelected, notifyListeners])

  const _handleSelect = (e: any) => {
    setVisible(e.detail.id === id || e.detail.id === 'reset')
    setIsSelected(e.detail.id === id)
  }

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
    onClick={() => setIsSelected(true)}
    data-projectid
    ref={ref || containerRef}
    style={{...style, ...containerSpring}}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      {children}
      <Overlay className='overlay' style={{...overlaySpring}} />
    </Container>
  )
})

ScrollingSection.displayName = "ScrollingSection"

const Container = styled(animated.div)`
  cursor: pointer;
  flex-shrink: 1;
  flex-grow: 0;
  flex-basis: 25%;
  position: relative;
  height: 100vh;
  width: max-content;
  overflow: auto;

  &>.snap-to {
    scroll-snap-align: start;
  }
`

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0; left: 0;
  height: 100%; width: 100%;
  background: linear-gradient(var(--angle), var(--primary-color), var(--secondary-color));
`
