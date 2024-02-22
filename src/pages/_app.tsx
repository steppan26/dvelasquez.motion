import type { AppProps } from 'next/app'
import { Stores } from '../utils/stores'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Stores>
      <Component {...pageProps} />
    </Stores>
  )
}
