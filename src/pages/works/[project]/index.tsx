import { NextPage } from "next";
import { ProjectData } from "../../../Containers";
import { CPMSProject, JellySmackPortfolio, MotionSecretsProject, MysteriaProject } from "../../../Projects";
import goBiggerLogo from '/public/projects/go_bigger.jpg'
import motionSecretsLogo from '/public/projects/follow_me.jpg'
import laraLogo from '/public/projects/girl_called_sara.jpg'
import rokuLogo from '/public/projects/jelly_Roku.jpg'
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";


const ProjectsListData: ProjectData[] = [
  {
    id: 'jellysmack',
    name: "Jellysmack",
    imageUrl: goBiggerLogo.src,
    childComponent: <JellySmackPortfolio />,
    isLightNavBar: true
  },
  {
    id: 'cpms',
    name: "CPMS",
    imageUrl: laraLogo.src,
    childComponent: <CPMSProject />
  },
  {
    id: 'motionSecrets',
    name: "Motion Secrets",
    imageUrl: motionSecretsLogo.src,
    childComponent: <MotionSecretsProject />
  },
  {
    id: 'mysteria',
    name: "Roku",
    imageUrl: rokuLogo.src,
    childComponent: <MysteriaProject />,
    isLightNavBar: true
  },
]


const Page:NextPage = () => {
  const router = useRouter()

  useEffect(() => console.info(router), [router])

  const currentPage = useMemo(() => {
    return <></>
    switch (router.pathname) {
      case "":

        break;

      default:
        break;
    }
  },[])

  return(
    <></>
  )
}

export default Page
