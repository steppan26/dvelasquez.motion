import { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import InstagramIcon from '/public/icons/instagram.png'
import LinkedInIcon from '/public/icons/linkedin.png'
import GlobeIcon from '/public/icons/globe.png'
import YoutubeIcon from '/public/icons/youtube.png'
import { InternalLink } from "./footerLink"

const SocialLinks = {
  instagram: 'https://www.instagram.com/dvelasquez_art/',
  dribble: 'https://dribbble.com/dvelasquez16',
  youtube: 'https://www.youtube.com/@dvelasquez.motion',
  linkedin: 'https://www.linkedin.com/in/velazquezdaniela/'
}


export const FooterContactSection:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setIsOpen(false), [])

  return(
    <Container>
        <MiddleSection>
          <Slider>
            <Switcher data-isopen={isOpen}>
              <MainImage>
                <Image
                src="https://res.cloudinary.com/dtlyxry6z/image/upload/v1712605428/Home/Let_s_talk_n1lwj2.gif"
                alt="animated text"
                layout='fill'
                onClick={() => setIsOpen(true)}
                />
              </MainImage>
              <HiddenSection>
                <p>Experience the thrill of motion as we turn your visions into breathtaking reality!</p>
                <p>Let&apos;s make magic happen! ✨🔮</p>
                <EmailLink href="mailto:dvelasquez.motion@gmail.com">dvelasquez.motion@gmail.com</EmailLink>
              </HiddenSection>
            </Switcher>
          </Slider>
          <LinksWrapper>
            <SocialsWrapper>
              <InternalLink href={SocialLinks.instagram} target="_blank" >
                <Image src={InstagramIcon} alt="instagram icon" className="intagram" />
              </InternalLink>
              <InternalLink href={SocialLinks.dribble} target="_blank"  >
                <Image src={GlobeIcon} alt="dribble icon" className="dribble" />
              </InternalLink>
              <InternalLink href={SocialLinks.youtube} target="_blank" >
                <Image src={YoutubeIcon} alt="youtube icon" className="youtube" />
              </InternalLink>
              <InternalLink href={SocialLinks.linkedin} target="_blank" >
                <Image src={LinkedInIcon} alt="linkedin icon" className="linkedin" />
              </InternalLink>
            </SocialsWrapper>
          </LinksWrapper>
        </MiddleSection>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`

const Slider = styled.div`
  height: 27dvh;
  overflow: hidden;
`

const Switcher = styled.div`
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 27dvh 27dvh;
    align-items: center;
    justify-items: center;

  transform: translateY(0);
  transition: ease transform 300ms;

  &[data-isopen='true'] {
    transform: translateY(-50%);
  }
`

const SocialsWrapper = styled.div`
  box-sizing: content-box;
  display: flex;
    gap: 1.4rem;
  margin-top: 0.5rem;
  height: 38px;
  padding-block: 0.5rem;

  &>* {
    margin-block: 0;
    line-height: unset;
    font-size: unset !important;
    height: 100%;
    overflow: visible;
    transition: ease all 420ms;

    img {
      width: auto;
      height: 100%;
    }

    &::after {
      content: unset !important;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
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
`

const LinksWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const HiddenSection = styled.div`
  height: 50%;
  width: 100%;
  font-size: 1.25rem;
  text-align: center;
  font-family: var(--font-family-wide);
  font-style: italic;
  font-weight: 300;
  color: var(--clr-bg-main);
  padding-inline: 5rem;

  a {
    font-size: large;
    text-decoration: underline;
    /* color: var(--clr-text-main); */
  }
`

const EmailLink = styled(InternalLink)`
  font-size: 1.65rem;
  transition: ease-out 420ms all;

  &::after {
    content: unset;
  }

  &:hover {
    transform: scale(1.03);
  }
`

const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
