import styled from "styled-components"
import { Sizes } from "../Assets"
import { useEffect, useRef, useState } from "react"

export const ShowReel:React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasBeenClicked, setHasBeenClicked] = useState(false)

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
      <Text>
        Showreel
      </Text>
      <Video
      ref={videoRef}
      autoPlay
      muted={!hasBeenClicked}
      controls={hasBeenClicked}
      onClick={handleVideoClick}
      controlsList="nodownload"
      poster="/showreel_static.png"
      preload="metadata"

      >
        <source src="/showreel.mp4" type="video/mp4" />
      </Video>
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
    display: none;
  }
`

const Video = styled.video`
  flex: 1 1 100%;
  width: clamp(650px, 80%, 1240px);
  height: 100%;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);

`

const Text = styled.h3`
  position: absolute;
    bottom: 0;
    left: 0;
  font-family: var(--font-family-wide);
    font-size: 80px;
    font-weight: 200;
    font-style: italic;
  color: ${p => p.theme.btnPrimaryBg};
  transform: rotate(-90deg);
    transform-origin: left bottom;
`
