import styled from "styled-components"
import { useCursorMessage, useMousePosition } from "../utils/hooks"

export const CursorMessage:React.FC = () => {
  const mousePosition = useMousePosition()
  const { displayElement, messageToDisplay } = useCursorMessage()

  if(displayElement)
    return(
      <Container style={{ top: mousePosition.y, left: mousePosition.x }}>
        {messageToDisplay}
      </Container>
    )
}

const Container = styled.p`
  z-index: 9999;
  position: fixed;
  border-radius: var(--border-radius);
  border-radius: 3px;
  padding: 0.5em;
  font-size: 12px;
  color: var(--clr-bg-projects);
  background-color: var(--clr-text-main);
  margin-left: 1rem;
  transform: translateY(50%);
  font-family: var(--font-family-wide);
  font-weight: 100;

  border: 1px solid var(--clr-text-main);
  background-color: var(--clr-bg-main);
  color: var(--clr-text-main);
  box-shadow: 0 2px 4px rgba(10, 10, 10, 0.15);
  `
