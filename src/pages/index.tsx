import { client } from "@/Utils/sanity/client"
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
  const pageTitle = await client.fetch<PageTitle>(`*[_type == "pageTitle"]`)

  return({
    props: {
      pageTitle
    },
    revalidate: 5
  })
}
