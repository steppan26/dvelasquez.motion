import Image from "next/image"
import styled from "styled-components"
import { Sizes, socialsIcons } from "../Assets"
import { InternalLink } from "./footerLink"

const SocialLinks = {
  instagram: 'https://www.instagram.com/dvelasquez_art/',
  dribble: 'https://dribbble.com/dvelasquez16',
  youtube: 'https://www.youtube.com/@dvelasquez.motion',
  linkedin: 'https://www.linkedin.com/in/velazquezdaniela/'
}


export const FooterContactSection:React.FC = () => {
  const { Instagram, Dribbble, Linkedin, Youtube } = socialsIcons

  return(
    <>
      <Container>
          <MiddleSection>
            <MainImage>
              <Image
              src="https://res.cloudinary.com/dtlyxry6z/image/upload/v1712605428/Home/Let_s_talk_n1lwj2.gif"
              alt="animated text"
              width={832}
              height={207}
              layout='responsive'
              />
            </MainImage>
          </MiddleSection>
      </Container>
      <LinksWrapper>
        <SocialsWrapper>
          <InternalLink href={SocialLinks.instagram} target="_blank" >
            <Instagram />
          </InternalLink>
          <InternalLink href={SocialLinks.dribble} target="_blank"  >
            <Dribbble />
          </InternalLink>
          <InternalLink href={SocialLinks.youtube} target="_blank" >
            <Youtube />
          </InternalLink>
          <InternalLink href={SocialLinks.linkedin} target="_blank" >
            <Linkedin />
          </InternalLink>
        </SocialsWrapper>
      </LinksWrapper>
    </>
  )
}

const Container = styled.div`
  overflow: hidden;
  grid-area: image;
`

const SocialsWrapper = styled.div`
  box-sizing: content-box;
  display: flex;
    gap: 0.8rem;
  margin-top: 0.5rem;
  height: 24px;
  padding-block: 0.5rem;

  &>* {
    margin-block: 0;
    line-height: unset;
    font-size: unset !important;
    height: 100%;
    overflow: visible;
    transition: ease all 420ms;

    svg {
      width: auto;
      max-width: 100%;
      height: 100%;
    }

    &::after {
      content: unset !important;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.15);
      svg *{
        fill: #FFD340;
      }
    }
  }

  @media (max-width: ${Sizes.small}) {
    height: 15px;
    gap: 1rem;
  }
`

const MiddleSection = styled.div`
  position: relative;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  &>img {
    max-width: 100%;
  }

  @media (max-width: ${Sizes.small}) {

  }
`

const LinksWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  grid-area: socials;
`

const MainImage = styled.div`
  --base-size: 45vw;

  position: relative;
  display: flex;
    justify-content: center;
  width: var(--base-size);
  height: calc(0.25 * var(--base-size));

  img {
    flex: 0 1 100%;
    max-height: 100%;
    max-width: 100%;
  }

  @media (max-width: ${Sizes.small}) {
    --base-size: 81vw;
  }
`
