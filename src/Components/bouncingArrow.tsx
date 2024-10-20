import { MouseEventHandler } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import { Sizes } from "../Assets";
import ArrowGif from '/public/Assets/arrow.gif'
import Image from "next/image";

interface Props {
  onClick: MouseEventHandler
}

export const BouncingArrow:React.FC<Props> = ({ onClick }) => {
  return (
    <ArrowWrapper onClick={onClick} className="bouncing-arrow">
      <Image src={ArrowGif} alt="animated bouncing arrow" />
    </ArrowWrapper>
  );
}

const ArrowWrapper = styled(animated.div)`
  position: relative;
  cursor: s-resize;
  z-index: 10;
  align-self: end;
  margin-bottom: 3rem;
  padding-inline: 1.5rem;
  max-height: clamp(50px, 5.9vw, 85px);
  width: 4.14rem;

  @media (max-width: ${Sizes.small}) {
    align-self: unset;
    position: absolute;
      bottom: 3rem;
    height: 30px;
    margin-bottom: 0.5rem;
    width: 15vw;
  }
`
