import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { supportsHEVCAlpha } from "../utils/helpers";
import { Sizes } from "../Assets";
import { useIsMobileView } from "../utils/hooks";
import { LoopingVideo } from ".";

interface Props {
  mode?: 'light' | 'dark'
}

export const AnimatedIcon:React.FC<Props> = ({ mode }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)
  const { isMobileView } = useIsMobileView()

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
      ? <LoopingVideo videoPath={ mode === 'light' || isMobileView
        ? "logos/logo_brush_white.webm"
        : "logos/logo_brush_wine.webm"
      } />
      : <AnimatedGif />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --logo-size: 9.305556vw;

  z-index: 999;
  height: max-content;
  width: max-content;
  width: var(--logo-size);

  @media (max-width: ${Sizes.small}){
    --logo-size: 90px;

    top: 1rem;
  }
`

const AnimatedGif = styled.div`
  width: var(--logo-size);
  height: calc(var(--logo-size) * 0.35555556);
  background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650511/logos/brush_wine_ke3tio.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;

  &[data-colormode="dark"] {
    background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650511/logos/brush_wine_ke3tio.gif");
  }

  &[data-colormode="dark"] {
    background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650511/logos/brush_light_o0lwu8.gif");
  }
`
