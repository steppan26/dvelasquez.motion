import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { Sizes } from "../Assets";
// @ts-ignore
import { supportsHEVCAlpha } from "../utils/helpers";
import { useRouter } from "next/router";


export const AnimatedLogoDark:React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if(typeof window == 'undefined' || !wrapperRef.current || !videoRef.current) return

    if(supportsHEVCAlpha()) {
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
      ? <video
          ref={videoRef}
          id="animationVideo"
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          style={{ display: 'block', width: '100%' }}
        >
          <source src="/logos/text_wine.webm" type="video/webm" />
        </video>
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

const AnimatedGif = styled.div<{ isLight?: boolean }>`
  width: var(--logo-size);
  height: calc(var(--logo-size) * 0.35555556);
  background-image: url("/logos/text_wine.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;
`
