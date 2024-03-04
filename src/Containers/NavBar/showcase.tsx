import { useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { AnimatedLogo } from "../../Components";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";


export const ShowcaseNavbar:React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const timeout = useRef<NodeJS.Timeout>()
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef}>
      <AnimatedLogo />
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav<{islanding?: boolean}>`
  z-index: 999;
  position: sticky;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  background-color: ${p => p.theme.backgroundPrimary + 'f0'};
  padding: 1rem 3vw 0;

  .active {
    text-decoration: underline;

    p { font-weight: ${p => p.islanding ? 600 : 400}; }
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
