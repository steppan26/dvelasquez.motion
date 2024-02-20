import { UseTrailProps, animated, useTrail } from "react-spring"
import styled from "styled-components"
import { Sizes } from "../../Assets"

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
    from: { x: 350, opacity: 0 },
    to: { x: isOpen ? 0 : 350, opacity: isOpen ? 1 : 0 },
    stagger: 260,
  }).reverse()

  return(
    <MenuContainer>
      {menuObjects.map((props, index) => (
        <Menu key={index} style={props} className={index === 0 ? 'active' : ''} >
          <p>{menuData[index].text}</p>
        </Menu>
      ))}
    </MenuContainer>
  )
}

const Menu = styled(animated.div)`
  font-size: 1.3125rem;
  line-height: 2.4375rem;

  p {
    margin-block: 0;
    transition: cubic-bezier(0.18, 0.89, 0.32, 1.28) 800ms transform;
  }

  &.active {
    color: ${p => p.theme.backgroundPrimary};
    text-decoration: underline;
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
    gap: 2.5rem;
  overflow: hidden;
  width: max-content;
  margin-right: 2.5rem;
  padding-inline: 2rem 0.5rem;

  @media (max-width: ${Sizes.small}) {
    margin-right: 0.5rem;
  }
`
