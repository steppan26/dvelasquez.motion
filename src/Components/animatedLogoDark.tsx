import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { Sizes } from "../Assets";
import { supportsHEVCAlpha } from "../utils/helpers";
import { useRouter } from "next/router";
import { LoopingVideo } from ".";


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
        autoPlay
        playsInline
        loop
        muted
        controls={false}
        controlsList="nodownload noremoteplayback"
        preload="auto"
        poster={"https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650516/logos/text_wine_wyshmp.gif"}
        >
          <source src="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711650516/logos/text_wine_djaujr.webm" type="video/webm" />
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
  background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650516/logos/text_wine_wyshmp.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;
`
