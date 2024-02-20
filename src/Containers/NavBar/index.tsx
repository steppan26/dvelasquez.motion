import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { MenuItems } from "./menuItems";
import { ToggleButton } from "./toggleButton";
import { Sizes } from "../../Assets";
import { AnimatedLogo } from "../../Components";

export const Navbar:React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if(typeof window == 'undefined' || !navRef.current) return

    const observer = new IntersectionObserver(handleOpacity, { root: navRef.current })
    const showReelSection = document.getElementById('showReelSection')
    observer.observe(showReelSection as Element)
  }, [])

  const handleOpacity = (e: any) => {
    console.info("INTERCEPTING", e)
  }

  return(
    <Nav ref={navRef}>
      <AnimatedLogo />
      <MenuWrapper onMouseLeave={() => setIsOpen(false)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  z-index: 999;
  position: sticky;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  background-color: ${p => p.theme.backgroundPrimary}f0;
  padding-inline: 53px;
  /* padding-top: 2rem; */
  box-shadow: 0 6px 10px 0 ${p => p.theme.textPrimary}10;
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;

  @media (max-width: ${Sizes.small}) {
    gap: 5px;
  }
`
