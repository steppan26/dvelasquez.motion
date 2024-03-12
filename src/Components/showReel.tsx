import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { Sizes } from "../Assets"
import MouseStickerImage from '/public/Assets/better_with_sound.gif'
import { useMousePosition } from "../utils/hooks"

export const ShowReel:React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const sceneRef = useRef<HTMLDivElement>(null)
  const stickerRef = useRef<HTMLImageElement>(null)
  const mousePosition = useMousePosition(sceneRef.current)

  const maskPosition = useMemo(() => {
    const element = sceneRef.current
    const maskElement = stickerRef.current
    if(maskElement && element) {
      const elementRect = element.getBoundingClientRect();
      let newX = mousePosition.x - elementRect.left - (maskElement.clientWidth / 2);
      let newY = mousePosition.y - elementRect.top - (maskElement.clientHeight / 2);
      return { x: newX, y: newY }
    }
  }, [mousePosition])

  useEffect(() => {
    if(typeof window == 'undefined' || !containerRef.current) return

    const observer = new IntersectionObserver(resetMask, {
      root: document.querySelector('#mainContainer'),
      threshold: 0.1
    })
    observer.observe(containerRef.current)
  }, [])

  const resetMask = () => {
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  const handleVideoClick = () => {
    if(!hasBeenClicked && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current?.play()
      setTimeout(() => setHasBeenClicked(true), 100)
    }
  }

  return(
    <Container ref={containerRef}>
      <TextWrapper>
        <Text>Showreel</Text>
      </TextWrapper>
      <VideoWrapper ref={sceneRef}>
        <Video
        ref={videoRef}
        autoPlay
        playsInline
        muted={!hasBeenClicked}
        controls={hasBeenClicked}
        onClick={handleVideoClick}
        controlsList="nodownload"
        poster="/showreel_static.png"
        preload="metadata"
        >
          <source src="/showreel.webm" type="video/webm" />
        </Video>
        <MouseSticker
        ref={stickerRef}
        src={MouseStickerImage.src}
        alt="better with sound sticker"
        width={MouseStickerImage.width}
        height={MouseStickerImage.height}
        data-hasbeenclicked={hasBeenClicked}
        style={{ top: maskPosition?.y, left: maskPosition?.x }}
        />
      </VideoWrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  align-self: end;
  display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  width: calc(100% - var(--inner-padding));
  height: auto;
  margin-top: 4dvh;

  @media (max-width: ${Sizes.small}) {
    align-self: center;
    width: 100vw;
    margin-top: 2dvh;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);
  overflow: hidden;

  &:hover {
    img[data-hasbeenclicked = "false"] {
      display: unset !important;
    }
  }

  @media (max-width: ${Sizes.small}) {
    max-height: 56vw;
    border-radius: 0;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);

  @media (max-width: ${Sizes.small}) {
    width: 100%;
    border-radius: 0;
    margin-bottom: -1px;
  }
`

const TextWrapper = styled.span`
  transform: rotate(-90deg);
    transform-origin: left bottom;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Text = styled.h3`
  position: absolute;
    bottom: 0;
    left: 0;
  font-family: var(--font-family-regular);
    font-size: 80px;
    font-weight: 100;
    font-style: italic;
  color: ${p => p.theme.btnPrimaryBg};
`

const MouseSticker = styled(Image)`
  --size: 110px;

  display: none;
  position: absolute;
  pointer-events: none;
  left: 0; top: 0;
  width: var(--size);
  height: var(--size);
  z-index: 5;
  mix-blend-mode: difference;
`
