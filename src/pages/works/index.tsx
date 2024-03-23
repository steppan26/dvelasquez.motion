import { NextPage } from "next";
import { ProjectsList, ProjectsShowcaseBlocks } from "../../Containers";
import styled from "styled-components";
import Head from "next/head";

const Index:NextPage = () => {
  return(
    <>
    <Head>
      <title>D.Velasquez | Works</title>
    </Head>
    <Main>
      <ProjectsList />
    </Main>
    </>
  )
}

export default Index

const Main = styled.main`
  width: max-content;
    max-width: 100%;
  height: max-content;
  background-color: var(--clr-bg-main);
`
