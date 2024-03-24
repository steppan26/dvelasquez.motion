import { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import InstagramIcon from '/public/icons/instagram.png'
import LinkedInIcon from '/public/icons/linkedin.png'
import GlobeIcon from '/public/icons/globe.png'
import YoutubeIcon from '/public/icons/youtube.png'
import LetsTalkImage from '/public/lets_talk_anim.png'
import { InternalLink } from "./footerLink"


export const FooterContactSection:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setIsOpen(false), [])

  return(
    <Container>
        <MiddleSection>
          <Slider>
            <Switcher data-isopen={isOpen}>
              <Image src={LetsTalkImage} alt="animated text" onClick={() => setIsOpen(true)} />
              <HiddenSection>
                <p>Experience the thrill of motion as we turn your visions into breathtaking reality!</p>
                <p>Let&apos;s make magic happen! ✨🔮</p>
              </HiddenSection>
            </Switcher>
          </Slider>
          <LinksWrapper>
          <EmailLink href="mailto:dvelasquez.motion@gmail.com">dvelasquez.motion@gmail.com</EmailLink>
            <SocialsWrapper>
              <InternalLink href="https://www.instagram.com/dvelasquez-motion" target="_blank">
                <Image src={InstagramIcon} alt="instagram icon" />
              </InternalLink>
              <InternalLink href="#" target="_blank" >
                <Image src={GlobeIcon} alt="globe icon" />
              </InternalLink>
              <InternalLink href="https://www.youtube.com/@dvelasquez.motion/featured" target="_blank" >
                <Image src={YoutubeIcon} alt="youtube icon" />
              </InternalLink>
              <InternalLink href="https://www.linkedin.com/in/velazquezdaniela/" target="_blank" >
                <Image src={LinkedInIcon} alt="linkedin icon" />
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

  transform: translateY(0);
  transition: ease transform 300ms;

  &[data-isopen='true'] {
    transform: translateY(-50%);
  }
`

const SocialsWrapper = styled.div`
  display: flex;
    gap: 1rem;
  margin-top: 0.5rem;

  &>* {
    margin-block: 0;
    line-height: unset;
    font-size: unset !important;
    height: max-content;
    transition: ease all 420ms;

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
  font-weight: 300;
  color: var(--clr-bg-main);
  padding-inline: 5rem;

  a {
    font-size: larger;
    color: var(--clr-text-main);
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
