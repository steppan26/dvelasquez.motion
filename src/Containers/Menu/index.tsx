import { useState } from "react";
import styled from "styled-components"
import { MenuItems } from "./menuItems";
import { ToggleButton } from "./toggleButton";

export const Menu:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)


  return(
    <Nav>
      <MenuItems isOpen={isOpen} />
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  )
}

const Nav = styled.nav`
  cursor: pointer;
  z-index: 999;
  position: fixed;
    top: 3rem;
    right: 50px;
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
