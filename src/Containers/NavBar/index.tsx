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

  // useEffect(() => {
  //   if(typeof window == 'undefined' || !navRef.current) return

  //   const showReelSection = document.getElementById('mainContainer')
  //   const observer = new IntersectionObserver(handleOpacity, { root: window.document })
  //   observer.observe(showReelSection as Element)
  // }, [])

  // const handleOpacity = (e: any) => {
  //   console.info("INTERCEPTING", e)
  // }

  return(
    <Nav ref={navRef} isLanding={isLanding}>
      { isLanding ? <AnimatedIcon /> : <AnimatedLogo /> }
      <MenuWrapper onMouseLeave={() => setIsOpen(false)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav<{isLanding?: boolean}>`
  z-index: 999;
  position: ${p => p.isLanding ? 'absolute' : 'sticky'};
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  background-color: ${p => !p.isLanding && p.theme.backgroundPrimary + 'f0'};
  padding: 1rem 53px 0;
  box-shadow: 0 6px 10px 0 ${p => p.isLanding ? 'transparent' : p.theme.textPrimary + '10'};
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
