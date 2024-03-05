import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { Sizes } from "../../Assets"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

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

const TRAVEL_DISTANCE = 250

const easeInOutCubic = (t: any) => (t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2);

export const MenuItems:React.FC<Props> = ({ isOpen }) => {
  const router = useRouter()

  const translateStyle = useSpring({
    from: { x: TRAVEL_DISTANCE, opacity: 0 },
    to: { x: isOpen ? 0 : TRAVEL_DISTANCE, opacity: isOpen ? 1 : 0 },
    config: {
      mass: 1.4,
      tension: isOpen ? 250 : 150,
      friction: isOpen ? 23.5 : 8,
      precision: 0.2,
      restVelocity: 0.3,
      velocity: isOpen ? 0 : 0.1,
    }
  })

  return(
    <Wrapper>
      <MenuContainer style={{ ...translateStyle }}>
        {menuData.map((props, index) => (
          <Menu key={index} className={router.route === props.href ? 'active' : ''}>
            { router.route === '/works' && props.href === '/works'
              ? <Button onClick={() => router.push('/works')}>{props.text}</Button>
              : <Link href={props.href} scroll prefetch>{props.text}</Link>
            }
          </Menu>
        ))}
      </MenuContainer>
    </Wrapper>
  )
}

const Menu = styled(animated.div)`
  font-size: 1.25rem;
  line-height: 2.4375rem;

  font-weight: 300;
  margin-block: 0;
  color: var(--nav-main-color);
  font-family: var(--font-family-regular);
  transition: cubic-bezier(0.18, 0.89, 0.32, 1.28) 800ms transform;

  & * {
    color: inherit;
  }

  &.active {
    text-decoration: underline;
    font-weight: 400;

    &>button {
      text-decoration: underline;
      font-weight: 400;
    }
  }

  &:hover {
    transform: scale(1.07);
  }
`

const Button = styled.button`
  appearance: none;
  border: none;
  background-color: inherit;
  color: inherit;
`


const MenuContainer = styled(animated.div)`
  display: flex;
    justify-content: flex-end;
    gap: 1.75rem;
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
