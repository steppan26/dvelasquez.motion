import { client } from "@/Utils/sanity/client"
import { getNavData } from "@/Utils/sanity/commands"
import { PageTitle } from '@/Utils/sanity/types'

interface Props {
  pageTitle: PageTitle[]
}

export default function Home(props: Props) {
  const pageHeader = props.pageTitle[0]

  return (
    <>
    <h1 className="fw-thin text-danger text-center mt-4">
      {pageHeader.text}
      <small className='text-body-secondary ms-2 fs-3 fw-light'>{pageHeader.subText}</small>
      </h1>
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
