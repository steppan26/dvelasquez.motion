import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components"
import { AnimatedIcon } from "../../Components";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { MobileMenu } from "./mobileMenu";
import { useRouter } from "next/router";
import Link from "next/link";
import { useNavMode } from "../../utils/hooks";

interface Props {
  mode: 'light' | 'dark'
}

export const NavMobile:React.FC<Props> = ({ mode }) => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()
  const router = useRouter()
  const { displayBg } = useNavMode()

  const displayLightNavbar = useMemo(() => mode === 'light', [mode])

  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu)

    return () => router.events.off('routeChangeStart', closeMenu)
  }, [])

  const closeMenu = () => setIsOpen(false)

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef}  data-display-bg={displayBg} data-islight={displayLightNavbar} className={isOpen ? "open" : ""} id="navbarMobile" data-colormode={mode} >
      <Link href="/" >
        <AnimatedIcon mode={!isOpen && mode === 'light' ? 'light' : 'dark'} />
      </Link>
      <MenuWrapper onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeout.current)}>
        <MobileMenu isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  --nav-main-color: var(--clr-text-main);
  --nav-main-bg-color: var(--clr-bg-main);

  &[data-colormode="light"] {
    --nav-main-color: var(--clr-bg-main);
  }

  &[data-colormode="dark"] {
    --nav-main-color: var(--clr-text-main);
  }

  &[data-display-bg='false'] {
    --nav-main-bg-color: transparent;
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
  background-color: var(--nav-main-bg-color);

  &[data-display-bg='true'] {
    box-shadow: 0 2px 8px rgba(10, 10, 10, 0.1);
  }
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
    justify-content: center;
    align-items: center;
  padding: 1rem;
  gap: 5px;
`
