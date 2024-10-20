import styled from 'styled-components'
import { Sizes } from '../Assets'

export const PrimaryTitle = styled.h1`
  color: ${p => p.theme.textHeader};
  font-size: 6rem;
  line-height: 9rem;
  font-weight: 400;
  font-style: italic;
`

export const Text = styled.p`
  font-family: "neusa-next-std-wide";
  font-weight: 400;
  font-style: italic;
  font-size: 1.875rem;
  line-height: 2.625rem;
  text-align: center;

  @media (max-width: ${Sizes.small}) {
    font-size: 1rem;
    line-height: 1.56rem;
  }
`
