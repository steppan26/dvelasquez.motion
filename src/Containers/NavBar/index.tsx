import { LandingNavbar } from "./landing"
import { ProjectsNavbar } from "./projects"
import { ShowcaseNavbar } from "./showcase"

interface Props {
  type: NavBarType
}

type NavBarType = 'landing' | 'showcase' | 'projects'

export const Navbar:React.FC<Props> = ({ type }) => {
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
}
