import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { Sizes } from "../Assets";
import { isSafari } from "../utils/helpers";
import { useRouter } from "next/router";
import { LoopingVideo } from ".";

export const AnimatedLogoLight:React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if(typeof window == 'undefined' || !wrapperRef.current || !videoRef.current) return

    if(isSafari()) {
      setDisplayVideo(false)
    }

    const video = videoRef.current
    video.addEventListener('ended', () => {
      video.pause()
      video.currentTime = video.duration
    })
  }, [])

  const loadHomePage = () => router.push('/', '/', { scroll: true })

  return(
    <Wrapper ref={wrapperRef} onClick={loadHomePage}>
      {displayVideo
      ? <LoopingVideo videoPath="logos/logo_text_white_1.webm" />
      : <AnimatedGif />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --logo-size: 12.203704vw;

  z-index: 999;
  position: relative;
  height: max-content;
  width: max-content;
  width: var(--logo-size);

  @media (max-width: ${Sizes.small}){
    --logo-size: 12vw;
  }
`

const AnimatedGif = styled.div`
  width: var(--logo-size);
  height: calc(var(--logo-size) * 0.35555556);
  background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650514/logos/text_light_ddcgmp.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;
`
