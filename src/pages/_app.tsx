import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'
import Head from 'next/head'
import favicon from '/public/favicon.ico'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head>
        <link rel='icon' href={favicon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <Stores>
      <Component {...pageProps} />
    </Stores>
    </>
  )
}
