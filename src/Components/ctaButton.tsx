import styled from "styled-components"
import { Sizes } from "../Assets"

export const CTAButton:React.FC = () => {
  const handleClick = () => {
    alert('please contact me at: \n\n\n d.velasquezmotion@gmail.com')
  }


  return(
    <Button onClick={handleClick}>
      find out more
    </Button>
  )
}

const Button = styled.button`
  cursor: pointer;
  align-self: center;
  justify-self: end;
  height: max-content;
  width: max-content;
  padding: 0.2rem 2rem;
  border: none;
  font-size: 2.5rem;
  font-weight: 300;
  color: ${p => p.theme.btnPrimaryText};
  background-color: ${p => p.theme.btnPrimaryBg};
  transition: ease all 60ms;

  &:hover {
    filter: brightness(1.2);
  }

  @media (max-width: ${Sizes.small}) {
    justify-self: center;
    font-size: 2rem;
  }
`
