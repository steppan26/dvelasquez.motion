import { useRouter } from "next/router"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { Sizes } from "../../Assets"
import Link from "next/link"
import { useCursorMessage } from "../../utils/hooks"

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
    text: "Projects",
    href: "/projects"
  },
  {
    text: "About",
    href: "/about"
  },
  {
    text: "Book a call",
    href: "/about#book"
  },
]

interface Props {
  isOpen: boolean
  hideEmail?: boolean
}

const TRAVEL_DISTANCE = '110%'

const easeInOutCubic = (t: any) => (t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2);

export const MenuItems:React.FC<Props> = ({ isOpen, hideEmail }) => {
  const router = useRouter()
  const { dispatchMessage } = useCursorMessage()

  const opacityStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: isOpen ? 0 : 1 },
    config: {
      duration: 200,
      velocity: 1
    }
  })

  const translateStyle = useSpring({
    from: { x: TRAVEL_DISTANCE},
    to: { x: isOpen ? '0%' : TRAVEL_DISTANCE },
    config: {
      mass: 1.4,
      tension: 250,
      friction: 43.5,
      precision: 0.2,
      restVelocity: 0.3,
    }
  })

  const handleEmailClick = () => {
    navigator.clipboard.writeText('dvelasquez.motion@gmail.com')
    dispatchMessage("copied to clipboard")
  }

  return(
    <Wrapper>
      <MenuContainer style={{ ...translateStyle }}>
        {!hideEmail && <Email onClick={handleEmailClick} style={opacityStyle}>dvelasquez.motion@gmail.com</Email> }
        {menuData.map((props, index) => (
          <Menu key={index} className={router.route === props.href ? 'active' : ''}>
            <Link href={props.href}>{props.text}</Link>
          </Menu>
        ))}
      </MenuContainer>
    </Wrapper>
  )
}

const Menu = styled(animated.div)`
  position: relative;
  z-index: 20;
  font-size: 1.25rem;
  line-height: 2.4375rem;

  margin-block: 0;
  color: var(--nav-main-color);
  font-family: var(--font-family-wide);
  font-style: italic;
  font-weight: 500;
  text-decoration: unset;
  transition: cubic-bezier(0.18, 0.89, 0.32, 1.28) 800ms transform;

  & * {
    color: inherit;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--nav-main-color);
    transition: ease-out width 300ms;
  }

  &:hover,
  &.active {
    &:after {
      width: 100%;
    }
  }
  .active {
    transform: scale(1.07);
    font-weight: 400;
  }
`

const MenuContainer = styled(animated.div)`
  display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.75rem;
  width: max-content;
  margin-right: 2.5rem;
  padding-inline: 2rem 0.5rem;
  transform-origin: right center;

  @media (max-width: ${Sizes.small}) {
    margin-right: 0.5rem;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  overflow: hidden;
`

const Email = styled(animated.p)`
  z-index: 10;
  cursor: text;
  position: absolute;
  font-family: var(--font-family-wide);
  color: var(--nav-main-color);
  font-size: 1.15rem;
  width: max-content;
  font-weight: 200;
  right: 100%;
  margin-block: 0;
  padding-right: 2rem;
`
