import { ITheme, darkTheme, lightTheme } from "@/Assets"
import Head from "next/head"
import { useMemo, useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import favicon from '@/Assets/favicon.png'


type ColorScheme = 'light' | 'dark'

export const Theming:React.FC<any> = ({ children }) => {

  const [colorScheme, setColorScheme]  =useState<ColorScheme>('light')
  const currentTheme = useMemo(() => colorScheme === 'light' ? lightTheme : darkTheme, [colorScheme])

  return(
    <>
    <Head>
      <title>D.Velasquez</title>
      <link rel='icon' href={favicon.src} />
      <link rel="stylesheet" href="https://use.typekit.net/ojg6bke.css" />
    </Head>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
    </>
  )
}


const GlobalStyle = createGlobalStyle<{}>`
  :root {
    // VARIABLES
    --clr-text-main: ${p => (p.theme as ITheme).textPrimary};
    --clr-text-secondary: ${p => (p.theme as ITheme).textSecondary};
    --clr-bg-main: ${p => (p.theme as ITheme).backgroundPrimary};
    --clr-bg-secondary: ${p => (p.theme as ITheme).backgroundSecondary};

    --font-family: 'neusa-next-std', 'neusa-next-std-wide', sans-serif;
    --font-title-font-weight: 600;
    --font-title-color: var(--clr-text-main);
    --font-text-font-weight: 300;
    --font-text-color: var(--clr-text-main);

    background-color: var(--clr-bg-main);
  }

  body {
    background-color: var(--clr-bg-main);
    font-family: var(--font-text-family);
    font-weight: var(--font-text-font-weight);

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

  * {
    font-family: var(--font-family);
    font-weight: var(--font-text-font-weight);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family);
    font-weight: var(--font-title-font-weight);
    background-color: transparent;
  }

`
