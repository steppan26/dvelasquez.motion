import { useEffect } from "react"
import { UseTrailProps, animated, useTrail } from "react-spring"
import styled from "styled-components"

interface MenuItem {
  text: string
  href: string
}

const menuData: MenuItem[] = [
  {
    text: "Menu 1",
    href: "/about"
  },
  {
    text: "Menu 2",
    href: "/about"
  },
  {
    text: "Menu 3",
    href: "/about"
  },
  {
    text: "Menu 4",
    href: "/about"
  },
]

interface Props {
  isOpen: boolean
}

export const MenuItems:React.FC<Props> = ({ isOpen }) => {
  const config: UseTrailProps['config'] = {
    mass: 2,
    tension: 380,
    friction: 39.7,
    precision: 0.2,
    restVelocity: 0.4,
    velocity: 0.2,
  }
  const menuObjects = useTrail(menuData.length, {
    config,
    from: { x: 350 },
    to: { x: isOpen ? 0 : 350 },
    stagger: 260,
  }).reverse()

  return(
    <MenuContainer>
      {menuObjects.map((props, index) => (
        <Menu key={index} style={props}>
          <p>{menuData[index].text}</p>
        </Menu>
      ))}
    </MenuContainer>
  )
}

const Menu = styled(animated.div)`
  font-size: 1rem;

  p {
    margin-block: 0;
    transition: cubic-bezier(0.18, 0.89, 0.32, 1.28) 800ms transform;
  }

  &:hover {
    p {
      transform: scale(1.07);
    }
  }
`


const MenuContainer = styled.div`
  display: flex;
    justify-content: flex-end;
    gap: 2rem;
  overflow: hidden;
  width: max-content;
  margin-right: 1rem;
  padding-inline: 2rem 0.5rem;
`
