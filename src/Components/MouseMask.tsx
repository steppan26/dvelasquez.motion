import { useMousePosition } from "@/Utils/hooks"
import { animated, useSpring } from "@react-spring/web"
import { motion } from "framer-motion"
import { CSSProperties, RefObject, useEffect, useMemo, useRef, useState } from "react"
import styled from "styled-components"

interface Props {
  children?: React.ReactNode
  containerRef: RefObject<HTMLElement>
}

export const MouseMask:React.FC<Props> = ({ children, containerRef }) => {
  const maskRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState<CSSProperties['transform']>()
  const mousePosition = useMousePosition()
  const [style, set] = useSpring(() => ({ x: 0, y: 0 }));

  const maskPosition = useMemo(() => {
    const element = sceneRef.current
    const maskElement = maskRef.current
    if(maskElement) {
      // @ts-ignore
      const elementRect = element.getBoundingClientRect();
      let newX = mousePosition.x - elementRect.left - (maskElement.clientWidth / 2);
      let newY = mousePosition.y - elementRect.top - (maskElement.clientHeight / 2);
      return { x: newX, y: newY }
    }
  }, [mousePosition])

  useEffect(() => console.info("X", style), [style])

  useEffect(() => {
    set({ x: maskPosition?.x, y: maskPosition?.y })
  }, [maskPosition, set])

  return(
    <Scene ref={sceneRef}>
      <Mask
      className="oval shape"
      ref={maskRef}
      style={style}
      // animate={{ left: maskPosition?.x, top: maskPosition?.y }}
      // transition={{ type: "spring", stiffness: 400, damping: 200 }}
      />
      {children}
    </Scene>
  )
}


const Mask = styled(animated.div)`
  position: relative;
  display: block;
  left: 0px;
  top: 0px;
  z-index: 8;

  transform-style: preserve-3d;
  backface-visibility: hidden;

  &.shape {
    z-index: 10;
    position: absolute;
    margin: 0 auto;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  }

  &.oval {
    width: 70vw;
    height: 70vh;

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
  }
`

const Scene = styled.div`
  --clr-background: ${p => p.theme.backgroundPrimary};
  --clr-shape: ${p => p.theme.backgroundSecondary};

  transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: var(--clr-shape);
`
