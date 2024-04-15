import { useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { AnimatedLogoDark } from "../../Components";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";

interface Props {
  mode: 'light' | 'dark'
}

export const ShowcaseNavbar:React.FC<Props> = ({ mode }) => {
  const navRef = useRef<HTMLElement>(null)
  const timeout = useRef<NodeJS.Timeout>()
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef} data-issticky="true">
      <AnimatedLogoDark />
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav<{islanding?: boolean}>`
  --nav-main-color: var(--clr-text-main);

  z-index: 999;
  position: relative;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
    max-width: 100%;
  height: var(--nav-height);
  background-color: ${p => p.theme.backgroundPrimary};
  padding: 1rem 3vw 0;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  padding: 1rem;
  gap: 3px;

  @media (max-width: ${Sizes.small}) {
    gap: 5px;
  }
`
