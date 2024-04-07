import { useCallback, useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { Sizes } from "../Assets"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { LoopingVideo } from "."

export interface ProjectPeakProps {
  backgroundContent: string | StaticImageData
  id: string
  text: string
  style?: any
}

export const ProjectPeak: React.FC<ProjectPeakProps> = ({ backgroundContent, style, id, text}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => setIsHovering(false), [])

  const BackgroundContent:React.FC = useCallback(() => typeof backgroundContent === 'string'
  ? <LoopingVideo videoPath={backgroundContent} />
  : <Image src={backgroundContent} alt={"banner image for project " + id} />
  , [backgroundContent, id])

  const overlaySpring = useSpring({
    from: { y: '0%' },
    to: { y: isHovering ? '100%' : '0%' },
    config: {
      mass: 1.3,
      friction: 60,
      tension: 425,
    }
  })

  return(
    <Container
    id={id+'_container'}
    ref={containerRef}
    style={style}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      <LinkWrapper href={"/projects/" + id}>
        <BackgroundContent />
        <Overlay className={`overlay ${id}`} style={overlaySpring} >
          <p>{text}</p>
        </Overlay>
      </LinkWrapper>
    </Container>
  )
}

const LinkWrapper = styled(Link)`
  height: 100%;
  width: 100%;
`


const Overlay = styled(animated.div)`
  pointer-events: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
  background: linear-gradient(var(--angle), var(--primary-color), var(--secondary-color));
  color: var(--clr-bg-main) !important;
  opacity: 1;
  overflow: hidden;
  font-family: var(--font-family-wide);
    font-size: 3rem;
    text-align: center;
  transform-origin: bottom;

  @media (max-width: ${Sizes.small}) {
    font-size: 2rem;
    background: unset;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 102%;
    height: 102%;

    p {
      display: none;
    }

    &:hover, &:active {
      filter: brightness(1.3);
    }

    &.jellysmack {
      background-image: url('projects/mobile_backgrounds/jellysmack.webp');
    }
    &.cpms {
      background-image: url('projects/mobile_backgrounds/cpms.webp');
    }
    &.motionSecrets {
      background-image: url('projects/mobile_backgrounds/motion_secrets.webp');
    }
    &.mysteria {
      background-image: url('projects/mobile_backgrounds/mysteria.webp');
    }
  }
`

const Container = styled(animated.div)`
  --width: 40vw;

  cursor: pointer;
  position: relative;
  flex: 0 0 var(--width);
  width: var(--width);
    max-width: 100vw;
  height: calc(var(--width) * 0.54);
    max-height: 100dvh;
  overflow: hidden;

  a, img, video {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${Sizes.small}) {
    --width: 100%;
    height: 25dvh;
    background: none;
  }
`
