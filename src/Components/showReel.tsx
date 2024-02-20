import styled from "styled-components"
import { Sizes } from "../Assets"
import { useEffect, useRef } from "react"

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
    <Container ref={containerRef}>
      <Text>
        Showreel
      </Text>
      <Video />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  align-self: end;
  display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  width: clamp(650px, 80%, 1240px);
  height: 500px;
  margin-block: 4dvh;

  @media (max-width: ${Sizes.small}) {
    display: none;
  }
`

const Video = styled.video`
  flex: 1 1 100%;
  width: clamp(650px, 80%, 1240px);
  height: 100%;
  background-color: var(--clr-bg-secondary);
  background-image: url('/public/showreel_static.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  transition: var(--transition) 120ms all;
  border-radius: var(--border-radius);

`

const Text = styled.h3`
  position: absolute;
    bottom: 0;
    left: 0;
  font-family: var(--font-family);
    font-size: 80px;
    font-weight: 200;
    font-style: italic;
  color: ${p => p.theme.btnPrimaryBg};
  transform: rotate(-90deg);
    transform-origin: left bottom;
`
