import { NextPage } from "next";
import { ProjectsShowcaseBlocks } from "../../Containers";
import styled from "styled-components";
import Head from "next/head";

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
  height: max-content;
  background-color: var(--clr-bg-projects);
`
