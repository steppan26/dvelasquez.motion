import { NextPage } from "next";
import { LandingMobile, ProjectsShowcaseBlocks } from "../../Containers";
import styled from "styled-components";
import Head from "next/head";
import { Sizes } from "../../Assets";

const Index:NextPage = () => {
  return(
    <>
    <Head>
      <title>D.Velasquez | Works</title>
    </Head>
    <Main>
      <ProjectsShowcaseBlocks />
    </Main>
    </>
  )
}

export default Index

const Main = styled.main`
  width: max-content;
  height: max-content;
  background-color: var(--clr-bg-projects);
`
