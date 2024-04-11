import { NextPage } from "next"
import styled from "styled-components"
import { Text } from "../../Components/styledComponents"
import { AboutDesktop, Footer, Navbar } from "../../Containers"
import Image from "next/image"
import PrimaryImage from '/public/about/dani_main.png'
import GalleryImage00 from '/public/about/gallery_1.png'
import GalleryImage01 from '/public/about/gallery_2.png'
import GalleryImage02 from '/public/about/gallery_3.png'
import GalleryImage03 from '/public/about/gallery_4.png'
import GalleryImage04 from '/public/about/gallery_5.png'
import { Sizes } from "../../Assets"
import Head from "next/head"
import { Calendly } from "../../Components"
import { useEffect, useRef } from "react"
import { useRouter } from "next/router"

const Index:NextPage = () => {
  return (
    <>
    <Head>
      <title>D.Velasquez | about</title>
      <meta name='description' content="Who is Daniela Velasquez?" />
    </Head>
    <Main>
      <AboutDesktop />
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
    padding-inline: 3vw;
  }
`
