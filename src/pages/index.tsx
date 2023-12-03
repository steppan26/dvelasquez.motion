import { client } from "@/utils/sanity/client"
import { PageTitle } from '@/utils/sanity/types'
import { useEffect } from "react"

interface Props {
  pageTitle: string
}

export default function Home(props: Props) {
  console.info('props', props)

  return (
    <>
    <h1 className="fw-thin text-danger text-center mt-4">
      d.Velasquez
      <small className='text-body-secondary fs-3 fw-light'>The ultimate motion designer</small>
      </h1>
    </>
  )
}

export const getServerSideProps = async () => {
  const pageTitle = await (await client.fetch<PageTitle>(`*[_type == "pageTitle"]`)).text

  return({
    props: {
      pageTitle: pageTitle ?? null
    }
  })
}
