import { useIsMobileView } from "../../utils/hooks"
import { LandingNavbar } from "./landing"
import { NavMobile } from "./mobile"
import { ProjectsNavbar } from "./projects"
import { ShowcaseNavbar } from "./showcase"

interface Props { type: NavBarType }

type NavBarType = 'landing' | 'showcase' | 'projects' | 'mobile'

export const Navbar:React.FC<Props> = ({ type }) => {
  const { isMobileView } = useIsMobileView()
  if(isMobileView) return <NavMobile mode="dark" />

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
