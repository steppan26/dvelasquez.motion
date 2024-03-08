import styled from "styled-components"
import { useEffect, useMemo, useRef, useState } from "react"
import { animated, useSpring } from "@react-spring/web"
import { Sizes } from "../Assets"
import { useMousePosition } from "../utils/hooks"

interface Props {
  children?: React.ReactNode
}

export const MouseMask:React.FC<Props> = ({ children }) => {
  const maskRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition(sceneRef.current)
  const [style, set] = useSpring(() => ({
    x: 0,
    y: 0,
    config: {
      // damping: 10,
      // mass: 1.5,
      // velocity: 20,

      mass: 2,
      damping: 15,
      tension: 300,
      friction: 40,
      velocity: 20,
    }
  }))
  const [currentShape, setCurrentShape] = useState("diamond")

  useEffect(() => {
    if(typeof window == 'undefined') return

    window.addEventListener('resetMask', resetMaskPosition)

    return () => window.removeEventListener('resetMask', resetMaskPosition)
  }, [])

  const resetMaskPosition = (e?: Event) => {
    if(!sceneRef.current || !maskRef.current) return

    const sceneCenterX = sceneRef.current.clientWidth / 2
    const sceneCenterY = sceneRef.current.clientHeight / 2
    const maskWidth = maskRef.current.clientWidth / 2
    const maskHeight = maskRef.current.clientHeight / 2
    set({ y: sceneCenterY - maskHeight, x: sceneCenterX - maskWidth })
  }

  const maskPosition = useMemo(() => {
    const element = sceneRef.current
    const maskElement = maskRef.current
    if(maskElement && element) {
      const elementRect = element.getBoundingClientRect();
      let newX = mousePosition.x - elementRect.left - (maskElement.clientWidth / 2);
      let newY = mousePosition.y - elementRect.top - (maskElement.clientHeight / 2);
      return { x: newX, y: newY }
    }
  }, [mousePosition])

  useEffect(() => {
    set({ x: maskPosition?.x, y: maskPosition?.y })
  }, [maskPosition, set])

  const handleClick = () => {
    console.info('click')
  }

  return(
    <Scene ref={sceneRef}>
      <Mask
      className={currentShape + " shape"}
      ref={maskRef}
      style={style}
      />
      {children}
      {/* <Toggle className={currentShape} onClick={handleClick} /> */}
    </Scene>
  )
}


const Mask = styled(animated.div)`
  position: relative;
  display: block;
  left: 0px;
  top: 0px;
  z-index: 8;
  pointer-events: none;

  transform-style: preserve-3d;
  backface-visibility: hidden;

  &.shape {
    z-index: 8;
    position: absolute;
    margin: 0 auto;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      box-shadow: 0 0 0 200vw var(--clr-background);
    }

    @media (max-width: ${Sizes.small}) {
      position: relative;
    }
  }

  &.circle, .circle {
    height: 110dvh;
    width: 110dvh;

    &::after {
      left: 50%;
      top: 50%;
      border-radius: 80%;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 0 200vw var(--clr-background);
      backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    @media (max-width: ${Sizes.small}) {
      height: 80dvw;
      width: 80dvw;
    }
  }

  &.diamond, .diamond {
    width: 50vw;
    height: 50vw;

    &::after {
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100%;
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
      box-shadow: 0 0 0 200vw var(--clr-background);
      backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    @media (max-width: ${Sizes.small}) {
      width: 80vw;
      height: 80vw;
    }
  }
`

const Scene = styled.div`
  --clr-background: ${p => p.theme.backgroundPrimary};
  --clr-shape: ${p => p.theme.backgroundSecondary};

  position: relative;
  transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  overflow: hidden;
  z-index: 8;
  height: 100%;
  width: 100%;
  background-color: var(--clr-shape);

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    padding-top: 3rem;
  }
`

const Toggle = styled.div`
  position: absolute;
  right: 5vw;
  bottom: 5vw;
  width: 20px;
  height: 20px;
  background-color: var(--clr-bg-main);
`
