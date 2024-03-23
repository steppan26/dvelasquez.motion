import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { AnimatedIcon } from "../../Components";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { MobileMenu } from "./mobileMenu";
import { useRouter } from "next/router";

interface Props {
  mode: 'light' | 'dark'
}

export const NavMobile:React.FC<Props> = ({ mode }) => {
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
    <Nav ref={navRef} className={isOpen ? "open" : ""} id="navbarMobile" data-colormode={mode} >
      {!isOpen || mode === 'light'
        ? <AnimatedIcon mode="light" />
        : <AnimatedIcon />
      }
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MobileMenu isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  --nav-main-color: var(--clr-text-main);

  &[data-colormode="light"] {
    --nav-main-color: var(--clr-bg-main);
  }

  &[data-colormode="dark"] {
    --nav-main-color: var(--clr-text-main);
  }

  &.open {
    --nav-main-color: var(--clr-text-main);
  }

  z-index: 999;
  position: fixed;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  padding: 0 3vw;
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
    justify-content: center;
    align-items: center;
  padding: 1rem;
  gap: 5px;
`
