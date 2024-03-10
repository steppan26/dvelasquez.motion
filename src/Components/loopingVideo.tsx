import { useMemo, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import styled from "styled-components"
import MouseStickerImage from '/public/Assets/better_with_sound.gif'
import { useMousePosition } from "../utils/hooks"
import { Sizes } from "../Assets"

interface Props {
  backupImage?: StaticImageData
  imageAlt?: string
  videoPath: string
  videoType?: string
  soundOption?: boolean
  allowControls?: boolean
  dataLazy?: boolean | string
}

export const LoopingVideo:React.FC<Props> = ({ imageAlt="", backupImage, videoPath, videoType="video/webm", soundOption, allowControls, dataLazy=false }) => {
  const mousePosition = useMousePosition()
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const stickerRef = useRef<HTMLImageElement>(null)
  const sceneRef = useRef<HTMLImageElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const maskPosition = useMemo(() => {
    const element = sceneRef.current
    const maskElement = stickerRef.current
    if(maskElement && element) {
      const elementRect = element.getBoundingClientRect();
      let newX = mousePosition.x - elementRect.left - (maskElement.clientWidth / 2);
      let newY = mousePosition.y - elementRect.top - (maskElement.clientHeight / 2);
      return { left: newX, top: newY }
    }
  }, [mousePosition])

  const handleVideoClick = () => {
    if(!videoRef.current || !soundOption) return

    if(!hasBeenClicked && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current?.play()
      setTimeout(() => setHasBeenClicked(true), 100)
    } else if(!allowControls && soundOption) {
      videoRef.current.muted = !videoRef.current.muted
    }
  }

  return(
    <VideoWrapper ref={sceneRef} >
      <video
      ref={videoRef}
      autoPlay
      playsInline
      loop
      muted={!soundOption || !hasBeenClicked}
      controls={hasBeenClicked && allowControls}
      onClick={handleVideoClick}
      controlsList="nodownload noremoteplayback"
      preload="metadata"
      poster={backupImage?.src}
      >
        <source src={videoPath} type={videoType} />
        { backupImage && <Image src={backupImage} alt={imageAlt} /> }
      </video>
      { soundOption &&
        <MouseSticker
          ref={stickerRef}
          src={MouseStickerImage.src}
          alt="better with sound sticker"
          width={MouseStickerImage.width}
          height={MouseStickerImage.height}
          data-hasbeenclicked={hasBeenClicked}
          style={{...maskPosition}}
        />
      }
    </VideoWrapper>
  )
}

const VideoWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  max-width: 100%;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: transparent;

  img, video {

    &:first-child {
      height: auto;
      width: 100%;
      border-radius: var(--border-radius);
    }
  }

  &:hover {
    img:nth-child(2)[data-hasbeenclicked = "false"] {
      display: unset !important;
    }
  }

  @media (max-width: ${Sizes.small}) {
    border-radius: 0;
    overflow: visible;
  }
`

const MouseSticker = styled(Image)`
  --size: 110px;

  display: none;
  position: absolute;
  pointer-events: none;
  left: 0; top: 0;
  width: var(--size) !important;
  height: var(--size) !important;
  z-index: 5;
  mix-blend-mode: difference;

  @media (max-width: ${Sizes.small}) {
    --size: 50px;

    display: unset;
    left: 0 !important; bottom: 0 !important; top: unset !important;

    &[data-hasbeenclicked = "true"] {
      display: none;
    }
  }
`
