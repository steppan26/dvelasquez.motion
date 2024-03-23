import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { ArrowLong, Sizes } from "../Assets"
import InstagramIcon from '/public/icons/instagram.png'
import LinkedInIcon from '/public/icons/linkedin.png'
import GlobeIcon from '/public/icons/globe.png'
import YoutubeIcon from '/public/icons/youtube.png'
import { useRouter } from "next/router"
import { FooterContactSection } from "../Components"
import { useScrollToTop } from "../utils/hooks"


export const FooterLetsTalk:React.FC = () => {
  const router =  useRouter()
  const { scrollToTop } = useScrollToTop()

  const nextLink = useMemo((): string => {
    switch (router.asPath) {
      case "/works":
        return "/works/jellysmack"

      case "/works/jellysmack":
        return "/works/cpms"

      case "/works/cpms":
        return "/works/motionSecrets"

      case "/works/motionSecrets":
        return "/works/mysteria"

      case "/works/mysteria":
        return "/works/jellysmack"

      default:
        return "/works"
    }
  }, [router])

  return(
    <Container>
      <BackToTop onClick={() => scrollToTop()} />
      <LinksWrapper>
        <InternalLink scroll href="/">Home</InternalLink>
        <InternalLink scroll href="/works">Works</InternalLink>
        <InternalLink scroll href="/about">About</InternalLink>
        <SocialsWrapper>
          <InternalLink href="https://www.instagram.com/dvelasquez-motion" target="_blank">
            <Image src={InstagramIcon} alt="instagram icon" />
          </InternalLink>
          <Image src={GlobeIcon} alt="globe icon" />
          <Image src={YoutubeIcon} alt="youtube icon" />
          <Image src={LinkedInIcon} alt="linkedin icon" />
        </SocialsWrapper>
      </LinksWrapper>
      <FooterContactSection />
      <NextWrapper href={nextLink}>
        {nextLink === '/works' ? "View Projects" : "Next Project"}
        <BaseArrow>
          <ArrowLong />
        </BaseArrow>
        <ArrowWrapper>
          <ArrowLong />
        </ArrowWrapper>
      </NextWrapper>
    </Container>
  )
}

const Container = styled.footer`
  --footer-color: #F3E4D9;

  position: relative;
  display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 16dvh 5.7vw;
  width: 100%;
  max-width: 100vw;
  background-color: var(--clr-bg-secondary);
  box-shadow: inset 0px 4px 20px ${p => p.theme.textPrimary}4c;
  font-family: var(--font-family-regular);

  @media (max-width: ${Sizes.small}) {
    flex-direction: column-reverse;
    gap: 10dvh;
  }
`

const LinksWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

  @media (max-width: ${Sizes.small}) {
    display: none;
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

    &::after {
      content: unset !important;
    }

    &:hover {
      cursor: pointer;
      transition: ease all 420ms;
      transform: scale(1.15);
    }
  }
`

const ArrowWrapper = styled.div`
  overflow: hidden;

  img {
    transition: ease all 1200ms;
  }
`

const InternalLink = styled(Link)`
  cursor: pointer;
  font-family: var(--font-family-wide);
  font-weight: 100;
  font-style: italic;
  font-size: 2.5rem;
  line-height: 3rem;
  color: var(--footer-color);

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem; left: 0; right: 0;
    background-image: url('/arrow_long.png');
    background-repeat: no-repeat;
    background-position: bottom;
    width: 0;
    height: 35px;
    transition: ease-out 350ms width ;
  }

  &:hover {
    ${ArrowWrapper} img {
      transform: translateX(0);
    }

    &::after {
      width: 100%;
    }
  }
`

const NextWrapper = styled(InternalLink)`
  position: relative;
  display: flex;
    flex-direction: column;

  &::after {
    content: unset;
  }

  ${ArrowWrapper} img {
    transform: translateX(-110%);
    animation-name: fadeIn;
    animation-duration: 100ms;
    animation-iteration-count: 1;
    animation-delay: 1200ms;
    animation-fill-mode: forwards;

    @media (max-width: ${Sizes.small}) {
      transform: translateY(0);
    }
  }

`

const BaseArrow = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  opacity: 1;
  z-index: 5;

  @media (min-width: ${Sizes.small}) {
    opacity: 0.3;
    z-index: unset;
  }
`

const BackToTop = styled.div`
  --size: clamp(55px, 4.8vw, 90px);

  cursor: pointer;
  position: absolute;
  top: 0; right: 11.5vw;
  width: var(--size);
    max-width: 120px;
  height: var(--size);
    max-height: 120px;
  background-image: url('yellow_arrow.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: translateY(-50%) rotate(45deg);
  box-shadow: 0 4px 14px 4px rgba(0, 0, 0, 0.1);

  transition: ease all 260ms;

  &:hover {
    box-shadow: 0 4px 14px 6px rgba(0, 0, 0, 0.15);
  }
`
