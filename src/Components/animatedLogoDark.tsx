import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { Sizes } from "../Assets";
import { isSafari } from "../utils/helpers";
import { useRouter } from "next/router";
import { LoopingVideo } from ".";


export const AnimatedLogoDark:React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if(typeof window == 'undefined' || !wrapperRef.current) return

    console.info("supportsHEVCAlpha()", isSafari())
    if(isSafari()) {
      setDisplayVideo(false)
    }

    const video = wrapperRef.current.querySelector('video') as HTMLVideoElement
    video.addEventListener('ended', () => {
      video.pause()
      video.currentTime = video.duration
    })
  }, [])

  const loadHomePage = () => router.push('/', '/', { scroll: true })

  return(
    <Wrapper ref={wrapperRef} onClick={loadHomePage}>
      {displayVideo
      ? <LoopingVideo videoPath="logos/text_wine.webm" />
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

  video {
    max-width: 100%;
  }

  @media (max-width: ${Sizes.small}){
    --logo-size: 12vw;
  }
`

const AnimatedGif = styled.div<{ isLight?: boolean }>`
  width: var(--logo-size);
  height: calc(var(--logo-size) * 0.35555556);
  background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650516/logos/text_wine_wyshmp.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;
`
