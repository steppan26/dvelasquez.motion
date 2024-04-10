import styled from "styled-components"
import Link from "next/link"
import { Sizes } from "../Assets"

export const CTAButton:React.FC = () => (
  <GPTButton href="/about" >Book a Call</GPTButton>
)

const GPTButton = styled(Link)`
  flex: 1 0 26%;
  display: flex;
    justify-content: center;
  width: 100%;
  background-color: var(--clr-green);
  color: #fff;
  font-family: var(--font-family-wide);
    font-size: 2.375rem;
    text-align: center;
    font-weight: 400;
    font-style: italic;
    letter-spacing: -3%;
  border-radius: var(--border-radius);
  margin-right: -5%;
  padding: 0.5rem;
  box-shadow: 5px 5px #526950;

  transition: ease-out 120ms all;

  &:hover {
    box-shadow: 4px 4px #526950;
    transform: translate(1px, 1px);
  }
  &:active {
    box-shadow: 1px 1px #526950;
    transform: translate(4px, 4px);
  }

  @media (max-width: ${Sizes.small}) {
    margin-right: unset;
    font-size: 2rem;
    padding-inline: 2rem;
    width: auto;
  }
`
