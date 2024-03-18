import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { AnimatedIcon } from "../../Components";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { MobileMenu } from "./mobileMenu";
import { useRouter } from "next/router";


export const NavMobile:React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu)

    return () => router.events.off('routeChangeStart', closeMenu)
  }, [])

  const closeMenu = () => setIsOpen(false)

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef} className={isOpen ? "open" : ""}>
      <AnimatedIcon />
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MobileMenu isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
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
  padding: 0 3vw;
  filter: invert(1);

  &.open {
    filter: invert(0);

    #mobileMenuBlock {
      filter: invert(0);
    }
  }
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
    justify-content: center;
    align-items: center;
  padding: 1rem;
  gap: 5px;

  #mobileMenuBlock {
    filter: invert(1);
  }
`
