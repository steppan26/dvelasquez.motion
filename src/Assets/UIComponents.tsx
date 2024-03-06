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
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  scroll-snap-type: y mandatory;
  height: 100dvh;
  width: 100%;
  overflow: auto;
  transition: scroll-behavior 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  &>* {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
  }
`
