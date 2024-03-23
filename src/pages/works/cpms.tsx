import { NextPage } from "next";
import { CPMSProject } from "../../Projects";
import { Navbar } from "../../Containers";

const Page:NextPage = () => {
  return (
    <>
      <Navbar type="projects" mode="dark" />
      <CPMSProject />
    </>
  )
}

export default Page
