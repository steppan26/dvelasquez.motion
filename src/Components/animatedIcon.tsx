import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { isSafari } from "../utils/helpers";
import { Sizes } from "../Assets";
import { useIsMobileView } from "../utils/hooks";
import { LoopingVideo } from ".";
import LogoGifLight from '/public/logos/brush_light.gif'
import LogoGifWine from '/public/logos/brush_wine.gif'

interface Props {
  mode?: 'light' | 'dark'
}

export const AnimatedIcon:React.FC<Props> = ({ mode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [displayVideo, setDisplayVideo] = useState(true)


  useEffect(() => {
    if(typeof window == 'undefined' || !wrapperRef.current) return

    if(isSafari()) {
      setDisplayVideo(false)
    }
  }, [])

  return(
    <Wrapper ref={wrapperRef}>
      {displayVideo
      ? <LoopingVideo videoPath={ mode === 'light'
        ? "logos/logo_brush_white.webm"
        : "logos/brush_wine.webm"
      } />
      : <AnimatedGif data-colormode={mode} />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --logo-size: 9.305556vw;

  z-index: 999;
  height: max-content;
  width: max-content;
  width: var(--logo-size);

  @media (max-width: ${Sizes.small}){
    --logo-size: 90px;

    top: 1rem;
  }
`

const AnimatedGif = styled.div`
  z-index: 9999;
  width: var(--logo-size);
  height: calc(var(--logo-size) * 0.35555556);
  background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650511/logos/brush_wine_ke3tio.gif");
  background-image: url(${LogoGifLight.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-iteration-count: 1;

  &[data-colormode="dark"] {
    background-image: url(${LogoGifWine.src});
    background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650511/logos/brush_wine_ke3tio.gif");
  }

  &[data-colormode="light"] {
    background-image: url(${LogoGifLight.src});
    background-image: url("https://res.cloudinary.com/dtlyxry6z/image/upload/v1711650511/logos/brush_light_o0lwu8.gif");
  }
`
