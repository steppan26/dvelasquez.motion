import styled from "styled-components"
import Link from "next/link"

export const CTAButton:React.FC = () => (
  <GPTButton href="/about" >find out more</GPTButton>
)

const GPTButton = styled(Link)`
  flex: 1 0 30%;
  display: flex;
    justify-content: center;
  width: 100%;
  background-color: var(--clr-green);
  color: #fff;
  font-family: var(--font-family-title);
    font-size: 2.125rem;
    text-align: center;
    font-style: italic;
  border-radius: 5px;
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
`
