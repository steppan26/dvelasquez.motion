import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { supportsHEVCAlpha } from "../Utils/helpers";

export const AnimatedLogo:React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)

  useEffect(() => {
    if(typeof window == 'undefined' || !wrapperRef.current) return

    if(supportsHEVCAlpha()) {
      setDisplayVideo(false)
    }
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
          <source src="/logo_animation_brush.webm" type="video/webm" />
        </video>
      : <AnimatedGif />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
    top: 2rem;
    left: 1.75rem;
  padding-block: 1rem;
  width: 135px;
`

const AnimatedGif = styled.div`
  width: 135px;
  height: 48px;
  background-image: url("/Logo Animation Brush.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;
`
