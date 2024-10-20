import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { type ITheme, darkTheme, lightTheme, Sizes } from "../../Assets"
import { useSlideInOnLoad } from "../hooks"

type ColorScheme = 'light' | 'dark'

export const Theming:React.FC<any> = ({ children }) => {
  useSlideInOnLoad()
  const router = useRouter()
  const [colorScheme, setColorScheme]  =useState<ColorScheme>('light')
  const currentTheme = useMemo(() => colorScheme === 'light' ? lightTheme : darkTheme, [colorScheme])

  useEffect(() => {
    const body = document.querySelector('body')
    body?.scrollTo({ top: 0, behavior: 'instant' })
  }, [router.pathname])

  useEffect(() => {
    if(typeof window == 'undefined') return

    calculateFontSize()
    window.addEventListener('resize', calculateFontSize)

    return () => window.removeEventListener('resize', calculateFontSize)
  }, [])

  const calculateFontSize = () => {
    const screenWidth = window.innerWidth
    const fontSize = screenWidth * 0.01111111
    const clampedSize = Math.max(Math.min(fontSize, 18), 8)
    const root = document.documentElement
    root.style.setProperty('--font-size', clampedSize + 'px')
  }

  return(
    <>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
    </>
  )
}


const GlobalStyle = createGlobalStyle<{}>`
  @keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  :root {
    // VARIABLES
    --font-size: 16px;
    --clr-text-main: ${p => (p.theme as ITheme).textPrimary};
    --clr-text-secondary: ${p => (p.theme as ITheme).textSecondary};
    --clr-bg-main: ${p => (p.theme as ITheme).backgroundPrimary};
    --clr-bg-secondary: ${p => (p.theme as ITheme).backgroundSecondary};
    --clr-bg-projects: #f6efe8;
    --clr-green: #7a9b76;

    --font-family-regular: 'neusa-next-std', sans-serif;
    --font-family-wide: 'neusa-next-std-wide', sans-serif;
    --font-family-title: "ff-cocon-pro", sans-serif;
    --font-title-font-weight: 600;
    --font-title-color: var(--clr-text-main);
    --font-text-font-weight: 300;
    --font-text-color: var(--clr-text-main);

    --border-radius: 0px;
    --nav-height: 8.802817dvh;

    --transition: ease;
    font-size: var(--font-size);
    background-color: var(--clr-bg-main);

    @media (max-width: ${Sizes.small}) {
      font-size: 16px;
    }
  }

  html {
    /* overflow: hidden; */
  }

  * {
    box-sizing: border-box;
  }

  body {
    position: relative;
    background-color: var(--clr-bg-main);
    font-family: var(--font-text-family);
    font-weight: var(--font-text-font-weight);
    overflow-x: hidden;
    overflow-y: auto;
    height: 100dvh;
    min-height: max-content;
    margin: 0 auto;
    max-width: 1920px;


    .slide-wrapper {
      position: relative;
      transform: translateY(7dvh);
      transition: 800ms all cubic-bezier(0.71, 0, 0.18, 0.93);
      transition-duration: 800ms;
      opacity: 0;

      .intro-image {
        height: 100%;
      }
    }
  }

  a {
    position: relative;
    appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    text-decoration: none;
    color: ${props => (props.theme as ITheme).textPrimary};
    opacity: 1.2;

    transition: var(--transition);
  }

  input,
  button,
  textarea {
    appearance: none !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    border-radius: var(--border-radius) !important;

    &:hover,
    &:active,
    &:focus {
      appearance: none !important;
      -moz-appearance: none !important;
      -webkit-appearance: none !important;
      border-radius: var(--border-radius) !important;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-title);
    font-weight: var(--font-title-font-weight);
    background-color: transparent;
  }

  .calendly-badge-widget {
    left: 20px;
    bottom: -50px;
    right: unset;
    transition: 800ms all cubic-bezier(0.71, 0, 0.18, 0.93);

    &.show {
      bottom: 15px;
    }

    &:hover {
      transform: scale(1.03);
    }

    .calendly-badge-content{
      font-family: var(--font-family-wide);
        font-style: italic;
        font-size: 1rem;
        font-weight: 400;

      span {
        display: none !important;
      }
    }
  }

  .hidden {
    display: none;
  }

  #axeptio_main_button {
    left: unset;
    right: 18px;

    svg path {
      fill: var(--clr-bg-secondary);
    }
  }
`
