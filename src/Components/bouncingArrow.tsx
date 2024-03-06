import { MouseEventHandler, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Sizes } from "../Assets";
import { useIsMobileView } from "../utils/hooks";
import ArrowGif from '/public/Assets/arrow.gif'
import Image from "next/image";

interface Props {
  onClick: MouseEventHandler
}

export const BouncingArrow:React.FC<Props> = ({ onClick }) => {
  return(
    <ArrowWrapper onClick={onClick}>
      <Image
      src={ArrowGif.src}
      alt="animated bouncing arrow"
      width={ArrowGif.width}
      height={ArrowGif.height}
      layout="responsive"
      />
    </ArrowWrapper>
  )
}

const ArrowWrapper = styled(animated.div)`
  position: relative;
  cursor: s-resize;
  z-index: 10;
  align-self: end;
  margin-bottom: 2dvh;
  padding-inline: 1.5rem;
  width: 4.6vw;

  @media (max-width: ${Sizes.small}) {
    align-self: unset;
    position: absolute;
      bottom: 3rem;
    height: 30px;
    margin-bottom: 0.5rem;
    width: 15vw;
  }
`
