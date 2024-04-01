import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { animated } from "react-spring";
import dynamic from "next/dynamic";
import { useIsMobileView, useNavMode } from "../../utils/hooks";
import { useRouter } from "next/router";

interface Props {
  mode: 'light' | 'dark'
}

export const ProjectsNavbar:React.FC<Props> = ({ mode }) => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()
  const { isMobileView } = useIsMobileView()
  const { displayBg, navMode } = useNavMode()

  const LogoLight = dynamic(() => import('../../Components/animatedLogoLight').then(comp => comp.AnimatedLogoLight), {ssr: false})
  const LogoDark = dynamic(() => import('../../Components/animatedLogoDark').then(comp => comp.AnimatedLogoDark), {ssr: false})

  const displayLightNavbar = useMemo(() => isMobileView || mode === 'light', [isMobileView, mode])

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef} data-display-bg={displayBg} data-islight={displayLightNavbar} id="navbarProjects" data-issticky="true">
      {displayLightNavbar
      ? <LogoLight />
      : <LogoDark />
      }
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled(animated.nav)`
  --nav-main-color: var(--clr-text-main);
  --nav-main-bg-color: var(--clr-bg-main);

  &[data-islight='true'] {
    --nav-main-color: var(--clr-bg-main);
    --nav-main-bg-color: var(--clr-bg-main);
  }

  &[data-display-bg='false'] {
    --nav-main-bg-color: transparent;
  }

  z-index: 999;
  position: fixed;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
    max-width: 100%;
  height: var(--nav-height);
  padding: 1rem 3vw 0;
  overflow: hidden;
  background-color: var(--nav-main-bg-color);

  transition: ease-out all 120ms;

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
