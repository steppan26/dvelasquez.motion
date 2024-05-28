import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'
import Head from 'next/head'
import favicon from '/public/favicon.ico'
import { CursorMessage } from '../Components'
import { useEffect } from 'react'
import { useToggleCalendlyVisibility } from '../utils/hooks'
import { GoogleTagManager } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
  useToggleCalendlyVisibility()

  useEffect(() => {
    if(typeof window == 'undefined') return

    setTimeout(() => window?.Calendly?.initBadgeWidget({
      url: 'https://calendly.com/d-velasquezart',
      text: 'Schedule time with me',
      color: '#7a9b76',
      textColor: '#ffffff',
      branding: true
    }), 1000)
  }, [])

  return (
    <>
    <Head>
        <link rel='icon' href={favicon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <Stores>
      <GoogleTagManager gtmId='GTM-P2HPQTBZ' />
      <CursorMessage />
      <Component {...pageProps} />
    </Stores>
    </>
  )
}
