import styled from "styled-components"
import { Sizes } from "../Assets"
import Image from "next/image"
import ButtonImage from '/public/Assets/cta_button.png'

export const CTAButton:React.FC = () => {
  const handleClick = () => {
    alert("Coming soon: \n\nThis website is currently under construction, please contact me for more information at d.velasquezmotion@gmail.com")
  }

  return(
    <TempButton>
      <Image
      src={ButtonImage.src}
      alt="cta button"
      onClick={handleClick}
      width={ButtonImage.width}
      height={ButtonImage.height}
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
  --width: 20.22222vw;

  flex: 1 0 var(--width);
  align-self: flex-end;
  cursor: pointer;
  justify-self: end;
  position: relative;
  max-width: 240px;
  height: auto;
  margin-bottom: 1rem;
  transform: translateX(30%);
  transition: var(--transition) 200ms opacity;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${Sizes.small}) {
    --width: 60vw;

    align-self: center;
    height: max-content;
      max-height: 58px;
    width: var(--width);
    margin-bottom: 2.5rem;
    transform: unset;
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
