import styled from "styled-components"
import { MouseMask, ScrollDown } from "../Components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { LandingMobile, Navbar } from "."
import { MouseEventHandler, useEffect, useRef, useState } from "react"
import { useCookies } from "../utils/hooks"

type LandingTheme = 'olive' | 'yellow' | 'pink' | 'wine' | 'default'

class ThemeIterator {
  private static themes: LandingTheme[] = ['pink', 'olive', 'yellow', 'wine', 'default'];

  static next(currentTheme: LandingTheme): LandingTheme {
    const currentIndex = this.themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % this.themes.length;
    return this.themes[nextIndex];
  }

  static nextRandom(lastTheme: LandingTheme | null): LandingTheme {
    if(lastTheme == null) return 'pink'

    const randomIndex = Math.floor(Math.random() * this.themes.length);
    return this.themes[randomIndex];
  }
}

export const Landing:React.FC = () => {
  const selectorRef = useRef<HTMLDivElement>(null)
  const [currentTheme, setCurrentTheme] = useState<LandingTheme>('pink')
  const cookies = useCookies()

  useEffect(() => {
    if(typeof window == 'undefined') return

    const lastTheme = cookies.get('currentTheme')
    const nextTheme = ThemeIterator.next(lastTheme as LandingTheme)
    cookies.set('currentTheme', nextTheme)
    setCurrentTheme(nextTheme)
  }, [])

  const handleArrowClick: MouseEventHandler = (e) => {
    const el = document.querySelector('#showreelContainer')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.dispatchEvent(new CustomEvent('resetMask'))
  }

  return(
    <Selector ref={selectorRef}>
      <span>
        <LandingMobile />
      </span>
      <Container data-desktop id="landingContainer" data-colortheme={currentTheme} >
        <Navbar type="landing" mode="dark" />
        <MouseMask>
            <Wrapper>
            <TextWrapper onClick={handleArrowClick}>
              <span>Art Direction</span>
              <span>Brand Design</span>
              <span>Motion Design</span>
            </TextWrapper>
            <ScrollDown scrollToSelector="#showreelContainer" />
          </Wrapper>
        </MouseMask>
      </Container>
    </Selector>
  )
}

const Selector = styled.div`
  &>* {
    display: none;
    &[data-desktop] { display: flex; }

    @media (max-width: ${Sizes.small}) {
      display: block;
      &[data-desktop] { display: none; }
    }
  }

`

const Wrapper = styled.div`
  position: relative;
  z-index: 6;
  display: flex;
    justify-content: center;
    align-items: center;
  height: 100%;
`


const Container = styled.article`
  --clr-shape: #CE0852;
  --clr-text: var(--clr-text-main);

  position: relative;
  display: flex;
    justify-content: center;
    align-items: center;
  width: 100dvw;
    max-width: 100%;
  height: 100dvh;
  overflow: hidden;

  &[data-colortheme='pink'] {
    --clr-shape: #CE0852;
    --clr-text: var(--clr-text-main);
  }

  &[data-colortheme='olive'] {
    --clr-shape: #7A9B76;
    --clr-text: var(--clr-text-main);
  }

  &[data-colortheme='yellow'] {
    --clr-shape: #FFD340;
    --clr-text: var(--clr-text-main);
  }

  &[data-colortheme='wine'] {
    --clr-shape: #370031;
    --clr-text: var(--clr-bg-main);
  }
`

const TextWrapper = styled(PrimaryTitle)`
  z-index: 8;
  cursor: default;
  position: absolute;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100%;
  color: var(--clr-text);
  font-size: 4.375rem;
  line-height: 6.75rem;
  font-family: "neusa-next-std-wide" !important;
  font-weight: 300;
  font-style: italic;
  margin-block: 0;

  &>span {
    font-family: "neusa-next-std-wide" !important;
  }

  @media (max-width: ${Sizes.small}) {
    font-size: 2.5rem;
  }
`
