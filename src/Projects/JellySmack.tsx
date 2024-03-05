import Image from "next/image"
import styled from "styled-components"
import MainHeaderImage from "../../public/projects/jellysmack/main_header_static.jpg"
import { JellySmackLandingLower } from "../Components"
import { Footer, IntroSection, JellyMessage, PhoneScreenshots, Stickers } from "../Containers"
import JellyBoxImage from '/public/projects/jellysmack/jellybox.png'
import BannerImage from '/public/projects/jellysmack/jelly_thank-you.png'
import { SocialMediaAssets } from "."

const introData = {
  image: JellyBoxImage,
  imageAlt: "Animated icon of the jellysmack logo jumping out of an open box",
  projectText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe.",
  howText: "Through brand expression and visual storytelling I can help daring organisations, ambitious startups and creative individuals craft their story, communicate their ideas and build their tribe."
}

export const JellySmackPortfolio:React.FC = () => {
  return(
    <Container>
      <LandingSection>
        <Image
        src={MainHeaderImage.src}
        alt="The words 'go larger' in big, duplicated over itself"
        width={1728}
        height={1126}
        layout="responsive"
        />
        <JellySmackLandingLower />
      </LandingSection>
      <IntroSection {...introData} />
      <PhoneScreenshots />
      <Stickers />
      <SocialMediaAssets />
      <JellyMessage />
      <Image
        src={BannerImage.src}
        alt="Banner image thanking user for watching"
        width={BannerImage.width}
        height={BannerImage.height}
        layout="responsive"
      />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  --container-padding: 5.3vw;

  cursor: default;
  width: 100vw;
  background-color: var(--clr-bg-main);
`

const LandingSection = styled.div`
  position: relative;
  max-height: 135dvh;
`
