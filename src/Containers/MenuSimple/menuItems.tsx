import { UseTrailProps, animated, useSpring, useTrail } from "react-spring"
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

const TRAVEL_DISTANCE = 150

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

  const easeInOutCubic = (t: any) => (t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const style = useSpring({
    from: { transform: 'scaleX(20%)', x: TRAVEL_DISTANCE, opacity: 0 },
    to: { transform: isOpen ? 'scaleX(100%)' : 'scaleX(20%)', x: isOpen ? 0 : TRAVEL_DISTANCE, opacity: isOpen ? 1 : 0 },
    config: {
      duration: 500,
      easing: easeInOutCubic
    },
  })

  const menuItems = useMemo(() => (isOpen ? menuObjects : menuObjects.reverse()), [isOpen, menuObjects])

  return(
    <Wrapper>
      <MenuContainer style={style}>
        {menuData.map((props, index) => (
          <Menu key={index} className={index === 0 ? 'active' : ''} >
            <p>{props.text}</p>
          </Menu>
        ))}
      </MenuContainer>
    </Wrapper>
  )

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


const MenuContainer = styled(animated.div)`
  display: flex;
    justify-content: flex-end;
    gap: 2.5rem;
  overflow: hidden;
  width: max-content;
  margin-right: 2.5rem;
  padding-inline: 2rem 0.5rem;
  transform-origin: right center;

  @media (max-width: ${Sizes.small}) {
    margin-right: 0.5rem;
  }
`

const Wrapper = styled.div`
  width: max-content;
  overflow: hidden;
`
