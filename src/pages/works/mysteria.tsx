import { NextPage } from "next";
import { MysteriaProject } from "../../Projects";
import { Navbar } from "../../Containers";

const Page:NextPage = () => {
  return (
    <>
      <Navbar type="projects" mode="light" />
      <MysteriaProject />
    </>
  )
}

export default Page
