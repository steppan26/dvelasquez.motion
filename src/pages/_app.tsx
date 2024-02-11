import { AnimatedLogo, Navbar } from '@/Components'
import { Menu } from '@/Containers/Menu'
import { Stores } from '@/Utils/stores'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Stores>
      <AnimatedLogo />
      <Menu />
      <Component {...pageProps} />
    </Stores>
  )
}
