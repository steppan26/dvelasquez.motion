import styled from "styled-components"
import { useEffect, useRef, useState } from "react";

export const AnimatedLogo:React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // useEffect(() => {
  //   if(typeof window == 'undefined') return

  //   const timeout = setTimeout(() => playVideo(), 400)
  //   return () => clearTimeout(timeout)
  // }, [])


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
    <Wrapper>
      <video
        ref={videoRef}
        id="animationVideo"
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoExit}
        autoPlay
        style={{ display: 'block', width: '100%' }}
      >
        <source src="/Logo-Animation-Brush.webm" type="video/webm" />
      </video>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
    top: 3rem;
    left: 1.75rem;
  width: 135px;

  video {
    mix-blend-mode: multiply;
  }
`
