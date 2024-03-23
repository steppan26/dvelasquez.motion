import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'
import Head from 'next/head'
import favicon from '../Assets/favicon.png'
// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//   gtmId: 'GTM-000000'
// }

// TagManager.initialize(tagManagerArgs)

export default function MyApp({ Component, pageProps }: AppProps) {

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
