import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components"
import { Sizes } from "../../Assets";
import { MenuItems } from "../MenuSimple/menuItems";
import { ToggleButton } from "../MenuSimple/toggleButton";
import { animated, useSpring } from "react-spring";
import { useRouter } from "next/router";
import { ProjectData } from "../projectsShowcase";
import dynamic from "next/dynamic";
import { useActiveProjects } from "../../utils/hooks";

interface Props {
  navData: ProjectData[]
}

export const ProjectsNavbar:React.FC<Props> = ({ navData }) => {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()
  const { activeSection } = useActiveProjects()

  const LogoLight = dynamic(() => import('../../Components/animatedLogoLight').then(comp => comp.AnimatedLogoLight), {ssr: false})
  const LogoDark = dynamic(() => import('../../Components/animatedLogoDark').then(comp => comp.AnimatedLogoDark), {ssr: false})

  const displayLightNavbar = useMemo(() => ['jellysmack', 'mysteria'].includes(activeSection), [activeSection])

  const heightSpring = useSpring({
    from: { opacity: 1 },
    to: { opacity: isVisible ? 1 : 0 },
    config: {
      mass: 1.4,
      friction: 25,
      tension: 250
    }
  })

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setIsOpen(false), 600)
  }

  return(
    <Nav ref={navRef} style={heightSpring} data-islight={displayLightNavbar}>
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
  position: absolute;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 100vw;
  height: var(--nav-height);
  padding: 1rem 3vw 0;
  overflow: hidden;
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
