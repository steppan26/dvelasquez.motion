import { useState } from "react";
import styled from "styled-components"
import { MenuItems } from "./menuItems";
import { ToggleButton } from "./toggleButton";
import { Sizes } from "../../Assets";
import { AnimatedLogo } from "../../Components";

export const MenuSimple:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)


  return(
    <Nav>
      <AnimatedLogo />
      <MenuWrapper onMouseLeave={() => setIsOpen(false)}>
        <MenuItems isOpen={isOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </MenuWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  z-index: 999;
  position: absolute;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  width: 100vw;
  height: max-content;
  background-color: transparent;
  padding: 53px;
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;

  @media (max-width: ${Sizes.small}) {
    gap: 5px;
  }
`
