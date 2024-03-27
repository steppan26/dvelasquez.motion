import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'
import Head from 'next/head'
import favicon from '../Assets/favicon.png'
//@ts-ignore
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

const tagManagerArgs = {
  gtmId: 'GTM-P2HPQTBZ'
}


export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => TagManager.initialize(tagManagerArgs), [])

  return (
    <>
    <Head>
        <link rel='icon' href={favicon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
    <Stores>
      <Component {...pageProps} />
    </Stores>
    </>
  )
}
