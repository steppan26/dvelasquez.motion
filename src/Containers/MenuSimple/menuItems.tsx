import { UseTrailProps, animated, useTrail } from "react-spring"
import styled from "styled-components"
import { Sizes } from "../../Assets"
import { useMemo } from "react"

interface MenuItem {
  text: string
  href: string
}

const menuData: MenuItem[] = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Works",
    href: "/works"
  },
  {
    text: "About",
    href: "/about"
  },
  {
    text: "Contact",
    href: "/contact"
  },
]

interface Props {
  isOpen: boolean
}

const TRAVEL_DISTANCE = 300

export const MenuItems:React.FC<Props> = ({ isOpen }) => {
  const config: UseTrailProps['config'] = {
    mass: 2,
    tension: 300,
    friction: 39.7,
    precision: 0.2,
    restVelocity: 0.4,
    velocity: 0.2,
  }

  const menuObjects = useTrail(menuData.length, {
    config,
    from: { x: TRAVEL_DISTANCE, opacity: 0 },
    to: { x: isOpen ? 0 : TRAVEL_DISTANCE, opacity: isOpen ? 1 : 0 },
    stagger: 260,
  })

  const menuItems = useMemo(() => (isOpen ? menuObjects : menuObjects.reverse()), [isOpen, menuObjects])

  return(
    <MenuContainer>
      {menuItems.map((props, index) => (
        <Menu key={index} style={props} className={index === 0 ? 'active' : ''} >
          <p>{menuData[index].text}</p>
        </Menu>
      ))}
    </MenuContainer>
  )
}

const Menu = styled(animated.div)`
  font-size: 1.25rem;
  line-height: 2.4375rem;

  p {
    font-weight: 400;
    margin-block: 0;
    transition: cubic-bezier(0.18, 0.89, 0.32, 1.28) 800ms transform;
  }

  &.active {
    text-decoration: underline;

    p { font-weight: 600; }
  }

  &:hover {
    p { transform: scale(1.07); }
  }
`


const MenuContainer = styled.div`
  display: flex;
    justify-content: flex-end;
    gap: 2.5rem;
  overflow: hidden;
  width: max-content;
  margin-right: 2.5rem;
  padding-inline: 2rem 0.5rem;

  @media (max-width: ${Sizes.small}) {
    margin-right: 0.5rem;
  }
`
