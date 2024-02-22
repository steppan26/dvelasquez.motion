import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../utils/helpers";
import { Sizes } from "../Assets";

export const AnimatedLogo:React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)

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

  const handleClick = () => {
    const main = document.getElementById('mainContainer') as HTMLElement
    main.scrollTo({top: 0, behavior: 'smooth'})
  }

  return(
    <Wrapper ref={wrapperRef} onClick={handleClick}>
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
          <source src="/Logo_Animation_text_wine.webm" type="video/webm" />
        </video>
      : <AnimatedGif />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --logo-size: 16.203704vw;

  z-index: 999;
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
  background-image: url("/Logo_Animation_text_wine.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;
`
