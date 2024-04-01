import styled, { CSSProperties } from "styled-components"
import { LandingNavbar } from "./landing"
import { NavMobile } from "./mobile"
import { ProjectsNavbar } from "./projects"
import { ShowcaseNavbar } from "./showcase"
import { Sizes } from "../../Assets"

interface Props {
  type: NavBarType
  mode: 'light' | 'dark'
  isProjects?: boolean
}

type NavBarType = 'landing' | 'showcase' | 'projects' | 'mobile'

export const Navbar:React.FC<Props> = ({ type, mode, isProjects }) => {
  return (
    <NavSelector data-isprojects={isProjects} >
      <NavMobile mode={mode} />
      { type === 'landing' && <LandingNavbar /> }
      { type === 'projects' && <ProjectsNavbar mode={mode} /> }
      { type === 'showcase' && <ShowcaseNavbar mode={mode} /> }
    </NavSelector>
  )
}


const NavSelector = styled.div`
  z-index: 999;

  &[data-isprojects='true'] {
    --clr-bg-main: var(--clr-bg-projects);
  }

  &:has(>*[data-issticky='true']) {
    position: sticky;
      top: 0;
  }

  &>* {
    display: flex;

    &:first-child {
      display: none;
    }
  }

  @media (max-width: ${Sizes.small}) {
    &>* {
    display: none;

    &:first-child {
      display: flex;
    }
  }
  }
`
