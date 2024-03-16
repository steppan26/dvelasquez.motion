import Image from "next/image"
import styled from "styled-components"
import { ArrowLong, Sizes } from "../Assets"
import LogoImage from '/public/lets_talk.png'
import Link from "next/link"
import InstagramIcon from '/public/icons/instagram.png'
import LinkedInIcon from '/public/icons/linkedin.png'
import GlobeIcon from '/public/icons/globe.png'
import YoutubeIcon from '/public/icons/youtube.png'
import { useCallback, useMemo } from "react"
import { useRouter } from "next/router"


export const FooterLetsTalk:React.FC = () => {
  const router =  useRouter()

  const getCurrentProject = useCallback((): string => {
    const currentProjectList = router.asPath.split('#')
    if(currentProjectList.length < 2) return "root"

    return currentProjectList[1]
  }, [router])

  const nextLink: string = useMemo(() => {
    const currentPath = router.asPath
    console.info(currentPath)

    if(['/', '/about'].includes(currentPath)){
      return '/works'
    }

    const currentProject = getCurrentProject()
    // console.info(currentProject)
    const mapper: any = {
      root: 'jellysmack',
      jellysmack: 'cpms',
      cpms: 'motionSecrets',
      motionSecrets: 'mysteria',
      mysteria: 'jellysmack'
    }
    return "/works#" + mapper[currentProject]
  }, [router, getCurrentProject])

  return(
    <Container>
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
      <Logo src={LogoImage} alt="Main Logo" />
      <NextWrapper href={nextLink ?? "/"}>
        {nextLink === '/works' ? "View Projects" : "Next Project"}
        <ArrowWrapper>
          <ArrowLong />
        </ArrowWrapper>
      </NextWrapper>
    </Container>
  )
}

const Container = styled.footer`
  --footer-color: #F3E4D9;

  display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 16dvh 5.7vw;
  width: 100%;
  background-color: var(--clr-bg-secondary);
  box-shadow: inset 0px 4px 20px ${p => p.theme.textPrimary}4c;
  font-family: var(--font-family-regular);

  @media (max-width: ${Sizes.small}) {
    flex-direction: column;
  }
`

const Logo = styled(Image)`
  width: 33vw;
  height: auto;
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
  }
`
