import styled from "styled-components";
import { Sizes } from ".";

export const PageTitle = styled.h1`
  margin-block: 0;
`

export const TitlePrimary = styled.h2``

export const TitleSecondary = styled.h4`
  text-align: left;
  font-size: 4.6rem;
  font-style: italic;
  font-weight: 400;

  @media (max-width: ${Sizes.small}) {
    text-align: center;
    font-size: 28px;
  }
`
