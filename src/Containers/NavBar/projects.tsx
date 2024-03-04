import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { AnimatedLogo } from "../../Components";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { animated, useSpring } from "react-spring";

export const ProjectsNavbar:React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(true)
  const timeout = useRef<NodeJS.Timeout>()
  const [isVisible, setIsVisible] = useState(false)

  const heightSpring = useSpring({
    from: { top: '110%' },
    to: { top: isVisible ? '0' : '110%' },
    config: {
      mass: 1.4,
      friction: 25,
      tension: 250
    }
  })

  useEffect(() => {
    if(typeof window == 'undefined') return

    window.addEventListener('shouldDisplayNavBar', handleEvent)

    return () => window.removeEventListener('shouldDisplayNavBar', handleEvent)
  }, [])

  const handleEvent = (e: any) => {
    const { displayNavBar } = e.detail
    setIsVisible(displayNavBar)
  }

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef} style={heightSpring}>
      <AnimatedLogo />
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled(animated.nav)`
  z-index: 999;
  position: absolute;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  padding: 1rem 3vw 0;
  overflow: hidden;

  .active {
    color: inherit;
    text-decoration: underline;

    p { font-weight: 600; }
  }
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
    justify-content: center;
    align-items: center;
  padding: 1rem;
  gap: 3px;

  @media (max-width: ${Sizes.small}) {
    gap: 5px;
  }
`
