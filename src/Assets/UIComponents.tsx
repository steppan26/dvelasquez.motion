import styled from "styled-components";
import { Sizes } from ".";

export const PageTitle = styled.h1`
  margin-block: 0;
`

export const TitlePrimary = styled.h2``

export const TitleSecondary = styled.h4`
  text-align: left;
  font-size: 3.75rem;
  font-style: italic;
  font-weight: 400;

  @media (max-width: ${Sizes.small}) {
    text-align: center;
    font-size: 1.875rem;
  }
`

export const ScrollingContainer = styled.div`
  position: relative;
  scroll-snap-type: y mandatory;
  height: 100dvh;
  width: 100vw;
    max-width: 100vw;
  overflow: auto;

  &>* {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
  }
`
