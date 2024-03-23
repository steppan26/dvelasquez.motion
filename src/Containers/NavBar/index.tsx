import styled from "styled-components"
import { useIsMobileView } from "../../utils/hooks"
import { LandingNavbar } from "./landing"
import { NavMobile } from "./mobile"
import { ProjectsNavbar } from "./projects"
import { ShowcaseNavbar } from "./showcase"
import { Sizes } from "../../Assets"
import { useCallback } from "react"

interface Props {
  type: NavBarType
  mode: 'light' | 'dark'
}

type NavBarType = 'landing' | 'showcase' | 'projects' | 'mobile'

export const Navbar:React.FC<Props> = ({ type, mode }) => {
  const Nav:React.FC = useCallback(() => {
    switch (type) {
      case 'landing':
        return <LandingNavbar />

      case 'projects':
        return <ProjectsNavbar />

      case 'showcase':
        return <ShowcaseNavbar />

      default:
        return <></>
    }
  }, [type])

  return (
    <NavSelector >
        <NavMobile mode={mode} />
        <ProjectsNavbar />
      </NavSelector>
  )
}


const NavSelector = styled.div`
  z-index: 999;

  #navbarProjects{
    position: absolute;
    display: flex;

    @media (max-width: ${Sizes.small}) {
      display: none;
    }
  }

  #navbarMobile{
    display: none;

    @media (max-width: ${Sizes.small}) {
      display: flex;
    }
  }
`
