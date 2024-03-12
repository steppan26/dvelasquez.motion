import styled from "styled-components"
import ArrowGif from '/public/Assets/arrow.gif'
import Image from "next/image"

export const Arrow:React.FC = () => {

  return (
    <Image
      src={ArrowGif.src}
      alt="animated bouncing arrow"
      width={ArrowGif.width}
      height={ArrowGif.height}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );

  return(
    <Container></Container>
  )
}

const Container = styled.div`
  --diamond-size: clamp(5px, 0.8vw, 10px);

  position: relative;
  width: 2px;
  height: clamp(50px, 5.9vw, 85px);
  background-color: ${p => p.theme.textPrimary};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: var(--diamond-size);
    height: var(--diamond-size);
    transform: translateX(-40%) rotate(45deg);
    background-color: inherit;
  }
`
