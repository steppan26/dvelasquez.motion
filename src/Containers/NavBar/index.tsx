import { ProjectData } from "../projectsShowcase"
import { LandingNavbar } from "./landing"
import { ProjectsNavbar } from "./projects"
import { ShowcaseNavbar } from "./showcase"

interface Props {
  type: NavBarType
  navData?: ProjectData[]
}

type NavBarType = 'landing' | 'showcase' | 'projects'

export const Navbar:React.FC<Props> = ({ type, navData }) => {
  switch (type) {
    case 'landing':
      return <LandingNavbar />

    case 'projects':
      return <ProjectsNavbar navData={navData as ProjectData[]} />

    case 'showcase':
      return <ShowcaseNavbar />

    default:
      return <></>
  }
}
