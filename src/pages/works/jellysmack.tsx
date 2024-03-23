import { NextPage } from "next";
import { JellySmackPortfolio } from "../../Projects";
import { Navbar } from "../../Containers";

const Page:NextPage = () => {
  return (
    <>
      <Navbar type="projects" mode="light" />
      <JellySmackPortfolio />
    </>
  )
}

export default Page
