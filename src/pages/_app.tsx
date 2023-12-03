import { Stores } from '@/Utils/stores'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Stores>
      <Component {...pageProps} />
    </Stores>
  )
}
