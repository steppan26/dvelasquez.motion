import { NextPage } from "next"
import styled from "styled-components"
import { AboutDesktop, AboutMobile } from "../../Containers"
import { Sizes } from "../../Assets"
import Head from "next/head"
import { useIsMobileView } from "../../utils/hooks"

const Index:NextPage = () => {
  const { isMobileView } = useIsMobileView()

  return (
    <>
    <Head>
      <title>D.Velasquez | about</title>
      <meta name='description' content="Who is Daniela Velasquez?" />
    </Head>
    <Main>
      {isMobileView
      ? <AboutMobile />
      : <AboutDesktop />
      }
    </Main>
    </>
  );
}

export default Index
const Main = styled.main`
  position: relative;

  @media (max-width: ${Sizes.small}) {
    max-width: 100vw;
    overflow: hidden;
  }
`
