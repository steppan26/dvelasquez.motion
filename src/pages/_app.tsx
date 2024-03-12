import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'
// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//   gtmId: 'GTM-000000'
// }

// TagManager.initialize(tagManagerArgs)

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Stores>
      <Component {...pageProps} />
    </Stores>
  )
}
