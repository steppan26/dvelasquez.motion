import { Landing } from "../Containers"
import { client } from "../Utils/sanity/client"
import { getNavData } from "../Utils/sanity/commands"
import { PageTitle } from '../Utils/sanity/types'

interface Props {
  pageTitle: PageTitle[]
}

export default function Home(props: Props) {
  const pageHeader = props.pageTitle[0]

  return (
    <>
    <Landing />
    </>
  )
}

export const getStaticProps = async () => {
  const [navbarData, pageTitle] = await Promise.all([
    getNavData(),
    client.fetch<PageTitle>(`*[_type == "pageTitle"]`)
  ])
  return({
    props: {
      navbarData,
      pageTitle
    },
    revalidate: 5
  })
}
