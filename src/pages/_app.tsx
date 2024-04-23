import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'
import Head from 'next/head'
import favicon from '/public/favicon.ico'
import { useCursorMessage } from '../utils/hooks'
import { CursorMessage } from '../Components'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if(typeof window == 'undefined') return

    window.Calendly.initBadgeWidget({
      url: 'https://calendly.com/d-velasquezart',
      text: 'Schedule time with me',
      color: '#7a9b76',
      textColor: '#ffffff',
      branding: true
    })
  }, [])

  return (
    <>
    <Head>
        <link rel='icon' href={favicon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <Stores>
      <CursorMessage />
      <Component {...pageProps} />
    </Stores>
    </>
  )
}
