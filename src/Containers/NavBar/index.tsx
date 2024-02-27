import { useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { AnimatedIcon, AnimatedLogo } from "../../Components";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";

interface Props {
  isLanding?: boolean
}

export const Navbar:React.FC<Props> = ({ isLanding }) => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  return(
    <Nav ref={navRef} islanding={isLanding}>
      { isLanding ? <AnimatedIcon /> : <AnimatedLogo /> }
      <MenuWrapper onMouseLeave={() => setIsOpen(false)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav<{islanding?: boolean}>`
  z-index: 999;
  position: ${p => p.islanding ? 'absolute' : 'sticky'};
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  background-color: ${p => !p.islanding && p.theme.backgroundPrimary + 'f0'};
  padding: 1rem 3vw 0;

  .active {
    color: ${p => p.islanding ? 'inherit' : p.theme.backgroundSecondary};
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
