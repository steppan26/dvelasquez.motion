import { AnimatedLogo } from '../Components'
import { Menu } from '../Containers/Menu'
import { Stores } from '../utils/stores'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Stores>
      <AnimatedLogo />
      <Menu />
      <Component {...pageProps} />
    </Stores>
  )
}
