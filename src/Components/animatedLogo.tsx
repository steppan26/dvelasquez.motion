import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
//@ts-ignore
import { supportsHEVCAlpha } from "../utils/helpers";
import { Sizes } from "../Assets";


export const AnimatedLogo:React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
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
      setIsPlaying(false)
    })
  }, [])

  const handleVideoHover = () => {
    if (!isPlaying && !!videoRef.current) {
      playVideo()
    }
  }

  const playVideo = () => {
    if(!videoRef.current) return

    setIsPlaying(true)
    videoRef.current.currentTime = 0
    videoRef.current.play()
  }

  const handleVideoExit = () => {
    setIsPlaying(false)
  }

  return(
    <Wrapper ref={wrapperRef}>
      {displayVideo
      ? <video
          ref={videoRef}
          id="animationVideo"
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoExit}
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

    /* top: 1rem; */
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
