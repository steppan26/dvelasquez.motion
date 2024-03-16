import styled from "styled-components"
import ArrowGif from '/public/arrow_long.png'
import Image from "next/image"

export const ArrowLong:React.FC = () => {

  return (
    <Image
      src={ArrowGif}
      alt="long custom arrow"
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );

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
