import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import styled from "styled-components"
import MouseStickerImage from '/public/Assets/better_with_sound.gif'
import { Sizes } from "../Assets"
import { useVideoObservers } from "../utils/hooks/useVideoObservers"

interface Props {
  backupImage?: StaticImageData
  imageAlt?: string
  videoPath: string
  videoType?: string
  soundOption?: boolean
  allowControls?: boolean
  dataLazy?: boolean | string
  autoPlay?: boolean
  priority?: boolean
  id?: string
}

export const LoopingVideo:React.FC<Props> = (props) => {
  const { imageAlt="", backupImage, videoPath, videoType="video/webm", soundOption, allowControls, dataLazy=false, autoPlay=true, id } = props
  const stickerRef = useRef<HTMLImageElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
  const { isVisible } = useVideoObservers(sceneRef)

  const maskPosition = useMemo(() => {
    const element = sceneRef.current
    const maskElement = stickerRef.current
    if(maskElement && element) {
      const elementRect = element.getBoundingClientRect();
      let newX = mousePosition.x - elementRect.left - (maskElement.clientWidth / 2);
      let newY = mousePosition.y - elementRect.top - (maskElement.clientHeight / 2);
      maskElement.style.top = newY + 'px'
      maskElement.style.left = newX + 'px'
      return { left: newX, top: newY }
    }
  }, [mousePosition])

  const handleVideoClick = () => {
    if(!videoRef.current || !soundOption) return

    if(!hasBeenClicked) {
      videoRef.current.currentTime = 0
      videoRef.current?.play()
      setTimeout(() => setHasBeenClicked(true), 100)
    } else if(!allowControls && soundOption) {
      videoRef.current.muted = !videoRef.current.muted
    }
  }

  const handleMouseMove = (e: any) => {
    setMousePosition({x: e.clientX, y: e.clientY})
  }

  const url = useMemo(() => {
    if(videoPath.startsWith('http')) return videoPath

    return 'https://d2gs8n06l6vuqg.cloudfront.net/' + videoPath
  }, [videoPath])

  return (
    <VideoWrapper onClick={handleVideoClick} className="looping-video" ref={sceneRef} onMouseEnter={handleMouseMove} onMouseMove={handleMouseMove} data-lazy={dataLazy} id={!!id ? id : undefined} >
      <Suspense fallback={ backupImage ? <Image src={backupImage} alt="static image version of video" /> : <>loading...</> }>
        <video
        ref={videoRef}
        autoPlay={autoPlay}
        playsInline
        loop
        muted={(!soundOption || !hasBeenClicked).valueOf()}
        controls={hasBeenClicked && allowControls}
        onClick={handleVideoClick}
        controlsList="nodownload noremoteplayback"
        preload="auto"
        poster={backupImage?.src}
        >
          { isVisible && <source src={url} type={videoType} /> }
          <p>
            To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
          </p>
        </video>
        { soundOption &&
          <MouseSticker
            ref={stickerRef}
            src={MouseStickerImage}
            alt="better with sound sticker"
            data-hasbeenclicked={hasBeenClicked}
            style={{...maskPosition}}
          />
        }
      </Suspense>
    </VideoWrapper>
  );
}


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

const VideoWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  max-width: 100%;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: transparent;

  video-js {
    background: unset;
    width: 100%;
    max-width: 100%;
  }

  video {
    position: relative;

    &:first-child {
      height: auto;
      width: 100%;
      border-radius: var(--border-radius);
    }
  }

  &:hover {
    ${MouseSticker}[data-hasbeenclicked = "false"] {
      display: unset !important;
    }
  }

  @media (max-width: ${Sizes.small}) {
    border-radius: 0;
    overflow: visible;
  }
`
