import styled from "styled-components"
import { Sizes } from "../Assets"
import Image from "next/image"

export const CTAButton:React.FC = () => {
  const handleClick = () => {
    alert("Coming soon: \n\nThis website is currently under construction, please contact me for more information at d.velasquezmotion@gmail.com")
  }

  return(
    <TempButton>
      <Image
      src="/button.png"
      alt="cta button"
      onClick={handleClick}
      width={279}
      height={65}
      layout="responsive"
      />
    </TempButton>
    )


  return(
    <Button onClick={handleClick}>
      find out more
    </Button>
  )
}

const TempButton = styled.div`
  --width: 22.22222vw;

  flex: 1 0 var(--width);
  cursor: pointer;
  justify-self: end;
  position: relative;
  max-width: 280px;
  height: calc(var(--width) * 0.33774834);
    max-height: calc(260px * 0.33774834);
  transform: translateX(20%);
  transition: var(--transition) 200ms opacity;

  &:hover {
    opacity: 0.9;
  }
`

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
