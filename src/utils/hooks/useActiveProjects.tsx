import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { projectName } from "../../Containers"

type sectionType = projectName | 'reset'

export const useActiveProjects = () => {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<sectionType>('reset')

  const getActivePage = useCallback((): sectionType => {
    // const pathList = router.asPath.split('#')
    const pathList = router.query['project']

    return pathList ? pathList as projectName : 'reset'

    // return pathList.length > 1 ? pathList[1] as projectName : 'reset'
  }, [router])

  useEffect(() => {
    const selectedPage = getActivePage()
    setActiveSection(selectedPage)
  }, [getActivePage])

  return { activeSection }
}
