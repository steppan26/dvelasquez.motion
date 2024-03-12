import { NextPage } from "next";
import { ProjectsShowcaseBlocks } from "../../Containers";
import styled from "styled-components";

const Index:NextPage = () => {
  return(
    <Main>
      <ProjectsShowcaseBlocks />
    </Main>
  )
}

export default Index

const Main = styled.main`
  height: max-content;
  background-color: var(--clr-bg-projects);
`
