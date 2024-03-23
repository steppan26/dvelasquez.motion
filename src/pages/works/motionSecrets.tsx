import { NextPage } from "next";
import { MotionSecretsProject } from "../../Projects";
import { Navbar } from "../../Containers";

const Page:NextPage = () => {
  return (
    <>
      <Navbar type="projects" mode="dark" />
      <MotionSecretsProject />
    </>
  )
}

export default Page
