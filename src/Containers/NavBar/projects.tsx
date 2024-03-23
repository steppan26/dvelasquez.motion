import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { animated } from "react-spring";
import dynamic from "next/dynamic";
import { useIsMobileView } from "../../utils/hooks";
import { useRouter } from "next/router";

export const ProjectsNavbar:React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()
  const { isMobileView } = useIsMobileView()
  const router = useRouter()

  const LogoLight = dynamic(() => import('../../Components/animatedLogoLight').then(comp => comp.AnimatedLogoLight), {ssr: false})
  const LogoDark = dynamic(() => import('../../Components/animatedLogoDark').then(comp => comp.AnimatedLogoDark), {ssr: false})

  const displayLightNavbar = useMemo(() => isMobileView || ['/works/jellysmack', '/works/mysteria'].includes(router.asPath), [router, isMobileView])

  useEffect(() => console.info(displayLightNavbar, isMobileView), [displayLightNavbar, isMobileView])

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef} data-islight={displayLightNavbar} id="navbarProjects">
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

  &[data-islight = 'true'] {
    --nav-main-color: var(--clr-bg-main);
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

  @media (max-width: ${Sizes.small}) {
    display: none;
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
