import { useEffect, useRef } from "react"
import styled from "styled-components"
import { Sizes } from "../Assets"
import BackupImage from '/public/showreel_static.webp'
import { LoopingVideo } from "."

export const ShowReel:React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

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

  return(
    <Container ref={containerRef} data-lazy="showreel">
      <TextWrapper>
        <Text>Showreel</Text>
      </TextWrapper>
      <VideoWrapper>
        <LoopingVideo
        videoPath="https://res.cloudinary.com/dtlyxry6z/video/upload/v1711566007/Home/showreel_sseix4.webm"
        backupImage={BackupImage}
        imageAlt="Screenshot of the showreel"
        soundOption
        allowControls
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
    margin-top: 5dvh;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: ${Sizes.small}) {
    max-height: 56vw;
    border-radius: 0;
  }
`

const TextWrapper = styled.span`
  transform: rotate(-90deg);
    transform-origin: left bottom;

  h3 {
    margin-block: 0;
  }

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Text = styled.h3`
  position: absolute;
    bottom: 0;
    left: 0;
  font-family: var(--font-family-regular);
    font-size: 5rem;
    font-weight: 100;
    line-height: 4.5rem;
    font-style: italic;
  color: ${p => p.theme.btnPrimaryBg};
`
