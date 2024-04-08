import { NextPage } from "next"
import styled from "styled-components"
import { Text } from "../../Components/styledComponents"
import { Footer, Navbar } from "../../Containers"
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
  const calendarWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if(!calendarWrapperRef.current) return

    console.info(router.asPath, router.asPath.includes('#book'))
    if(router.asPath.includes('#book')) {
      console.info('scrolling to')
      calendarWrapperRef.current.scrollTo({ behavior: 'instant' })
    }
  }, [])

  return (
    <>
    <Head>
      <title>D.Velasquez | about</title>
      <meta name='description' content="Who is Daniela Velasquez?" />
    </Head>
    <Main>
      <Navbar type="showcase" mode="dark" />
      <Wrapper>
        <HeaderText >Hola!</HeaderText>
        <Picture>
          <Image
            src={PrimaryImage}
            alt="picture of Daniela"
            layout="responsive"
            width={100}
            height={100}
             />
        </Picture>
        <MainText>
          <TextBlock>
            <span>I&apos;m Daniela</span>, an Art Director & Motion Designer with a boundless passion for design and a love for visual storytelling. I speak three languages: Spanish, English, and French. For the past decade, I&apos;ve specialized in content creation, brand communication, and 2D animation.
          </TextBlock>
          <TextBlock>
            I was born in Colombia to an artist (painter and musician) and a communication strategist. Therefore, art and communication have always been integral parts of my universe. Paint and PowerPoint were my happy childhood playground. Since then, my curiosity and interest in color, form, aesthetics, movement, communication, and technology have only grown.
          </TextBlock>
          <TextBlock>
            After an unexpected turn of events, I ended up in France at age 18. There, I obtained a master&apos;s degree in Art Direction and Motion Design from e-artsup school in Paris. I&apos;ve had the opportunity to work in various environments, ranging from established design agencies like TBWA to radio stations like RFM. Most recently, I worked at Jellysmack—a startup that has evolved into a multinational corporation, collaborating with some of the most influential content creators and brands.
          </TextBlock>
          <TextBlock>
            Perpetually curious, an animal lover, and a globe explorer, I am passionate about art in all its forms, especially fashion, interior design, and personal branding.
          </TextBlock>
          <TextBlock>
            Today, my mission is to help you communicate your ideas and your brand in the most effective, authentic way. By utilizing design elements such as composition, colors, typography, and animation effectively, I aim to evoke emotions, sensations, and ultimately, create something unique together to tell your story.
          </TextBlock>
        </MainText>
        <Gallery>
          <Image
            src={GalleryImage00}
            alt="picture of Daniela"
            layout="responsive"
            width={100}
            height={100}

             />
          <Image
            src={GalleryImage01}
            alt="picture of Daniela"
            layout="responsive"
            width={100}
            height={100}

             />
          <Image
            src={GalleryImage02}
            alt="picture of Daniela"
            layout="responsive"
            width={100}
            height={100}
             />
          <Image
            src={GalleryImage03}
            alt="picture of Daniela"
            layout="responsive"
            width={100}
            height={100}

             />
          <Image
            src={GalleryImage04}
            alt="picture of Daniela"
            layout="responsive"
            width={100}
            height={100}

             />
        </Gallery>
      </Wrapper>
      <div ref={calendarWrapperRef}>
        <Calendly />
      </div>
      <Footer
        leftLink={{ text: "Works", href: "/projects" }}
        rightLink={{ text: "Home", href: "/" }}
        />
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

const Wrapper = styled.div`
  position: relative;
  display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 5rem auto;
    grid-template-areas: '. header .''picture text gallery';
    align-items: start;
    grid-gap: 2rem 5vw;
  margin-top: 10dvh;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0;
  }
`

const HeaderText = styled.h2`
  grid-area: header;
  font-family: var(--font-family-wide);
  font-size: 5rem;
  font-weight: 100;
  font-style: italic;
  margin-block: 0;
  margin-left: -2rem;
  color: var(--clr-green);

  @media (max-width: ${Sizes.small}) {
    align-self: center;
    margin-left: 2rem;
    flex: 0 0 30%;
  }
`

const MainText = styled.article`
  grid-area: text;

  @media (max-width: ${Sizes.small}) {
    flex: 1 0 100%;
    padding-inline: 5vw;
  }
`

const TextBlock = styled(Text)`
  font-family: var(--font-family-wide);
  font-size: 1.25rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  text-align: left;


  font-family: var(--font-family-wide);
  font-size: 1.25rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  text-align: left;


  span {
    color: var(--clr-bg-secondary);
  }

  @media (max-width: ${Sizes.small}) {
    /* text-align: center; */
  }
`

const Gallery = styled.div`
  position: relative;
  grid-area: gallery;
  padding-right: 5vw;
  width: 20vw;
  margin-bottom: 10dvh;

  &>img {
    &:nth-child(1) {
      transform: rotate(8.5deg);
    }
    &:nth-child(2) {
      transform: rotate(14.3deg);
    }
    &:nth-child(3) {
      transform: rotate(-10.6deg);
    }
    &:nth-child(4) {
      transform: rotate(2.2deg);
    }
    &:nth-child(5) {
      transform: rotate(18.4deg);
    }
  }

  @media (max-width: ${Sizes.small}) {
    position: absolute;
    top: 20dvh;
    justify-self: end;
    opacity: 0.15;
    margin-left: 40vw;
    filter: saturate(0.6);
  }
`

const Picture = styled.div`
  position: relative;
  width: 15vw;
  grid-area: picture;
  align-self: start;
  transform-origin: bottom right;
  transform: rotate(-13.61deg) scale(1.1);
  height: max-content;

  @media (max-width: ${Sizes.small}) {
    flex: 0 0 10%;
    max-width: 20vw;
    margin-bottom: -10dvh;
    transform: rotate(-13.61deg) scale(0.85) translate(-50%, -50%);
  }
`
