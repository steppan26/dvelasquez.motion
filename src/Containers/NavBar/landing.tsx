import { useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { AnimatedIcon } from "../../Components";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";


export const LandingNavbar:React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef}>
      <AnimatedIcon />
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <MenuItems isOpen={isOpen} hideEmail />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  --nav-main-color: var(--clr-text-main);

  z-index: 999;
  position: absolute;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  padding: 1rem 3vw 0;
`

const MenuWrapper = styled.div`
  display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  padding: 1rem;
  gap: 3px;

  @media (max-width: ${Sizes.small}) {
    gap: 5px;
  }
`
