import { MouseEventHandler } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import { Sizes } from "../Assets";
import ArrowGif from '/public/Assets/arrow.gif'
import Image from "next/legacy/image";

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
  max-height: clamp(50px, 5.9vw, 85px);
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
